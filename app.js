// ====================== Setup ======================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//////
// ====================== Routes ======================
app.get("/", function(req, res){
    res.render("home");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server was started");
})

