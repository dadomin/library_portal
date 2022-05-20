const {Client} = require('pg');
const Query = require('pg').Query;
var express = require('express');
var app = express();

const client = new Client({
    user : "postgres",
    host: "hit-database.cbyjqqhfdtfa.ap-northeast-2.rds.amazonaws.com",
    database : "hitLibrary",
    password : "postgres",
    port: 5432
});

client.connect(err=>{
    if(err){
        console.err('connection error', err.stack);
    }else {
        console.log('success!');
    }
});

app.get("/getUser", function(req, res, next) {
    const query = new Query("select * from users where user_id = '" + req.query.id+"' and passwd = '" + req.query.pw + "'");
    client.query(query)

    var rows=[];

    query.on("row", row=>{
        rows.push(row);
    });

    query.on('end', ()=>{
        console.log(rows);
        console.log('query done');
        res.send(rows);
        res.status(200).end();
    });

    query.on('error', err=>{
        console.error(err.stack);
    });

});

// pg.query("select * from link", (err, res)=> {
//     if(!err) console.log(res);
//     else console.log(err);
//     pg.end();
// });


app.listen(3787)