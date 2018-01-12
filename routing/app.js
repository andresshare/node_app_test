var pug = require('pug')
var express = require('express')
var app = express();


app.set("view engine", "pug")

//Url's
app.get("/", function (req, res) {
    res.render("index")
    
})

app.post('/', function (req, res) {
    res.render("form")
    
})

app.post('/:nopmbre', function (req, res) {
    // res.render("form",{nombre:req.params.nombre})

})


app.listen(8080, 'localhost')