// const express = require('express');
// const app = express();

// const pool = require('./db');

// app.use(express.json()); // req.body

// //creat routes
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

// app.listen(3000, ()=>{
//     console.log('server is listening to port 3000');
// })