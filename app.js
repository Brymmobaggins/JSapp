// import express from module
const express = require("express")
const path = require("path")

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

const publicDirectory = path.join(__dirname, "./dist")
app.use(express.static(publicDirectory))

// console.log(__dirname)
app.set('view engine', 'hbs')

DB.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL connected....")
    }
})

app.get("/", (req, res) => {
    res.render("login")

})

app.listen(5001, () => {
    console.log("Server started on 5001")
})
