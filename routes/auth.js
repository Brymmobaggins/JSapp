const express = require("express")
const authController = require("../controllers/auth")

const router = express.Router()
// console.log(loading pages)

router.post("/register", authController.register)


module.exports = router 