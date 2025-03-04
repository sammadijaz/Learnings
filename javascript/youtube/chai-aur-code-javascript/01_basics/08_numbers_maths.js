// Source: https://youtu.be/_KqpeDc47Ro?si=tAtMdnJemp509Hxz


// 01.Numbers


// We know how to define numbers in Javascript

// Like this
const num = 100; 

console.log(`num is ${num}`); // Output: 100

// When we define numbers like this, Javascript automatically identifies that we have assigned a number and it assigns a number datatype to our variable without us having to do it, as its a dynamically typed language.



// But we can assign it Number datatype ourself to only and only store numbers, by using the 'new' object like with Strings.

const onlyNum = new Number(1000); // This is a Number object

console.log(onlyNum); // Output: [Number: 1000]

// This way we can make sure to only store numbers and can also access the object number methods in the 'Prototype' just like in Strings.

// However, it does not have much methods for numbers as compared to strings because they are sufficient enough.



// The difference between both methods to assign a number is that, when assigned nomrally, Javascript detects it should be a number and gives it a number datatype. It ouputs just the number simply, like '100' .

// But when we assign a number using new object, we specify that we only want numbers in it and it outputs ' [Number: 1000] ' mentioning its a number.  




// ◻ Some Methods:

// ◻ toString():

// It converts the number into a String and unlocks string methods and property for it.

console.log(onlyNum.toString()); // Output: 1000

// If we check the datatype, it will be string datatype

console.log(typeof onlyNum.toString()); // Output: string

// As we said its a string now. It means it now has string methods aswell, lets check the length property:

console.log(onlyNum.toString().length); // Output: 4

// 1000 has 4 characters hence it outputed the length 4.


// ◻ toFixed()

// toFixed() is used to specify how many values should our number keep after the decimal. It returns a string.

// It is a method that takes an agruement inside, meaning how many values we want after the decimal. Number of digits after the decimal point (Arguement Must be in the range 0 - 100)

console.log(onlyNum.toFixed(3)); // Output: 1000.000


// ◻ toPrecision()

// It rounds off our number to a precise number. The precision range depends on our input. Input Must be in the range 1 - 21. It also returns a string.


const deciNum = 34.156789;

console.log(deciNum.toPrecision(3)); //Output: 34.2

// We asked it to round off our number to a precise number of 3 digits, so it rounded it of to 34.2

// But we have to use this method properly because it returns in exponential values aswell

console.log(deciNum.toPrecision(1)); // Output: 3e+1

// This gave us our desired 1 precise value but it returned the rest of it in the exponentials


// toPrecision() prioritizes that number before the decimal point, however we can use it for the decimal part aswell but only if we 100% know what digits will come before the decimal point.


// ◻ toLocaleString()

// It is used to format numbers in a locale-specific way. It adds comas between numbes like (100,000,000). It returns a string.

const thousands = 100000000;

console.log(thousands.toLocaleString()); // Output: 100,000,000

// By deafult, it formats the number by the US standard (Hundred-thousands) 

// But we can also specify the format/locale we want to use. For example, we can use the locale/format of India (en-IN)

console.log(thousands.toLocaleString("en-IN")); // Output: 10,00,00,000



// There are some properties for the 'Number' Data Type aswell. 


// ◻ MAX_VALUE: It returns the maximum value that can be stored by the 'Number' data type. 

console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308


// ◻ MIN_VALUE: It returns the minimum value that can be stored by the 'Number' data type.

console.log(Number.MIN_VALUE); // Output: 5e-324


// ◻ MAX_SAFE_INTERGER : It returns the maximum integer that can be stored by the 'Number' data type.

console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991


// ◻ MIN_SAFE_INTEGER : It returns the minimum integer that can be stored by the 'Number'

console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991



// +++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++


// 02. Math

// 'Math' is an object in Javascript like 'Number' and it has its properties and methods. It is used for mathematical operations.

console.log(Math); // Object [Math] {}

// On command prompt it does not show much details but if we do it on the console, it shows all of its properties and methods. 

// Some of its properties inlcudes the value of PI, E etc

// PI:
console.log(Math.PI); // Output: 3.141592653589793


// And some of its methods include sin(), cos(), tan(), log(), min(), max() etc

// min(): It returns the smallest number from the numbers given to it
console.log(Math.min(2, 3, 4, 5, 6, 1.2)); // Output: 1.2


// max(): It returns the largest number from the numbers given to it
console.log(Math.max(2, 3, 4, 5, 6, 1.2)); // Output: 6


// abs(): It converts negative numbers in positive numbers (It only converts negative to positive, it does not make positive into negative)
console.log(Math.abs(-10)); // Output: 10
console.log(Math.abs(10)); // Output: 10


// round(), ceil(), floor()

// round(): It rounds the number to the nearest integer. If the decimal part is .5 or more, the number is rounded up.
console.log(Math.round(3.5)); // Output: 4
console.log(Math.round(3.2)); // Output: 3


// ceil(): It always rounds the number up to the nearest integer even if the decimal part is less than .5
console.log(Math.ceil(3.2)); // Output: 4
console.log(Math.ceil(3.9)); // Output: 4


// floor(): It always rounds the number down to the nearest integer even if the decimal part is more than .5
console.log(Math.floor(3.9)); // Output: 3




// random(): It always returns a random value between 0 and 1 

// (The value can be 0 aswell like 0.001....)

console.log(Math.random()); // Output: 0.999882816652736


// But if we want a single integer, we can wrap it in Math.floor() like this, Multipy it by 10 and add 1 to it. Multiplying by 10 will make the output move left to the decimal point by 1 place (0.156 * 10 = 1.56)

// We will add 1 because as we know Math.random() can also return 0. By adding 1 , we can make sure it will always return a number greater than 0.


console.log(Math.floor(Math.random()*10) + 1); // Output: 3


// But what if we want it to generate a number specifically from a particular range? 
 
// We can do that using a formula and the same technique we used above.


// Let's say we want a random from 20 to 50, we will do this:

const min = 20;

const max = 50;


console.log(Math.floor(Math.random()*(max - min + 1)) + min); // Output: 43

// There are 3 sections of this code

// 1. Math.floor() : This section rounds down the code to the nearest integer.

// 2. Math.random()*(max - min + 1) : This section generates a random number between our min and max value and +1 makes sure it is not 0

// 3. + min : This section adds our min value to the answer so that it ALWAYS has the minimum value we want it to have.



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A great Summary I got in the youtube comments:

/*

----- SUMMARY -----
Video 12 - Number and Maths in Javascript

const score = 400 // JS auto detects it as a number
const balance = new Number(100) // Using Number Function to explicitly define number in JS
console.log(score) // 400
console.log(balance) // [Number: 100]

Note: Number has comparatively less prototype properties (methods) than String

Methods with examples:
1. balance.toString() // This converts a number into string
2. balance.toString().length // Once we convert it to String, all properties / methods of Strings are now open to us, such as length
3. balance.toFixed(2) // Used to reduce or round of to specific decimal values
    - Use Cases 
        a. After calculation of GST
        b. In Ecommerce website

4. const otherNumber = 23.8966
    otherNumber.toPrecision(3) // Output - 23.9
    otherNumber = 123.8966
    otherNumber.toPrecision(3) // Output - 124    
    otherNumber = 1123.8966
    otherNumber.toPrecision(3) // Output - 1.12e+3 (exponential value)

5. const hundreds = 1000000
    hundreds.toLocalString() // By default it converts into US standards
    hundreds.toLocalString('en-IN') // As per Indian Standards
    (Note: Check other formats in MDN Docs)

6. Other methods
    .MAX_VALUE
    .MIN_VALUE
    .MAX_SAFE_INTEGER
    .MIN_SAFE_INTEGER

----- Maths in JS ----
Maths library comes along with JS

Methods ----
1. Math.abs() // Converts +ve / -ve integer values to positive
2. Math.round(4.3) // Output - 4
3. Math.round(4.6) // Output - 5
4. Math.ceil(4.2) // Output - 5 (gives top value)
5. Math.floor(4.9) // Output - 4 (gives bottom value)
6. Math.min(4,3,6,8) // Output - 3
7. Math.max(4,3,6,8) // Output - 8
8. Math.random() // Gives random value between 0 & 1 in decimals

Math.random() tricks -----
Math.random()*10
Math.random()*10 + 1 // This assures that values are atleast 1 & more than 1
(Math.random()*10) + 1 // To avoid any BODMAS rule miscalculation

---- Trick to randomize value between range ----
const min = 10
const max = 20
const randomValue = Math.floor((Math.random() * (max - min + 1)) + min)

*/



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++