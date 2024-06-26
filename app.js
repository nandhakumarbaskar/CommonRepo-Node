const express = require("express")
const app = express()
require("dotenv").config()
require("./config/db") 


app.listen(7000, ()=>{
    console.log(`Server up and running on port ${process.env.PORT}`)
})