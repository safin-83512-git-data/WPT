// load mysql module
const mysql = require('mysql2')

// pool: collection of connections
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'airbnb_db',
  port: 3306,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

// export the pool
module.exports = { pool }
