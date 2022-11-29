const PetShelterController = require("../controllers/petshelter.controller")

module.exports = (app) => {
    app.get('/api/allPets', PetShelterController.allPets)
    app.get('/api/findById/:id', PetShelterController.findById)
    app.post('/api/addPet', PetShelterController.addPet)
    app.put('/api/update/:id', PetShelterController.updateById)
    app.delete('/api/delete/:id', PetShelterController.deleteById)
}