const Pool = require('pg').Pool;

const pool = new Pool(require('./config/dbConfig.js'));

const getUser = (req,response) => {
    const {id, pw} = req.body;
    pool.query('select * from users where user_id = $1 and passwd =$2',[id, pw], (error, results) =>{
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows);
        console.log(results.rows)
    })
}

const userDetail = (req,res) => {
    const {userId} = req.body;
    pool.query('select * from users where user_id = $1',[userId], (error, results) =>{
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
        console.log(results.rows)
    })
}

const reqPyLibMg = (req, res) => {
    
    res.setHeader('Content-Type', 'application/json');
    const {pyVer, libName, libVer} = req.body;
    pool.query("insert into py_lib_mg(plib_name, plib_ver, python_ver, imp_status,created_at) values($1, $2, $3, 0,now())", [libName, libVer, pyVer], (error,results)=>{
        if(error) {
            throw error;
        }

        res.status(200).json(results.rows);
        console.log(results.rows);
        console.log("추가");
       
    })
}

const getPyId = (req, res) => {
    pool.query("select id from py_lib_mg order by id desc limit 1", (error,results)=>{
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
        console.log(results.rows);
        console.log("가져오기");
        
    })
}

const reqPyLib = (req, res) => {
    const {userId, userName, pyId, libReason, libKind} = req.body;
    pool.query("insert into user_lib_rel(req_user_id, req_user_name, lib_id, lib_reason_comment, lib_kind, req_date, created_at) values($1,$2,$3,$4,$5,now(),now())", [userId, userName, pyId, libReason, libKind], (error, results) => {
        if(error){
            throw error;
        }

        res.status(200).json(results.rows);
        console.log(results.rows);
        console.log("추가2");
    })
}

const pyList = (req, res) => {
    const {startDate, endDate, libName, userId, checkStatus, userName} = req.body;
    

    pool.query("select * from user_lib_rel a, py_lib_mg b where a.lib_id = b.id and a.req_user_name like '%'||$1||'%' and a.req_user_id like '%'||$2||'%' and b.plib_name like '%'||$3||'%' and substring(a.req_date,1,10)::date >= $4 and substring(a.req_date,1,10)::date <= $5 and b.imp_status::integer = any($6::int[])", [userName, userId, libName, startDate, endDate, checkStatus], (error, results)=>{
        if(error) {
            throw error;
        }
        console.log('hit');
        console.log(libName);
        res.status(200).json(results.rows);
        console.log(results.rows);
    })
}


const jvList = (req, res) => {
    const {startDate, endDate, libName, userId, checkStatus, userName} = req.body;
    

    pool.query("select * from user_lib_rel a, jv_lib_mg b where a.lib_id = b.id and a.req_user_id like '%'||$1||'%' and b.jlib_name like '%'||$2||'%' and substring(a.req_date,1,10)::date >= $3 and substring(a.req_date,1,10)::date <= $4 and b.imp_status::integer = any($5::int[]) and a.req_user_name like '%'||$6||'%'", [userId, libName, startDate, endDate, checkStatus, userName], (error, results)=>{
        if(error) {
            throw error;
        }
        console.log('hit');
        console.log(libName);
        res.status(200).json(results.rows);
        console.log(results.rows);
    })
}

const getPy = (req, res) => {
    const {id} = req.body;
    pool.query("select * from py_lib_mg a, user_lib_rel b where a.id = b.lib_id and b.lib_id = $1",[id], (error, results)=>{
        if(error) {
            throw error;
        }

        res.status(200).json(results.rows);
        console.log(results.rows);
    })
}

const getJv = (req,res) =>{
    const {id} = req.body;

    pool.query("select * from jv_lib_mg a, user_lib_rel b where a.id = b.lib_id and b.lib_id = $1", [id], (error, results) =>{
        if(error) {
            throw error;
        }

        res.status(200).json(results.rows);
        console.log(results.rows);
    })
}

const userList = (req,res) => {
    const {userId, userName, userDept, userGrade, checkStatus} = req.body;
    pool.query("select * from users where user_id != 'admin' and user_id like '%'||$1||'%' and user_name like '%'||$2||'%' and user_dept like '%'||$3||'%' and user_grade like '%'||$4||'%' and admin_type::integer = any($5::int[])", [userId, userName, userDept, userGrade, checkStatus],(error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
        console.log(results.rows);
    })
}

const main = (req,res) => {
    const {now, userId} = req.body;
    if(now === "0") {
// 사용자일때
        const query = "select cnt1, cnt2, cnt3, cnt4, cnt5, cnt6, cnt7, cnt8, cnt9, cnt10, cnt11, cnt12, cnt13 from " +
        "(select count(*) as cnt1 from user_lib_rel where req_user_id = $1) data1, "+
        "(select count(*) as cnt2 from user_lib_rel where req_user_id = $1 and lib_kind = 'python') data2, " +
        "(select count(*) as cnt3 from user_lib_rel where req_user_id = $1 and lib_kind = 'java') data3," +
        "(select count(*) as cnt4 from user_lib_rel a, py_lib_mg b where a.req_user_id = $1 and b.imp_status = '0' and a.lib_id = b.id) data4,"+
        "(select count(*) as cnt5 from user_lib_rel a, py_lib_mg b where a.req_user_id = $1 and b.imp_status = '1' and a.lib_id = b.id) data5,"+
        "(select count(*) as cnt6 from user_lib_rel a, py_lib_mg b where a.req_user_id = $1 and b.imp_status = '2' and a.lib_id = b.id) data6,"+
        "(select count(*) as cnt7 from user_lib_rel a, py_lib_mg b where a.req_user_id = $1 and b.imp_status = '3' and a.lib_id = b.id) data7,"+
        "(select count(*) as cnt8 from user_lib_rel a, py_lib_mg b where a.req_user_id = $1 and b.imp_status = '4' and a.lib_id = b.id) data8,"+
        "(select count(*) as cnt9 from user_lib_rel a, jv_lib_mg b where a.req_user_id = $1 and b.imp_status = '0' and a.lib_id = b.id) data9,"+
        "(select count(*) as cnt10 from user_lib_rel a, jv_lib_mg b where a.req_user_id = $1 and b.imp_status = '1' and a.lib_id = b.id) data10,"+
        "(select count(*) as cnt11 from user_lib_rel a, jv_lib_mg b where a.req_user_id = $1 and b.imp_status = '2' and a.lib_id = b.id) data11,"+
        "(select count(*) as cnt12 from user_lib_rel a, jv_lib_mg b where a.req_user_id = $1 and b.imp_status = '3' and a.lib_id = b.id) data12,"+
        "(select count(*) as cnt13 from user_lib_rel a, jv_lib_mg b where a.req_user_id = $1 and b.imp_status = '4' and a.lib_id = b.id) data13";
        pool.query(query,[userId],(error, results) => {
            if(error) { 
                throw error;
            }
    
            res.status(200).json(results);
            console.log(results.rows);
        })
    }else {
        // 관리자&시스템 관리자
        const query = "select cnt1, cnt2, cnt3, cnt4, cnt5, cnt6, cnt7, cnt8, cnt9, cnt10, cnt11, cnt12, cnt13 from " +
        "(select count(*) as cnt1 from user_lib_rel ) data1, "+
        "(select count(*) as cnt2 from user_lib_rel where lib_kind = 'python') data2, " +
        "(select count(*) as cnt3 from user_lib_rel where lib_kind = 'java') data3," +
        "(select count(*) as cnt4 from user_lib_rel a, py_lib_mg b where b.imp_status = '0' and a.lib_id = b.id) data4,"+
        "(select count(*) as cnt5 from user_lib_rel a, py_lib_mg b where b.imp_status = '1' and a.lib_id = b.id) data5,"+
        "(select count(*) as cnt6 from user_lib_rel a, py_lib_mg b where b.imp_status = '2' and a.lib_id = b.id) data6,"+
        "(select count(*) as cnt7 from user_lib_rel a, py_lib_mg b where b.imp_status = '3' and a.lib_id = b.id) data7,"+
        "(select count(*) as cnt8 from user_lib_rel a, py_lib_mg b where b.imp_status = '4' and a.lib_id = b.id) data8,"+
        "(select count(*) as cnt9 from user_lib_rel a, jv_lib_mg b where b.imp_status = '0' and a.lib_id = b.id) data9,"+
        "(select count(*) as cnt10 from user_lib_rel a, jv_lib_mg b where b.imp_status = '1' and a.lib_id = b.id) data10,"+
        "(select count(*) as cnt11 from user_lib_rel a, jv_lib_mg b where b.imp_status = '2' and a.lib_id = b.id) data11,"+
        "(select count(*) as cnt12 from user_lib_rel a, jv_lib_mg b where b.imp_status = '3' and a.lib_id = b.id) data12,"+
        "(select count(*) as cnt13 from user_lib_rel a, jv_lib_mg b where b.imp_status = '4' and a.lib_id = b.id) data13";
        pool.query(query,(error, results) => {
            if(error) { 
                throw error;
            }
    
            res.status(200).json(results);
            console.log(results.rows);
        })
    }
}

module.exports = {
    getUser,
    reqPyLib,
    pyList,
    getPy,
    getJv,
    jvList,
    reqPyLibMg,
    getPyId,
    userList,
    main,
    userDetail
}