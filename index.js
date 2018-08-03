console.log("Whrrr, beginning application...");

//init express application object
var express = require('express');
var app = express();

//http routing for application object
//define public folder
app.use("/public", express.static(__dirname+'/public'));

//GET
app.get('/', function(request, response){
    //return index of application
    response.sendFile(__dirname+"/views/index.html");
});

//POST
app.post('/import', function(request, response){
    //intake the file uplaoded

    //dummy response
    response.status(200).end();
});

app.post('/search', function(request, response){
    //test payload
    var payload = [
        {
            "id"        : 1,
            "name"      : "El Testo",
            "age"       : 38,
            "address"   : "1234 Test Lane",
            "team"      : "salmon"  
        }
    ];
    
    //respond with payload
    response.status(200).end(payload);
});

//server listening on port 8080
var server = app.listen(
    8080,
    '127.0.0.1',
    function() {
        var host = server.address().address;
        var port = server.address().port;
        console.log("Running server locally.\nAddress for app is http://%s:%s", host, port);
    }  
);