var {Client} = require('pg');

const pg = new Client({
    user : "postgres",
    host: "3.34.196.200",
    database : "library",
    password : "damin",
    port: 5432
});

