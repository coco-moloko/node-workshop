//hacking into the space station

var iss = require('iss');
 

var stream = iss.locationStream(25544, 10);
 
stream.on('data', function (buffer) {
    var rawJson = buffer.toString('utf8'),
        data    = JSON.parse(rawJson);
    console.log();
    console.log('Latitude: ' + data.latitude.toFixed(2));
    console.log('Longitude: ' + data.longitude.toFixed(2));
});