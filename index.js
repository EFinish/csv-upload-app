console.log("Whrrr, beginning application...");

//init express application object
var express = require('express');
var app = express();
var fs = require('fs');
var csv = require("fast-csv");
var uploadedPersons = [];

app.use(express.json());
// var bodyParser = require('body-parser');

//http routing for application object
//define public folder
app.use("/public", express.static(__dirname + '/public'));

//GET
app.get('/', function (request, response) {
    //return index of application
    response.sendFile(__dirname + "/views/index.html");
});

//POST
app.post('/import', function (request, response) {
    //upload file to path
    request.pipe(fs.createWriteStream('./uploadedFile.csv'));

    //after uploading file
    request.on('end', function () {
        //parse file after upload
        csv.fromPath('./uploadedFile.csv').on('data', function (data) {
            uploadedPersons = [];
            for (var i = 0; i < data.length; i++) {
                //push uploaded data row as object to data
                uploadedPersons.push({
                    id: data[0],
                    name: data[1],
                    age: data[2],
                    address: data[3],
                    team: data[4]
                });

            }
        })
        .on("end", function () {
            //respond that everything went good
            response
                .status(200)
                .json({ data: 'Request received' })
                .send();
        });
    });
});

app.post('/search', function (request, response) {
    //test payload
    var payload = [
        {
            "id": 1,
            "name": "El Testo",
            "age": 38,
            "address": "1234 Test Lane",
            "team": "salmon"
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
    function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log("Running server locally.\nAddress for app is http://%s:%s", host, port);
    }
);