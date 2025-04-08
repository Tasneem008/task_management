const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "postgres",
  database: "todos",
  password: "90448",
  port: 5432,
});
