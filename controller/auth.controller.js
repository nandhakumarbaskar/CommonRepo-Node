const { verify } = require("jsonwebtoken")

const verifyToken = async (req, res, next)=>{
    // let token = req.headers.authorization
    // if(token){
    //     token = token.split(" ")[1]
    //     if(verify(token, 'SECRET')){
    //         next()
    //     }else{
    //         return res.status(400).json({
    //             success: false,
    //             message: "invalid token"
    //         })
    //     }
    // }else{
    //     return res.status(400).json({
    //         success: false,
    //         message: "No token"
    //     })
    // }
    try{
        let token = req.headers.authorization
    if(token){
        token = token.split(" ")[1]
        if(verify(token, 'SECRET')){
            next()
        }else{
            return res.status(400).json({
                success: false,
                message: "invalid token"
            })
        }
    }else{
        return res.status(400).json({
            success: false,
            message: "No token"
        })
    }

    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })

    }
}
module.exports = {
    verifyToken
}