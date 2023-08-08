
const vegetables = require('../models/vegetables')


// The callback function from the "index" route
function index(req, res) {
    res.render('vegetables/Index', {vegetables})
}

// The callback function from the "show" route
function show(req, res) {
    res.render('vegetables/Show', { vegetable: vegetables[req.params.indexOfVegetable] })
}

module.exports = {
    index,
    show
}