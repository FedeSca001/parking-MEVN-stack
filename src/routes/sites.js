const express = require('express');
const parkSchema = require('../models/sitesSchema');

const router = express.Router();

//Add site
router.post('/park', async (req, res)=>{
    try{
        const newPark = parkSchema(req.body);
        const data = await newPark.save();
        console.log(data);
        }catch{
            err => console.log(err);
        }
});
//Busca toda la base de datos
router.get('/park', (req, res)=>{
    parkSchema.find()
        .then((data)=>{res.send(data)})
        .catch(err => console.log(err));
});
//Busca por numero de parking
router.get('/park/:id', (req, res)=>{
    const { id } = req.params
    parkSchema.find({"number":id})
        .then((data)=>{res.json(data)})
        .catch(err=> console.log(err));
});
//Update
router.put('/park/:id', (req, res)=>{
    const { id } = req.params;
    const { available } = req.body;
    parkSchema.updateOne({number: id},{$set:{available}})
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