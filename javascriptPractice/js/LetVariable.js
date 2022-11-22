console.log("let variable \n Example 1");

let outside = 10;
function scope() {
  if (true) {
    let b = 20;
    console.log(20); // It prints 20
  }
  console.log(b); // It gives error as it defined in if block
  return;
}
scope();
console.log(outside); // It prints 10

console.log("\n Example 2");
