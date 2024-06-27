const userModel =  require("../model/user.model")
const { genSaltSync, hashSync, compareSync } = require("bcryptjs")
const jwt = require("jsonwebtoken")

const signUp = async (req, res)=>{
    try{
        const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
        const userObj = new userModel({
            username: body.username,
            password: body.password
        })
        const result = await userObj.save()
        if(result){
            res.status(201).send({
                success: true,
                message: "user created successfully"
            })
        }else{
            res.status(400).send({
                success: false,
                message: "error in user creation"
            })
        }
    }catch(error){
        error = error.message ? error.message : error
        res.status(503).json({
            success: false,
            message: error
        })
    }
}

const login = async (req, res)=>{
    try{
        const body = req.body
        // const salt = genSaltSync(10)
        // body.password = hashSync(body.password, salt)
        // const userObj = new userModel({
        //     username: body.username,
        //     password: body.password
        // })
        const result = await userModel.findOne({username: body.username})
        if(result){
            if(!compareSync(body.password, result.password)){
                return res.status(400).json({
                    success: false,
                    message: "Wrong password"
                })
            }
            console.log("Hi")
            const token = jwt.sign({ username: result.username}, 'SECRET',{ expiresIn: '1h'})           

            res.status(200).send({
                success: true,
                token: token
            })
        }else{
            res.status(400).send({
                success: false,
                message: "error in user creation"
            })
        }
    }catch(error){
        error = error.message ? error.message : error
        res.status(503).json({
            success: false,
            message: error
        })
    }
}



module.exports = {
    signUp,
    login
}