console.log("Whrrr, beginning application...");

//init express application object
var express = require('express');
var app = express();

//http routing for application object
//GET
app.get('/', function(request, response){
    //return index of application
    response.sendFile(__dirname+"/views/index.html");
});

//POST
app.post('/import', function(request, response){
    //intake the file uplaoded

});

app.post('/searcg', function(request, response){
    //respond with payload

});

//server listening on port 8080
var server = app.listen(
    8080,
    function() {
        var host = server.address().address;
        var port = server.address().port;

        console.log("Running server locally.\nAddress for app is http://%s:%s", host, port)
    }  
);