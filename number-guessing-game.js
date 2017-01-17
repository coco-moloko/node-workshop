var prompt = require('prompt');
var i = 4;
var number = Math.floor(Math.random() * 100 + 1);
    
prompt.start();

function originalFunction() {
    if (i === 0) {
    console.log("Game over, you lose!");
    return;
    }
    
    else {
    prompt.get(["number"], function(err, result) {
        if (err) {
        console.log("oops, I didnt get your imput");
    } 
    else {
        var userNumber = result.number;
            if (number === userNumber) {
                return console.log("You got it right! Congrats!");
                
            }
            
            else if (number < userNumber) {
                i--;
                console.log("Your number is bigger than the number I'm thinking of. Try again! You have ", i, " tries left.");
                originalFunction();
            }
            
            else if (number > userNumber) {
                i--;
                console.log("Your number is smaller than the number I'm thinking of. Try again! You have ", i, " tries left.");
                originalFunction();
            }
        
            }
    
    });
    }
}
originalFunction();