const express = require('express')

const app = express()

const PORT = 8080

// Bring in our routes
const fruitRoutes = require('./routes/fruitRoutes')
const meatRoutes = require('./routes/meatRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')

// Load the create engine function
const jsxEngine = require('jsx-view-engine')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Createthe engine and accept files ending in jsx
app.engine('jsx', jsxEngine())

// Connect our fruit routes to our express app
app.use('/fruits', fruitRoutes)
app.use('/meats', meatRoutes)
app.use('/vegetables', vegetableRoutes)

// "root" route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})


