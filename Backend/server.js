const express = require('express');
const Sequelize = require('sequelize')
const { Client } = require('pg')

const app = express();


const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'groupe',
    database: 'movie'
});

client.connect();

app.use(express.json()); // req.body

app.get('/',(req,res)=>{
    client.query(`select * from users`, (err,results) =>{
        if(!err){
            console.log(results.rows);
            res.send(results.rows);
        }
        else{
            console.log(err.message);
            
        }
    })
    
})


app.listen(3000, ()=>{
    console.log('server is listening to port 3000');
})


