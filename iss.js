//hacking into the space station


var url = "http://api.open-notify.org/iss-now.json";

var request = require("request");

request(url, function(error, response) {
    if (error) {
        console.log("Ya goofed up!");
        
    } else {
        var parsed = JSON.parse(response.body);
        console.log(parseFloat(parsed.iss_position.latitude));
        console.log(parseFloat(parsed.iss_position.longitude));
        
    }
});
