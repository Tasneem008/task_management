const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "postgres",
  database: "todos",
  password: "12345",
  port: 5433,
});
