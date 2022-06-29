
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3787;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended : true,
  })
)
app.get('/', (req, res) => {
  res.json({info : 'Node.js Express, and Postgres API'})
})

app.post("/user/login", db.getUser);
app.post("/lib/python/req/1", db.reqPyLibMg);
app.post("/lib/python/req/2", db.getPyId);
app.post("/lib/python/req/3", db.reqPyLib);

// pg.query("select * from link", (err, res)=> {
//     if(!err) console.log(res);
//     else console.log(err);
//     pg.end();
// });

app.post("/lib/python/list", db.pyList);

app.post("/lib/java/list", db.jvList);

app.post("/lib/python/detail", db.getPy);

app.post("/lib/java/detail", db.getJv);

app.post("/user/list", db.userList);

app.post("/lib/python/list/user", db.userPyList);

app.post("/lib/java/list/user", db.userJvList);

app.post("/main/user", db.userMain);

app.listen(port, ()=>{
  console.log(`App running on port ${port}.`);
})