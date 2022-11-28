const express = require("express");
const app = express();
const key = "nevereverhaveibeenahuman";
const fs = require("fs");
const CryptoJS = require('crypto-js');

app.use(express.json());
app.use(express.static("public"));

const dir = __dirname + "/public";

app.get("/", (req, res) => {
    res.send("<h1>This is not the page you're looking for.</h1>")
})

app.listen(3000, "localhost")
console.log(CryptoJS.AES.encrypt(`{"users": [[], [], []], "num": 0}`, key).toString())

app.post("/user", (req, res) => {
    let data = CryptoJS.AES.decrypt(fs.readFileSync("main/users.txt", "utf-8"), key).toString(CryptoJS.enc.Utf8);
    console.log(data)
    data = JSON.parse(data)
    let use = req.body;
    if ((data.users[0]).includes(use.uname)){
        if (data.users[1][(data.users).indexOf(use.uname)] == use.psw){
            res.json({status: true})
        } else {
            res.json({status: false, m: "incorrect password"})
        }
    } else {
        let n = data.users;
        let num = data.num;
        num++;
        let mac_ = num.toString(16);
        let b = mac_.length;
        for (let y = 0; y<12-b;y++){
            mac_ = "0" + mac_
        }
        let mac = "";
        for (let x = 0; x<mac_.length; x++){
            if (x == mac_.length - 1){
                mac += mac_[x-1] + mac_[x];
            }
            else if (x % 2 == 0 && x != 0){
                mac += mac_[x-1] + mac_[x] + ".";
            }
        }
        n[0].push(use.uname)
        n[1].push(use.psw)
        n[2].push(mac);
        fs.mkdirSync(`users/${mac}`, {recursive: true});
        fs.mkdirSync(`users/${mac}/files`, {recursive: true});
        fs.mkdirSync(`users/${mac}/chats`, {recursive: true})
        let send = CryptoJS.AES.encrypt(`{"users": [${n}], "num": ${num}}`, key).toString();
        fs.writeFileSync("main/users.txt", send);
        console.log("end")
        res.json({status: true})
    }
})