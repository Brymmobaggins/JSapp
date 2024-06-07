// import express from module
const express = require("express")
const path = require("path")
const hbs = require("hbs")

// import mySQL from module
const mySql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" })

// create express server
const app = express()

const DB = mySql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});

DB.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL connected....")
    }
})
const publicDirectory = path.join(__dirname, "dist")
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs')


// render home page
app.get("/", (req, res) => {
    res.render("index")
})
// render register page
app.get("/register", (req, res) => {
    res.render("register")

})


// app listen to server on port 5000
app.listen(5000, () => {
    console.log("Server started on 5000")
})
