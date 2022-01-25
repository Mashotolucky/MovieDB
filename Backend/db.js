const Client = require('pg');

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
  const client = new Client(credentials);
  const now = await client.query("SELECT NOW()");
  await client.end();

  return now;
}



const getUsers = (req, res) =>{
  client.query('SELECT * FROM user ORDER BY id ASC', (error, results)=>{
    if(error){
      throw error;
    }
    res.status(200).json(results.rows)
  })
};

const create = (req, res) =>{
  client.query('INSERT INTO (name, email) VALUES ($1, $2) RETURNING id',
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