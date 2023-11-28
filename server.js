require('dotenv').config()                                      // import dotenv
const express = require('express')                              // import express
const mongoose = require('mongoose')                            // import mongoose
const errorMiddleware = require('./middleware/errorMiddleware') // import error middleware
const proudctRoute = require('./routes/productRoute');          // import Route
var cors = require('cors')                                      // import cors

const app = express() // Create an app

// Import Variables from .env
const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

// 
var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/products', proudctRoute);

//Base url
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

//Sample page
app.get('/About', (req, res) => {
    res.send('This is an About page')
})

// Use error middleware
app.use(errorMiddleware);

// Connect to the database and start the app
mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})