
const vegetables = require('../models/vegetables')


// The callback function from the "index" route
module.exports.index = (req, res) => {
    res.render('vegetables/Index', {vegetables})
}

// The callback function from the "show" route
module.exports.show = (req, res) => {
    res.render('vegetables/Show', { vegetable: vegetables[req.params.indexOfVegetable], index: req.params.indexOfVegetable })
}


//  GET /vegetables/new
module.exports.new = (req, res) => {
    res.render('vegetables/New')
}

//  GET /vegetables/:indexOfVegetable/edit
module.exports.edit = (req, res) => {
    res.render('vegetables/Edit', { vegetable: vegetables[req.params.indexOfVegetable], index: req.params.indexOfVegetable})
}

// POST /vegetables
module.exports.create = (req, res) => {
    console.log('POST /vegetables')
    console.log(req.body) // <-- should contain form data
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables.push(req.body)
    res.redirect('/vegetables')
}

// DELETE /vegetables/:indexOfVegetable
module.exports.destroy = (req, res) => {
    console.log('DELETE /vegetables/:indexOfVegetable')
    let index = Number(req.params.indexOfVegetable)
    console.log(req.params.indexOfVegetable)
    vegetables.splice(index, 1)
    res.redirect('/vegetables')
}

// PUT /vegetables/:indexOfVegetable
module.exports.update = (req, res) => {
    console.log('PUT /vegetables/:indexOfVegetable')
    
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    
    vegetables[req.params.indexOfVegetable] = req.body

    res.redirect('/vegetables')
}

