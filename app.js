/**
 * Created by kcassidy on 21/02/2018.
 */

// require my modules
var express = require("express");

// configure globals
var port = 8082;

var app = express();

// configure our middleware
app.use(function(req, res, next) {
    console.log(req.url);
    next();
});
app.use(express.static("public"));


// configure our routes
app.post("/send-email", function(request, response) {
    // here we would get the real data from the DB
    // we are just making up some sample data instead
    var data = [{"id": "1", "name": "potato"},
                {"id": "2", "name": "cabbage"}
                ];
    response.send(data);
});


// start listening for requests
app.listen(port);
console.log("Server running on http://localhost:"+port);



