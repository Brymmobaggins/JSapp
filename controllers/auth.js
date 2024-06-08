const mySql = require("mysql");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const cookieParser = require("cookie-parser")

const DB = mySql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});

exports.register = (req, res) => {
    console.log(req.body)

    // destructuring
    const { name, email, password, confirmPassword } = req.body

    DB.query("SELECT email FROM user WHERE email = ?", [email], async (error, results) => {
        if (error) {
            console.log(error)
        }
        if (results.length > 0) {
            return res.render("register", {
                message: "email is already in use"
            })
        } else if (password !== confirmPassword) {
            return res.render("register", {
                message: "Password do not match"
            })

        }
        let hashedPassword = await bcrypt.hash(password, 8)
        console.log(hashedPassword)

    })

    // res.send("form submitted")
}