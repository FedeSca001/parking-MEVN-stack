const express = require('express');
const parkSchema = require('../models/sitesSchema');

const router = express.Router();

//Add site
router.post('/park', async (req, res)=>{
    try{
        const newPark = parkSchema(req.body);
        const data = await newPark.save();
        console.log(data,'data');
        }catch{
            err => console.log(err);
        }
});
//Busca toda la base de datos
router.get('/park', async (req, res)=>{
    try{
    const data = await parkSchema.find();
    const response = res.send(data);
    console.log(response);
    } catch {
        err => console.log(err);
    }
});
//Busca por numero de parking
router.get('/park/:id', async (req, res)=>{
    try {
        const { id } = req.params
        const data = await parkSchema.find({"number":id});
        const response = await res.send(data);
        console.log(response);     
    } catch {
        err => console.log(err);
    }

});

//Update - add params
router.put('/park/:id', (req, res)=>{
    const { id } = req.params;
    const { avaliable, name, } = req.body;
    parkSchema.updateOne({number: id},{$set:{avaliable, name}})
        .then(data => {res.json(data)})
        .catch(err => console.log(err));
});
//Delete
router.delete('/park/:id',(req, res)=>{
    const { id } = req.params;
    parkSchema
        .remove({number: id})
        .then((resp) => {res.json(resp)})
        .catch(err => console.log(err))
})
//Delete all
router.delete('/park',(req,res)=>{
    parkSchema
        .remove()
        .then((data) => res.json(data))
        .catch(err => console.log(err))
})

module.exports = router;