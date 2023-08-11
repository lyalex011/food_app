const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fruitSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true 
    },
    readyToEat:{
        type:Boolean,
        
    }

})

const Fruit = mongoose.model('fruits', fruitSchema)
module.exports = Fruit