// There are mainly two types of datatypes in JavaScript

// 1. Primitive Datatype and 2. Non-Primitive(Reference Type) Datatype.

// These both classifications are made on the basis of how the data is stored in memory. 

// In Primitive Datatype, when the data is called, the actual data is delivered instead of a reference to where the data is stored.

// In Non-Primitive(Reference Type) Datatype, when the data is called, a reference to where the data is stored in the memory is given instead of the actual copy of data like in Primitive Datatype.


// Numbers of Primitive Datatypes:

// There are 7 Primitive Datatypes in JavaScript, they are:

// 1)String, 2)Number, 3)Boolean, 4)Null, 5)Undefined, 6)Symbol, 7)BigInt.


// Numbers of Non-Primitive(Reference Type) Datatypes:

// There are 3 Non-Primitive Datatypes:

// 1)Object , 2)Array(a type of object), 3)Function(a type of object).

// Array and Function both are types of Object datatype so technically only one Non-primitive datatype but we can call them as 3 aswell.


/* 

INF0: JavaScript is Dynamically typed programming language which means it is not mandatory to define the datatype of the variable to declare it. 

Statically typed programming languages like C, C++, C# etc, make it mandatory to define the datatype of the varaible before using it. 

In Statically typed languages, the compiler verifies if data types are used correctly before the program runs, helping to catch potential errors early on.

*/


// Examples of Primitive Datatypes:


// String:
// String we already know about, is used to store characters. It can be enclosed in single quotes or double quotes.

let doubleQouteString = "I am double quote string!";

let singleQouteString = 'I am single quote string!';

// Number:
// In JS, both decimal and whole numbers come under number datatype

const score = 100
const scoreInDecimal = 100.5

// Boolean:
// In JS, boolean datatype can have only two values, true or false.
const isHuman = true

// Null:
// Null does not means 0 , it means nothing.
const tempOutside = null

// Undefined:
// Undefined means the variable is declared but not assigned any value.

let user = undefined

// If we leave the variable unassigned, it automatically considers it as undefined

let userName; // Like this


// Sybmol:
// Symbol is used to make variable unique even if they are the same

let uniqueValue = "1"


let uniqueValue1 = Symbol("1") // Even tho both are carrying "1" but still they are different because of Symbol datatype

// Proof:

console.log(uniqueValue === uniqueValue1); // Output: false


// BigInt:
// BigInt is used to store large numbers which can't be stored in Number datatype.

// putting a small 'n' at the end of the number makes it BigInt in JS

let myBigInt = 22901920192018029302n // ' n ' is used to define it as BigInt




// Examples of Non-primitive dataypes:

// Array:

let myArray = [1, 2, 3, 4, 5, "Hello"]; // Array is a collection of elements

console.log(myArray);


// Function:
// Function performs assigned task when called

let myFunction = function(){
    console.log("This is a function");
}



// Object:

// This is what objects are
let myObject = {
    name: "Sam",
    age: 19,
}

/*

INTRESTING CASE

*/


console.log(typeof tempOutside); // Output: object

// Null is a stand alone value but its datatype is object.

// We get different values when we use typeof operator on different data types in JS.

/* 

They are: 

Return type of variables in JavaScript

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

// All of them are given here:

//  https://262.ecma-international.org/5.1/#sec-11.4.3


