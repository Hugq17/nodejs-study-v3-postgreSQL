// const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "students",
//     password: "12345",
//     port: 5432,
// })

const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: "postgres://default:DgTL32AJSMZk@ep-weathered-shadow-a166de4i-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
})

module.exports = pool