const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/firstCommonDB")
const dbConn = mongoose.connection

dbConn.on("open", ()=>{
    console.log("Mongodb connected successfully..")
})
dbConn.on("error", (error)=>{
    console.log("error in db connection: "+error)
})

dbConn.on("close", ()=>{
    console.log("Mongodb closed")
})