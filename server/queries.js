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

const reqPyLib = (req, res) => {
    const {pyVer, libName, libVer, libReason} = req.body;
    pool.query("insert into user_lib_rel( lib_kind, lib_reason_comment) values('python', $1)", [libReason], (error, results) =>{
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
        console.log(results.rows)
    })
}

module.exports = {
    getUser,
    reqPyLib
}