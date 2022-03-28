
require('dotenv').config();


module.exports = {
  "development": {
    "username": process.env.PG_USER,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DB,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging":false
  }
}
