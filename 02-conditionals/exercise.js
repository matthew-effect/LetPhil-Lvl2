// Parsons

// Goal output: `Grade: B` when `score` is `85`.

// ```
// A   else if (score >= 80) 
// B   const score = 85;
// C   if (score >= 90) {
// D   grade = "B";
// E   let grade = "";
// F   grade = "A";
// G   } else {
// H   grade = "C";
// I   }
// J   console.log(`Grade: ${grade}`);
// X   if (score >= 80) 
// Y   if (score = 90) 
// ```

const score = 85;
let grade = "";

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}

console.log(`Grade: ${grade}`);

// Shipping Calculator

// members ship free
// local orders over $50 ship free
// other local orders ship $5
// int. orders ship $15
// orders over 500 free, even int.

let total = 600;
let country = "international";
let isMember = false;
let shipCost; 

if (isMember) {
    shipCost = 0;
} else if (total > 500) { // add check for >500 here because this check can apply to any order 
    shipCost = 0;
}else if (country === "local" && total > 50) {
    shipCost = 0;
} else if (country === "local") {
    shipCost = 5;
} else {
    shipCost = 15;
} 

let shipLabel = shipCost === 0 ? "Free Shipping" : `Shipping: ${shipCost}`;
console.log(shipLabel);