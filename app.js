var pug = require('pug')
var express = require('express')
var app = express();


app.set("view engine","pug")

app.get("/",function (req,res) {
    res.render("index.pug",{hola:"Text of sms"})
    res.end()
})

app.listen(8080,'localhost')