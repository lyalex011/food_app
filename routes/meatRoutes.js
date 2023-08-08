const express = require('express')

// Create our router
const router = express.Router()


// Bring in our controller logic
const meatController = require('../controllers/meatController')

// "index" route      //   localhost:8080/fruits/
router.get('/', meatController.index)

// "show" route      //   localhost:8080/fruits/:indexOfFruit
router.get('/:indexOfMeat', meatController.show)

module.exports = router