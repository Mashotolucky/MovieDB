const { Pool, Client } = require('pg')
const express = require('express');
const commentRoute = require('./routes/commentRoute');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/comment', commentRoute)


app.listen(3000, ()=>{
    console.log('server is listening to port 3000');
})