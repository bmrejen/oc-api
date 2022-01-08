// Mongo
const mongoose = require("mongoose")
const password = process.env.PASSWORD
const login = process.env.LOGIN
const db = process.env.DB

const uri = `mongodb+srv://${login}:${password}@cluster0.1uk0a.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to database")
  })
  .catch((err) => console.error(err))

  module.exports = {mongoose}