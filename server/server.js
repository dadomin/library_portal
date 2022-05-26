
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

// pg.query("select * from link", (err, res)=> {
//     if(!err) console.log(res);
//     else console.log(err);
//     pg.end();
// });


app.listen(port, ()=>{
  console.log(`App running on port ${port}.`);
})
