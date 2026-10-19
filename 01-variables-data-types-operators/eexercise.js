// 1. 
// Goal output: `Cart: 2 items, total 30`

// ```
// A   const cartTotal = itemCount * itemPrice;
// B   const itemPrice = 15;
// C   console.log(`Cart: ${itemCount} items, total ${cartTotal}`);
// D   const itemCount = 2;
// X   const cartTotal = itemCount + itemPrice;
// Y   console.log(`Cart: ${itemCount} items, total ${itemCount * itemPrice}`);
// ```

const itemCount = 2;
const itemPrice = "15"; // changed to string 
const cartTotal = itemCount * itemPrice;
console.log(`Cart: ${itemCount} items, total ${cartTotal} `);

// 2. 
// Prediction: 
// first console log will result in 30 
// second will concat two strings into 152 
console.log(itemPrice * 2);
console.log(itemPrice + 2);

// verifying variable type
console.log(typeof(itemPrice * 2));
console.log(typeof(itemPrice + 2));