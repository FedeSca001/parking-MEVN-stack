const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(cors());

//Route
app.use('/sites',require('./routes/sites'));
app.use('/users',require('./routes/users'));

app.get('/', (req, res)=>{
    res.send('api en marcha');
});

//Mongo DB
mongoose.connect(
    process.env.MONGODB_URI)
        .then(()=>{console.log('conectado a base de datos')})
        .catch(e=> console.log(e));


app.listen(port, ()=> console.log('logued',port));
