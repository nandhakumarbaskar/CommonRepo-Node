const express = require("express")
const bodyParser = require("body-parser")
const app = express()
require("dotenv").config()
require("./config/db") 
const blogRouter = require("./routes/blog.router")
const userRouter = require("./routes/user.router")
const blogmsqlRouter = require("./routes/blogmysql.router")
app.use(bodyParser.json())
let {verifyToken} = require("./controller/auth.controller")
app.use("/api/blog", verifyToken, blogRouter)
app.use("/api/mysqlblog", blogmsqlRouter)
app.use("/api", userRouter)
// require("./config/mongodb")


app.listen(7000, ()=>{
    console.log(`Server up and running on port ${process.env.PORT}`) 
})