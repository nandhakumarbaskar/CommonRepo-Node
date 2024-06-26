const express = require("express")
const bodyParser = require("body-parser")
const app = express()
require("dotenv").config()
require("./config/db") 
const blogRouter = require("./routes/blog.router")
app.use(bodyParser.json())
app.use("/api/blog", blogRouter)


app.listen(7000, ()=>{
    console.log(`Server up and running on port ${process.env.PORT}`)
})