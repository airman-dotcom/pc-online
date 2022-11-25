const express = require("express");
const app = express();
const key = "nevereverhaveibeenahuman";
const fs = require("fs");
const CryptoJS = require('crypto-js');

app.use(express.json());
app.use(express.static("public"));

const dir = __dirname + "/public";

app.get("/", (req, res) => {
    res.sendFile(dir + "/index.html")
})

app.listen(3000, "localhost")

app.post("/user", (req, res) => {
    console.log(1);
    let data = fs.readFileSync("main/users.txt");
    console.log(data)
})