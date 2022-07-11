const express = require('express');
const userSchem = require('../models/userSchem');

const router = express.Router();

//Busca toda la base de datos
router.get('/', (req, res)=>{
    userSchem.find()
        .then((data)=>{res.send(data)})
        .catch(err => console.log(err));
});
//Select individual
router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    try{
        const data = await userSchem.find({"name": id});
        const response = await res.json(data);
    } catch{
        err => console.log(err);
    }
})

//Add user
router.post('/send', async (req, res)=>{
    const newUser = userSchem(req.body);
    try{
        const data = await newUser.save();
        await res.json(data);
    } catch {
        err => console.log(err);
    }
});

//Update
router.put('/up/:id', async (req, res)=>{
    const { id } = req.params;
    const { name } = req.body;
    try{
        const data = await parkSchema.updateOne({"name": id},{$set:{name}});
        const response = await res.json(data);
    } catch {
        err => console.log(err);
    }
});

module.exports = router;
