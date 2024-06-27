const blogModel = require("../model/blog.model")
const pool = require("../config/mysql.db")

const createBlog = async (req, res)=>{
    try{
        const {title, description} = req.body
        const [result, row] = await pool.query(`insert into blog (title, blogDescription) values (?, ?)`, [title, description])
        console.log("result: ", result, "row: ", row)
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
        const [result, row] = await pool.query(`select * from blog`)
        console.log("result:", result)
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
        const [result, row] = await pool.query(`select * from blog where id=?`, [req.params.id])
        console.log("result: ", result, "row: ", row)
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
        const { title, description } = req.body
        const [result, row] = await pool.query(`update blog set title=?, blogDescription=? where id=?`, [title, description, req.params.id])
        console.log("result: ", result, "row: ", row)
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

const removeBlogById = async (req, res)=>{
    try{
        const [result, row] = await pool.query(`delete from blog where id= ?`, [req.params.id])
        if(result){
            res.status(200).send({
                success: true,
                message: result
            })
        }else{
            res.status(400).send({
                success: false,
                message: "error in blog removeBlogById"
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

const removeAll = async (req, res)=>{
    try{
        const [result, row] = await pool.query(`delete from blog`)
        if(result){
            res.status(200).send({
                success: true,
                message: result
            })
        }else{
            res.status(400).send({
                success: false,
                message: "error in blog removeAll"
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
    updateBlogById,
    removeBlogById,
    removeAll
}