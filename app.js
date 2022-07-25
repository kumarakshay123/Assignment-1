const http=require('http');

const morgan =require('morgan');

const express = require('express');


const bodyParser=require('body-parser');



const dishRouter=require('./routes/dishRouter');

const leaderRouter=require('./routes/leaderRouter');

const promoRouter=require('./routes/promoRouter');

const hostname='localhost';

const port=3000;

const app=express();


app.use(morgan('dev'));

app.use(bodyParser.json());


app.use('/dishes',dishRouter);

app.use('/promotions',promoRouter);

app.use('/leaders',leaderRouter);

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log("Server is running at http://"+hostname+":"+port);
})






