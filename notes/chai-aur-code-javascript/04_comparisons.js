// Comparison operators in javascript.

// console.log(2>1)
// console.log(2>=1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

// Differet operating ways of comparison operators:

console.log(null > 0); // Output: false
console.log(null == 0); // Output: false
console.log(null >= 0); // Output: true
console.log(null <= 0); // Output: true


/* 

The reason is that an equality check == and comparisons >< >=<= work differently. 

Comparisons convert null to a number, treating it as 0.

That is why in 3rd example null >= 0 is true and in 1st null > 0 it is false.

*/


// The same goes with undefined but it outputs false for all comparisons.

console.log(undefined == 0); // Output: false
console.log(undefined > 0); // Output: false
console.log(undefined < 0); // Output: false
console.log(undefined >= 0); // Output: false
console.log(undefined <= 0); // Output: false

// As we can see it outputs false for all comparisons.

// In JavaScript, == works in a different way than the other comparison operators work.  

// Strict Check:

// In JS, === is known as strict check.

// Strict check doesnt just check the values but it also checks their datatypes aswell.

console.log("2" == 2); // Here == will convert the string and then compare them and give an output of true

console.log("2" === 2); // But if we do the same with === it will tell us that both datatypes are different and we cant compare them with eachother and outputs false




