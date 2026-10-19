// Session 01 — the line-ordering puzzle.

console.log("parsons.js running");

// Goal: output "Buy milk - 3 left"

// Use four of these lines. Two are traps.

// A    console.log(`S{name} - ${count} left`);     |trap|
// B    let count = 5;
// C    const name = "Buy milk";
// D    count = count - 2;
// X    const count = 5;
// Y    console.log("S{name} - ${count} left");     |trap|

// Answer:
const name = "Buy milk";
let count = 5;
count = count - 2;
console.log(`${name} - ${count} left`);