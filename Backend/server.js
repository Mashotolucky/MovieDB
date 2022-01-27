const express = require('express');
const commentRoute = require('./routes/comment');
const userRoute =  require('./routes/user')
const watchlistRoute = require('./routes/watchlist')
const authRoute = require('./routes/auth')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/comment', commentRoute);
app.use('/user', userRoute);
app.use('/watchlist', watchlistRoute);
app.use('/auth', authRoute);


app.listen(3000, ()=>{
    console.log('server is listening to port 3000');
})

