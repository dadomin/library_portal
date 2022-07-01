
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

app.post("/user/login", db.getUser);
app.post("/lib/python/req/1", db.reqPyLibMg);
app.post("/lib/python/req/2", db.getPyId);
app.post("/lib/python/req/3", db.reqPyLib);

app.post("/lib/python/list", db.pyList);

app.post("/lib/java/list", db.jvList);

app.post("/lib/python/detail", db.getPy);

app.post("/lib/java/detail", db.getJv);

app.post("/user/list", db.userList);

app.post("/main", db.main);

app.post("/user/detail", db.userDetail);

app.listen(port, ()=>{
  console.log(`App running on port ${port}.`);
})