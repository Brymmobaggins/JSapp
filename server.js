const express = require("express")
const mySql = require("mysql")

const app = express()
const DB = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs-login",
    port: 8889

});

DB.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL connected.....")
    }
})

app.get("/", (request, response) => {
    response.send("<h1>Home Page</h1>")

})

app.listen(5001, () => {
    console.log("Server started on 5001")
})
