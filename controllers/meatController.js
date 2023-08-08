
const meats = require('../models/meats')

// The callback function from the "index" route
function index(req, res) {
    res.render('meats/Index', {meats})
}

// The callback function from the "show" route
function show(req, res) {
    res.render('meats/Show', { meat: meats[req.params.indexOfMeat] })
}

module.exports = {
    index,
    show
}