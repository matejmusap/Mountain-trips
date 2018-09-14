var express = require("express"),
    app     = express(),
    port    = process.env.PORT || 3000;
    
app.use(express.static(__dirname));
    
app.get("/", function(req, res) {
    res.redirect("/mountains");
});

app.get("/mountains", function(req, res){
    res.sendFile(__dirname + "/front.html");
});

app.listen(port, function() {
    console.log("Server has started at " + port);
});