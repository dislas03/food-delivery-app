const express = require("express")
const mongoose = require("mongoose")
const app = express()
const ejs = require("ejs")
const path = require('path')
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('./controllers/userController')
const { validateUserInput } = require('./middleware/validationMiddleware')
const PORT = 3000


//Connecting ejs template to app
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json());

// //Get our home page
// const indexRouter = require("./routes/index")
// app.use("/home", indexRouter)

//Create a new user and make sure all input is validated
app.post('/users', validateUserInput, createUser);

//Get all users
app.get('/users', getUsers);

//Get a single user by ID
app.get('/users/:id', getUserById);

//Update a user by ID 
app.get('/users/:id', updateUser);

//Delete a user by ID
app.delete('/users/:id', deleteUser);

//

//Connect to the port
app.listen( PORT, () => {
    console.log(`app is listening to ${PORT}`)
})

