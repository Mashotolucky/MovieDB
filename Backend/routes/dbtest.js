const { Pool, Client } = require('pg')
const express = require('express');
const commentRoute = require('./commentRoute');
const app = express();

// const pool = require('./db');
//creat routes
// app.post("/user", async(req,res) =>{
//     try {
//         //Await
//         const {description} = req.body;
//         const newUser = await pool.query(
//             "INSERT INTO user (description) VALUES ($1) RETURNING *",
//             [description]
//         );
//         res.json(newUser);
//     } catch (error) {
//         console.log(err.message);
//     }
// })
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'movies_app',
  password: 'admin',
  port: 5432,
})
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: false }));

app.use('/comment', commentRoute)
app.use('/', (req, res) => {
    // return res.send('connect')
    let query = {
        text: 'SELECT * FROM comments WHERE movie_id = 1',
        value: [req.params.movieId]
    }
    pool.query(query)
        .then(data => {
            console.log(data.rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
});


// const client = new Client({
//   user: 'dbuser',
//   host: 'database.server.com',
//   database: 'mydb',
//   password: 'secretpassword',
//   port: 3211,
// })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

app.listen(3000, ()=>{
    console.log('server is listening to port 3000');
})