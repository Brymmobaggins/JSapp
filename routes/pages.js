const express = require("express")

const router = express.Router()
// console.log(loading pages)

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/register", (req, res) => {
    res.render("register")
})

module.exports = router 