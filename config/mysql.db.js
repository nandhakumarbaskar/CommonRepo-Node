// const { connection } = require("mongoose")
const mysql = require("mysql2")
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "firstCommonDB"
})

pool.getConnection((err, connection)=>{
    if(err){
        console.log(`error: ${err}`)
    }else{
        console.log("Connected successfully..")
    }
})

module.exports = pool.promise()