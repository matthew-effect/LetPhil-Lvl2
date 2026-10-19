// Session 02 — what you build in class, and the exercise.

console.log("make.js running");

const inputValue = "";

if (inputValue) {
    console.log("Thank you");
} else {
    console.log("Please type something");
}

const itemsLeft = 0;

// On tuesday: cost is $4
// If age < 12: cost is $5
// If age > 65: cost is $6
// Else: cost is $10 

let day = "Thursday";
let age = 12;
let price; 

if (day == "Tuesday") {
    price = 4;
} 

// Shipping calculator 
let total = 35;
let country = "local";
let isMember = false;
let shipCost; 

// members ship free
// local orders over $50 ship free
// other local orders ship $5
// int. orders ship $15

if (isMember) {
    shipCost = 0;
} else if (country === "local" && total > 50) {
    shipCost = 0;
} else if (country === "local") {
    shipCost = 5;
} else {
    shipCost = 15;
} 

let shipLabel = shipCost === 0 ? "Free Shipping" : `Shipping: ${shipCost}`;
console.log(shipLabel);
