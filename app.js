// ====================== Setup ======================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//////
// ====================== Routes ======================
app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(port, function(){
    console.log("Server was started in port : " + port);
});

// app.listen(process.env.PORT, process.env.IP, function(){
//    console.log("Server was started" + );
// });

