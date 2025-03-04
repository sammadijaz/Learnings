let a = 10;
let b = 20;

console.log(a >= b);

console.log(5 && 5);

// falsy values
// false, 0, -0, 0n, "", null, undefined, NaN, and document.all.


// Logical operators

// AND (&&) - All operands must be true to get true.
console.log(true && true && true); // true
console.log(true && true && false); // false
console.log(true && false && true); // false
console.log(true && false); // false

// OR (||) - At least one operand must be true to get true.
console.log(true || true || true); // true
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true

// NOT (!) - Returns the opposite of the operands.
console.log(!true); // false
console.log(!false); // true

// if, else if, else statements

let age = 18;

if (age > 100) {
    console.log("Woah, WHO ARE YOU?!");
} else if (age === 18) {
    console.log("You just turned 18, Come on in!");
} else if(age > 18){
    console.log("Great, You are eligible.");
} else {
    console.log("You are not eligible.");
}

// // experimenting on my own
// document.write(`"<h1 class="heading">Heading Here, you are ${age} years old.</h1>`);
// document.querySelector(".heading").style.backgroundColor = "red"


// "while" loop

let i = 0;

while(i < 10){
    console.log(i);
    i++;
}

// "for" loop
for (let z=10; z<20; z++){
    console.log(z);
}

// Also can be written in theory but not a good practice
// let z = 20;

// for (; z<30; z++){
//     console.log(z);
// }


// function declartion
function square(sides){
    return sides * sides;
}

// calling function and storing return value
const result = square(10);

console.log(result);

// Different ways of writing a function


// Function Declaration:
function name0 (){
    //code
    //have access to 'this' keyword
}


// Function experession:
let name1 = function (param1){
    //code
}

// Arrow function:
const name2 = (param2) => {
    //code
}


// They all are identical but only Function declartion has an advantage and that is to have the access of 'this' keyword.


// 'return' in function

// Javascript functions always return 'undefined' if we do not specify return value ourself

let func1 = (val1) => {
    console.log(`Hello ${val1}`);
}

let idk1 = func1(11)
console.log(idk1); 
/* Output: 
   Hello11
   undefined
*/   


// function code stops after 'return'

let func2 = (val2) => {
    return "HELLO #1"
    return "HELLO #2" // This code is faint because it is unreachable
}

let idk2 = func2();
console.log(idk2); // Output: HELLO #1

// Only the first return got executed, cuz function stops the code after 'return' keyword


function anotherTest (){
    return true;
    return false;
}

let testResult = anotherTest()
console.log(testResult); // Output: true


// Arrow Functions, the modern way of writing functions:

// The only difference between and arrow function and a normal function is that arrow function does not creates its own 'this' keyword.

// There are multiple ways of writing an arrow function:

// #1 Basic syntax:
let basciSyntax = (basicParam) =>{
    return "#1 Hello BasicSyntax!"
}

let arrowFunc1 = basciSyntax();
console.log(arrowFunc1); // Output: #1 Hello BasicSyntax!


// #2 When you have only one parameter, you can remove the brackets:
let brackRemove = brackParam => {
    return "#2 Hello BrackRemove!"
}

let arrowFunc2 = brackRemove();
console.log(arrowFunc2); // Output: #2 Hello BrackRemove!


// #3 When you have only one thing to return, you dont need to use 'return' and write it in curly brackets:
let noCurlyBrack = () => "#3 Hello noCurlyBrack";

let arrowFunc3 = noCurlyBrack();
console.log(arrowFunc3); // Output: #3 Hello noCurlyBrack
