const router = require("express").Router()
const userController = require("../controller/user.controller")
router.post("/signUp", userController.signUp)
router.post("/login", userController.login)
// router.get("/", blogController.getBlogs)
// router.get("/:id", blogController.getBlogById)
// router.put("/:id", blogController.updateBlogById)
// router.delete("/:id", blogController.removeBlogById)
// router.delete("/:id", blogController.removeAll)

module.exports = router