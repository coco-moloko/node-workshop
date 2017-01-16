//Monday Jan 16, 2017

console.log("Hello world!");

//pause console.log

console.log("Hello World!");
setTimeout(function() {
	console.log("Hello World Again!");
}, 10000);

//recursion

function go () {
    console.log("Hello World Again!");
    setTimeout(go,1000);
}
go();

