const express = require('express');
const userSchem = require('../models/userSchem');

const router = express.Router();

//Busca toda la base de datos
router.get('/', async (req, res)=>{
    try{
        const data = await userSchem.find({});
        const response = await res.send(data);
        console.log(req);
    } catch{
        err => console.log(err);
    }
})
//Select individual
router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    try{
        const data = await userSchem.find({"name": id});
        const response = await res.send(data);
        return response
    } catch{
        err => console.log(err);
    }
})

//Add user
router.post('/send', async (req, res)=>{
    try{
        const newUser = userSchem(req.body);
        const data = await newUser.save();
        const response = await res.send(data);
        console.log(response);
    } catch {
        err => console.log(err);
    }
});

//Update
router.put('/up/:id', async (req, res)=>{
    const { id } = req.params;
    const { name,age,dni,phone,mail } = req.body;
    try{
        const data = await parkSchema.updateOne({"name": id},{$set:{name,age,dni,phone,mail}});
        const response = await res.json(data);
        console.log(response);
    } catch {
        err => console.log(err);
    }
});

//Delete only one
router.delete('/delet/:id', async (req,res)=>{
    try{
        const { id } = req.params;
        const data = await userSchem.remove({name: id});
        const response = await res.send(data);
        console.log(response);
    } catch{
        err=>console.log(err);
    }
})

//Delete all
router.delete('/delet', async (req,res)=>{
    try{
        const data = await userSchem.remove();
        const response = await res.send(data);
        console.log(response);
    }catch{
        err=>console.log(err);
    }
})

module.exports = router;
