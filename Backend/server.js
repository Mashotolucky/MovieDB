const express = require('express');
const Sequelize = require('sequelize');
const { Client } = require('pg');
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'groupe',
    database: 'movie'
});


const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.json()); // req.body



app.listen(3000, ()=>{
    console.log('server is listening to port 3000');
})

client.connect();

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
    client.end;
})

app.get('/users/:id', (req, res)=>{
    client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `INSERT INTO users(name, email, password) 
                       values('${user.name}', '${user.email}', '${user.password}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/users/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update users
                       set name = '${user.name}',
                       email = '${user.email}',
                       password = '${user.password}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/users/:id', (req, res)=> {
    let insertQuery = `delete from users where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


