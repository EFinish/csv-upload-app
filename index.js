console.log("Whrrr, beginning application...");

//init express application object
var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.json());
// var bodyParser = require('body-parser');

//http routing for application object
//define public folder
app.use("/public", express.static(__dirname+'/public'));
// app.use(bodyParser.urlencoded({extended: true}));

//GET
app.get('/', function(request, response){
    //return index of application
    response.sendFile(__dirname+"/views/index.html");
});

//POST
app.post('/import', function(request, response, next){
    //intake the file uplaoded

    request.pipe(fs.createWriteStream('./'));
    request.on('end', next);

    //dummy response
    response
        .status(200)
        .json({ message: 'Request received' })
        .send();
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
    response
        .status(200)
        .json(payload)
        .send();
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