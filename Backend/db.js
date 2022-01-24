const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "groupe",
    database: "movie_db",
    host: "localhost",
    port: "5432"
});

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })

module.exports = pool;