
const meats = require('../models/meats')

// The callback function from the "index" route
module.exports.index = (req, res) => {
    res.render('meats/Index', {meats})
}

// The callback function from the "show" route
module.exports.show = (req, res) => {
    res.render('meats/Show', { meat: meats[req.params.indexOfMeat], index: req.params.indexOfMeat })
}


//  GET /meats/new
module.exports.new = (req, res) => {
    res.render('meats/New')
}

//  GET /meats/:indexOfMeat/edit
module.exports.edit = (req, res) => {
    console.log(meats[req.params.indexOfMeat])
    res.render('meats/Edit', { meat: meats[req.params.indexOfMeat], index: req.params.indexOfMeat })
}

// POST /meats
module.exports.create = (req, res) => {
    console.log('POST /meats')
    console.log(req.body) // <-- should contain form data
    if (req.body.state === 'on') {
        req.body.state = true
    } else {
        req.body.state = false
    }
    meats.push(req.body)
    res.redirect('/meats')
}

// DELETE /meats/:indexOfMeat
module.exports.destroy = (req, res) => {
    console.log('DELETE /meats/:indexOfMeat')
    // meats.findIndex((fruit, index) => index == req.params.indexOfMeat)
    let index = Number(req.params.indexOfMeat)
    meats.splice(index, 1)
    res.redirect('/meats')
}

// PUT /meats/:indexOfMeat
module.exports.update = (req, res) => {
    console.log('PUT /meats/:indexOfMeat')
    
    if (req.body.state === 'on') {
        req.body.state = true
    } else {
        req.body.state = false
    }
    
    meats[req.params.indexOfMeat] = req.body

    res.redirect('/meats')
}