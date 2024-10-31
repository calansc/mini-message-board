require("dotenv").config();
const { Pool } = require("pg");
const connectionString = process.env.CONNECTION_STRING;
const pool = new Pool({
  connectionString,
});

module.exports = pool;

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
// module.exports = new Pool({
//   host: process.env.HOST, // or wherever the db is hosted
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD, // the default port
// });
