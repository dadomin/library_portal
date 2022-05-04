var {Client} = require('pg');

const pg = new Client({
    user : "postgres",
    host: "3.34.196.200",
    database : "library",
    password : "damin",
    port: 5432
});

pg.connect();

pg.query("select * from link", (err, res)=> {
    if(!err) console.log(res);
    else console.log(err);
    pg.end();
});