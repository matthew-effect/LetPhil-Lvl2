// Session 01 — what you build in class, and the exercise.

console.log("make.js running");

// 1. Store **name**, **price**, **how many in stock**, **whether on sale** 
// 2. Choose const or let with one line comment as to why 
// 3. Sell two of them, update the stock 
// 4. Log sentence using template literal, like 'Notebook: only 9 left'
// 5. Log typeof all four variables 

const itemName = "Thinkpad T460"; // item name shouldn't change
let price = 300, stockAmt = 5; // these values will change 
let onSale = false; // item is either on sale or not so boolean 

// two get sold 
stockAmt = stockAmt - 2;
console.log(`${itemName}: only ${stockAmt} left.`);

// log types 
console.log(typeof(itemName));
console.log(typeof(price));
console.log(typeof(stockAmt));
console.log(typeof(onSale));



