require('dotenv').config();
require('./db/database'); //db connectivity
const express = require('express');
const wordRouter = require('./router/words');
const app = express();

app.use(express.json());

app.use('/api', wordRouter);

app.listen(process.env.PORT, ()=>{
    console.log('server started');
})