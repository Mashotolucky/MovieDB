const { Pool, Client } = require('pg')

pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'movies_app',
    password: 'admin',
    port: 5432,
  })

  module.exports = pool