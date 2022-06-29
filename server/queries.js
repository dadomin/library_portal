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
    pool.query("select * from user_lib_rel a, py_lib_mg b where a.lib_id = b.id", (error, results) => {
        if(error) {
            throw error;
        }

        res.status(200).json(results.rows);
        console.log(results.rows);
    })
}

const userPyList = (req, res) => {
    const {startDate, endDate, libName, userId, checkStatus} = req.body;
    

    pool.query("select * from user_lib_rel a, py_lib_mg b where a.lib_id = b.id and a.req_user_id = $1 and b.plib_name like '%'||$2||'%' and substring(a.req_date,1,10)::date >= $3 and substring(a.req_date,1,10)::date <= $4 and b.imp_status::integer = any($5::int[])", [userId, libName, startDate, endDate, checkStatus], (error, results)=>{
        if(error) {
            throw error;
        }
        console.log('hit');
        console.log(libName);
        res.status(200).json(results.rows);
        console.log(results.rows);
    })
    
}

const userJvList = (req, res) => {
    const {startDate, endDate, libName, userId, checkStatus} = req.body;
    

    pool.query("select * from user_lib_rel a, jv_lib_mg b where a.lib_id = b.id and a.req_user_id = $1 and b.jlib_name like '%'||$2||'%' and substring(a.req_date,1,10)::date >= $3 and substring(a.req_date,1,10)::date <= $4 and b.imp_status::integer = any($5::int[])", [userId, libName, startDate, endDate, checkStatus], (error, results)=>{
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
    pool.query("select * from user_lib_rel a, jv_lib_mg b where a.lib_id = b.id", (error, results) => {
        if(error) {
            throw error;
        }
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
    pool.query("select * from users", (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
        console.log(results.rows);
    })
}

const userMain = (req,res) => {
    const query = "select * from users;" + "select * from py_lib_mg";
    pool.query(query,(error, results) => {
        if(error) { 
            throw error;
        }

        res.status(200).json(results);
        console.log(results[0].rows);
        console.log(results[1].rows);
    })
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
    userPyList,
    userJvList,
    userMain
}