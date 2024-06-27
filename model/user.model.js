const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
},{
    timestamp: true
})

module.exports = mongoose.model("user", userSchema)