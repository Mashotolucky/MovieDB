const Pool = require('pg').Pool;

const credentials = {
    user: "postgres",
    password: "groupe",
    database: "movie_db",
    host: "localhost",
    port: "5432"
};

// pool.query('SELECT NOW()', (err, res) => {
    
//     console.log(err, res)
  
//   })

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();

  return now;
}



const getUsers = (req, res) =>{
  pool.query('SELECT * FROM user ORDER BY id ASC', (error, results)=>{
    if(error){
      throw error;
    }
    res.status(200).json(results.rows)
  })
};

const create = (req, res) =>{
  pool.query('INSERT INTO (name, email) VALUES ($1, $2) RETURNING id',
  [name,email],
  (error, results) =>{
    if(error){
      throw error;
    }
    res.status(2001).send(`User added with ID:${results.rows[0].id}`);
  })
}

module.exports = {
  getUsers,
  create
}