// var variable
//scope
console.log("\n Variables \n");
console.log("scope of var variables");
var x = 10;

function sum() {
  var y = 5;
  console.log(x + y);
}

sum();

console.log("\n Example 2");

var x = 10;

console.log("value of x is", x);

var x = 100;

console.log("value of second variable x", x);

x = 20;

console.log("value of x after reassign", x);

console.log("\nIf users use the var variable before the declaration");

console.log(a);
var a = 10;
