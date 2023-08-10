const express = require('express')


const router = express.Router()


const vegetableController = require('../controllers/vegetableController')


router.get('/', vegetableController.index)

// "new" route
router.get('/new', vegetableController.new)

// "destroy" route
router.delete('/:indexOfVegetable', vegetableController.destroy)

// "update" route
router.put('/:indexOfVegetable', vegetableController.update)

// "create" route
router.post('/', vegetableController.create)

// "edit" route
router.get('/:indexOfVegetable/edit', vegetableController.edit)


router.get('/:indexOfVegetable', vegetableController.show)

module.exports = router