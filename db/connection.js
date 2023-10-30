require("dotenv").config()

const DB_URL = "mongodb+srv://islas0903:meliDavid09031106@cluster0.ir0olgy.mongodb.net/WAD-Dashers?retryWrites=true&w=majority"

const PORT = process.env.PORT || 3000;

module.exports = { DB_URL, PORT};