
const express = require("express")
require("dotenv").config()
const app = express()


app.get("/",(req,res) => { 
    res.send(`<h1>This is a test page for testing Docker container <br> still works</h1>`);
})


const port = process.env.PORT || 3333

app.listen(port, () => console.log(`listening on port ${port}`))