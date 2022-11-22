console.log("********** Strings **********");

let firstName = "Gohan";

console.log("Printing h ");
console.log(firstName[2]);
console.log(firstName[firstName.length - 1]);

console.log("Strings Methos");

let name = "   Gohan   ";

console.log(name.length);
let small = "abcd";

let upper = small.toUpperCase();
console.log(upper); // Output ABCD

small = upper.toLowerCase();
console.log(small); // Output abcd

let text = "Goku, Gohan, Gotan";
let part = text.slice(6, 11);

console.log(part);
