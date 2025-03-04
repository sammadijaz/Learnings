// 07_Strings

// Source: https://youtu.be/fozwNnFunlo?si=PIoxJ8eEqqeUjIsg


/* 

(commenting out the code to avoid cluttering the console)

// We can use single or double quotes to create a string as we already know:

let a = "This is a string"

let b = 'This is also a string'

// We can also use backticks to create a string

let c = `This is also a string`

console.log(c); // Output: This is also a string
console.log(typeof c); // Output: string

*/

// Concatinating (adding) strings and using them on the console:

const userName = "John"

const userAge = 25

console.log("Hello " + userName + " your age is " + userAge) 

// This approach works but it is not the best way to add strings in JavaScript

// We can use template literals to add strings in JavaScript

// Like this:

console.log(`Hello ${userName} your age is ${userAge}`); 

// This outputs the same but this is modern and advanced way to use strings in JavaScript


// These were basic ways to create a string in JavaScript but now we have modern and more advanced ways to create strings in JavaScript

// Let's see:

// Using the 'new' keyword to create a string object

let myName = new String(`Sam`) // This will create a string object

console.log(myName); // Output: [String: 'Sam']
console.log(typeof myName); // Output: object


// Proof that even tho the typeof says it has become an object but it still does not change the orignal string and acs as primitive datatype because its stored in stack memeory
let Str = new String("Sam")

let Str2 = Str

Str2 = "1212"

console.log(Str); // Output: [String: 'Sam']
console.log(Str2); //Output: 1212


// The benefit of writing a string as an object is that the data in the string gets stored as key-value pairs like 0: 1 etc

// The key-value pairs are the indexes of the string, the key is the index and the value is the character at that index. 

// Another benefit of using a string object is that we can use the methods in the Prototype of the string object 

// (Use the console of a browser to understand more about 'Prototype')

// We can even access 'Prototype' which has all these string methods in it

console.log(myName.__proto__) // Output: {}
// By this way we can access prototype but the output would be empty {} although its not empty




// To access the character from its key we do this:

console.log(myName[0]); // Output: S

// The answer is S because, S is at the 0th index of the string

// We can also use the charAt() method to access the character at a specific index:

// charAt() tells what character is at what index
console.log(myName.charAt(1)); // Output: a


// We can do the reverse of charAt() and find the key with the character with indexOf() method

// indexOf() allows to find the key of a character in the string using the character itself

console.log(myName.indexOf(`m`)); // Outut: 2
// This told us where the letter 'm' was located on the index 


// Let us know some more methods and properties: 

// NOTE: We put () after the methods/functions but we dont put brackets infront of properties like lenght etc. There is only one property and that is 'length'


// NOTE: length is a property not a method that is why we dont put () after putting it after our variable's name 

// length tells the total lenght of the string

console.log(myName.length); // Output: 3
// See, we did not put () and it gives output, because its not a method but a property



// toUpperCase() method converts the characters of the string to uppercase
console.log(myName.toUpperCase()); // Output: SAM


// Declaring another string for further usage

const gameName = new String(`Read-Dead-Redemption`);


// substring() method converts a substring out of the main string according the range we give

// NOTE: This also follows of the '-1' rule so if you want to print the 4th letter you will have to write 5 to get it

console.log(gameName.substring(0, 4)); // Output: Read
// We cant give negative values in substring method because every negavtive value would be considered as zero (0) in substring. And if we give a bigger starting index in the start value than the end valuse, substring method would swap them to fix it.


// slice() method slices the string similarly as substring() method

console.log(gameName.slice(0, 10));
//If we give a bigger starting index value than end index value, slice would output an empty string

// here you can understand the difference between both of them: 
// https://youtu.be/PxD4cwADFys?si=HpN8CfH2SlG_vUWs 




// trim() method is used trim spaces from the string

const stringWithSpaces = `    Hello          `

console.log(stringWithSpaces); // Output:     Hello          
console.log(stringWithSpaces.trim()); // Output: Hello
// trim() method has start and end values aswell but we dont use them as it deals with both of them without them anyways



// replace() method allows to replace characters from a string

// replace() takes the replaceable value and the value with we want to replace that value, searches the replacable value in the string and replaces with the new value we gave


const url = "https://gogle.com" // A string with some replaceable contetnt

// syntax to use replace(), first we give what we want replace and then with what we want it to be replaced, like this:

console.log(url.replace("gogle", "google")); // Output: https://google.com



// includes() method allows us to search and tell if our string has our asked characters or not

console.log(url.includes(".com")); // Output: true
// it outputs in boolean format only




// split() method allows us to split the string into different parts into an array, on the basis of any separtor, such as spaces, - , etc

console.log(gameName.split("-")); // Output: [ 'Read', 'Dead', 'Redemption' ]

// We also have limitors in split() method:

// limitor would stop the splitting process after having the specified number of separate strings, like in our case it stopped after having 2 parts

console.log(gameName.split("-", 2)); // Output: [ 'Read', 'Dead' ]   


// more methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// How to print the last character of the string
const str10 = "Code Easy"

console.log(str10[str10.length - 1]);  // Output: y
