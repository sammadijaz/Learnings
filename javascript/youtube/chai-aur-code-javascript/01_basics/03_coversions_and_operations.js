// Source:  https://youtu.be/X7hDBhd_L5U?si=M-r6vR8WJR906bq3

// 01. Coversions

// Converting one datatype to another.

// To do that, first of all we will check the datatype of the variable. 

// We do it because when data comes from other sources that where we havent written the code like forms and other different sources, it could be a number but its datatype could be a string so we do it to make sure.

let num = 33

// Two ways of checking the datatype of a variable in JavaScript.

// 01. (using 'typeof' simply )
console.log(typeof num); // Output: number

// 02. (using it is a method by putting brackets)
console.log(typeof (num)); // Output: number

// Both ways have the same output. You can use either one of them.


// 1. Converting above Number variable into a string 
let str = String(num)
console.log(typeof str); // Output: string


// Now , let's dive deep into the conversions with more deep examples

// Assigning a new variable of string type having not only number in it

let aString = "123abc"  // If we make it only have numbers, it would get converted int a number type easily but we want to explore what happens if they're not just numbers.

let aNumber = Number(aString) // Convrting aString into a number
console.log(typeof aNumber); // Output: number

// BUTTT!!! Wait a minute! Our actual string had '123abc' and we all know 'abc' is not a number but the conversion got successfull right? 

// There is a catch. Although the datatype got converted apparently but if we print the actual variable in which we converted the datatype which in this case is 'aString', we will get to know that it outputs "NaN" (Not a mumber)

console.log(aNumber) // Output: NaN

// NaN is a special value in JavaScript that represents "Not a Number". So, apparently the conversion was successful but the actual value is NaN which is not a number.


// But the datatype of NaN is number. So, if we check the datatype of aNumber, it will be number 

// So its a special value under the dataype of number datatype
console.log(typeof NaN); // Output: NaN

// Lets test this example for other datatypes

// Null to Number = 0
let aNull = null
let NullisANumber = Number(aNull)
console.log(NullisANumber); // Output: 0

// Undefined to Number = NaN
let anUndefined = undefined
let undefinedisANumber = Number(anUndefined)
console.log(undefinedisANumber); // Output: NaN

// Boolean to Number = 1 or 0
let aBoolean = true
let booleanisANumber = Number(aBoolean)
console.log(booleanisANumber); // Output: 1

// String to Number = NaN if string is not a number
// We already have seen that above in 'aString' variable


// 2. Conversions to boolean

//01. From number to boolean

// Any number except 0 is true in boolean context
let numToBoolean = Boolean(num)
console.log(numToBoolean); // Output: true


//02. From string to boolean

// Any string except empty string is true in boolean context
let strToBoolean = Boolean(aString)
console.log(strToBoolean);


// *******************Operations*********************


let value = 10
let negativeOfValue = -value // Output: -10

console.log(negativeOfValue);


//Basic arithmetic operations

// console.log(1+2);
// console.log(3-2);
// console.log(2*2);
// console.log(4/2);
// console.log(2**3);
// console.log(2%3);


// String operations

let str1 = "Hello"
let str2 = " World"

let str3 = str1 + str2

console.log(str3); // Output: Hello World



// Operator Precedence:

// Some memes about string operations

console.log("1" + "2"); // Output: 12

console.log(1 + "2"); // Output: 12

console.log("1" + 2 + 3); // Output: 123

console.log(1 + 2 + "3"); // Output: 33

console.log(1 + "2" + 3); // Output: 123


// In conclusion, the operations are performed from left to right. 

//If we have a string first, it will be output as a string. 

//If we have a number first, it will perform function and will output as a number.

console.log(true); // Output: true
console.log(+true); // Output: 1
// +true is a unary operator that converts true to a number. (true= 1, hence it outputs 1) 

console.log(+""); // Output: 0
// +"" is a unary operator that converts an empty string to a number. (empty string = 0 hence it outputs 0)




// Boolean operations

// console.log(true); // Output: true
// console.log(true + true); // Output: 2

// console.log(false); // Output: false
// console.log(false + false); // Output: 0

// console.log(true + false); // Output: 1
// console.log(false + true); // Output: 1

// console.log(true + true + false + true); // Output: 3


// Postfix and Prefix in increment and decrement:

// used this video to learn: https://www.youtube.com/watch?v=aYqsb3h6JGQ


// ++ means add 1, -- means subtract 1 . It doesnt matter postfix or prefix , the result is the same.

// Just when the addition and subtraction would take place is different.


// Prefix in Increment(++):

let a = 5, b = 5;

b = ++a; // It means add 1 to a first then assign the value to b. So a = 6, b = 6.

console.log(a) // Output: 6
console.log(b) // Output: 6

// Postfix in Increment(++):

let c = 5, d = 5;

d = c++; // It means assign the value of c to d first then add 1 to it. So c = 6, d = 5.

console.log(d); // Output: 5
console.log(c); // Output: 6
