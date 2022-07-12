const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5050;

//Middleware
app.use(express.json());
app.use(morgan('dev')),
app.use(cors());

//Route
app.use('/sites',require('./routes/sites'));
app.use('/users',require('./routes/users'));

app.get('/', (req, res)=>{
    res.send('api en marcha');
});

//Mongo DB
const conectDB = async ()=>{
    try{
        const data = await mongoose.connect(process.env.MONGODB_URI);
        console.log('conectado a base de datos ')
        return {data};
    } catch {
        err => console.log(err)
    }
}

app.listen(port, ()=> {
    conectDB();
    console.log('logued',port);
});
