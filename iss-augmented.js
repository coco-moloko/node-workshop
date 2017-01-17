function FindDistance() {

    if (error) {
        console.log("something went wrong");
    } else { 

//prompt user for their location

    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=montreal";
    var prompt = require('prompt');
    var request = require("request");

    prompt.start();

        prompt.get(["city"], function(err, result) {
        if (err) {
            console.log("go jump off a bridge");
        } else {
           console.log(result.city);
        
        }

//get location for Montreal

request(url, function(err, response) {
         if (err) {
            console.log("Ya goofed up!");
        
        } else {
            var parsed = JSON.parse(response.body);
            var lat1 = formatted_address.location.lat;
            var lon1 = formatted_address.location.lng;
            console.log(parsed);
        
        }


//get location for the space station

    var url2 = "http://api.open-notify.org/iss-now.json";

    var request2 = require("request");

    request2(url2, function(err, response) {
         if (err) {
            console.log("Ya goofed up!");
        
        } else {
             var parsed = JSON.parse(response.body);
             var lat2 = parsed.iss_position.latitude;
             var lon2 = parsed.iss_position.longitude;
        
        }
    });


    Number.prototype.toRadians = function() {
        return this * Math.PI / 180;
    };
    
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    return d;
    }


});

console.log(findDistance());