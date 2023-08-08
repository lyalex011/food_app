const express = require('express')


const router = express.Router()


const vegetableController = require('../controllers/vegetableController')


router.get('/', vegetableController.index)


router.get('/:indexOfVegetable', vegetableController.show)

module.exports = router