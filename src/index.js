const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');

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


//Filesystem
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cd)=>{
        cb(null, './images')
    },
    filename: (req,)=>{
        cb(null,Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage : fileStorageEngine})

app.post('/single', upload.single('image'), (req,res)=>{
    console.log(req.file);
    res.send('single file upload')
})


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

//INIT
app.listen(port, async ()=> {
    await conectDB();
    console.log('logued',port);
});
