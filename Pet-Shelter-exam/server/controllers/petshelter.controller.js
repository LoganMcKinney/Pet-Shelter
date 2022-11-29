const PetShelter = require('../models/petshelter.model')

const addPet = (req,res) => {
    PetShelter.create(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const allPets = (req,res) => {
    PetShelter.find()
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const findById = (req,res) => {
    PetShelter.findOne({_id:req.params.id})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const updateById = (req,res) => {
    PetShelter.updateOne({_id:req.params.id}, req.body,{new:true,runValidators:true})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const deleteById = (req,res) => {
    PetShelter.remove({_id:req.params.id})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

module.exports = {
    addPet,
    allPets,
    findById,
    updateById,
    deleteById
}