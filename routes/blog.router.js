const router = require("express").Router()
const blogController = require("../controller/blog.controller")
router.post("/", blogController.createBlog)
router.get("/", blogController.getBlogs)
router.get("/:id", blogController.getBlogById)
router.put("/:id", blogController.updateBlogById)
router.delete("/:id", blogController.removeBlogById)
router.delete("/:id", blogController.removeAll)

module.exports = router