const blogModel = require("../model/blog.model")

const createBlog = async (req, res)=>{
    try{
        const body = req.body
        const blogObj = new blogModel({
            title: body.title,
            description: body.description
        })
        const result = await blogObj.save()
        if(result){
            res.status(201).send({
                success: true,
                message: "Blog created successfully"
            })
        }else{
            res.status(400).send({
                success: false,
                message: "error in blog creation"
            })
        }

    }catch(error){
        error = error.message ? error.message :error
        res.status(503).send({
            success: false,
            message: error
        })
    }
}

const getBlogs = async (req, res)=>{
    try{
        const result = await blogModel.find({})
        if(result){
            res.status(200).send({
                success: true,
                message: result
            })
        }else{
            res.status(400).send({
                success: false,
                message: "error in blog get"
            })
        }

    }catch(error){
        error = error.message ? error.message :error
        res.status(503).send({
            success: false,
            message: error
        })
    }
}

const getBlogById = async (req, res)=>{
    try{
        const result = await blogModel.findById(req.params.id)
        if(result){
            res.status(200).send({
                success: true,
                message: result
            })
        }else{
            res.status(400).send({
                success: false,
                message: "error in blog getBlogById"
            })
        }

    }catch(error){
        error = error.message ? error.message :error
        res.status(503).send({
            success: false,
            message: error
        })
    }
}

const updateBlogById = async (req, res)=>{
    try{
        const result = await blogModel.findByIdAndUpdate(req.params.id, req.body)
        if(result){
            res.status(200).send({
                success: true,
                message: result
            })
        }else{
            res.status(400).send({
                success: false,
                message: "error in blog updateBlogById"
            })
        }

    }catch(error){
        error = error.message ? error.message :error
        res.status(503).send({
            success: false,
            message: error
        })
    }
}

module.exports = {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlogById
}