const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "",
  user: "",
  password: "",
  database: "",
  port: 3306,
});

module.exports = pool.promise();