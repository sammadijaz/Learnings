// SOURCE: https://youtu.be/vVYOHmqQDCU?si=mTB6Cafyc2leZrkl

// Objects in Javascript

// There are two ways of making an object:

// 1. Using the object literal syntax:
const test1 = {}

// 2. Using the Object constructor:
Object.create

// Here comes the concept of 'singleton'. For now we will not be going through singleton and Object constructor but for a bit of introduction here is some info:

// Object Literal: Naturally supports Singleton pattern by creating a single instance and providing global access through a closure. It’s a straightforward approach for ensuring only one instance.

// Constructor: By default, allows the creation of multiple instances. To implement Singleton behavior with a constructor, additional logic is needed to ensure only one instance is created and managed.

// Thus, while object literals inherently create a single instance, constructors require extra steps to achieve the same Singleton behavior

// So for summary, only object literal supports singleton by default, while constructor needs extra code to support singleton.


// Coming back to the object literal syntax:

// Object literal syntax:

// This is an object '{}'
const userInfo = {
    name: "Sam",
    age: 30,
    isLoggedIn: true,
    city: "New York",
    favGames: ["GTA V", "Fortnite", "Read Dead Redemption 2"],
    "email": "sam@gmail.com"
}

// In object data is stored in key-value pairs. 'name' is key and '"Sam"' is value.

// Javascript takes the key as a string even if you don't put it in quotes. So in the backend 'name' is actually '"name"' Hence 'name' is the same as '"email"' there is no differece, JS automatically counts keys of the objects as strings so no need to add quotes.

// Accessing the value:

// There are 2 ways to access value in objects. Most people only know 1 but there are actually 2 ways and knowing the 2nd way is important.

// 1. Using dot notation:

// Simple key:
console.log(userInfo.name); // Output: Sam

// Key with qutoes: (Note: You can use quotes or not, both are same)
console.log(userInfo.email); // Output: sam@gmail.com 

// The problem comes when we have spaces between words in the key. For example, 'first name' 

// 'console.log(userInfo.first name);' does not work

// The only way to access them is by using the 2nd way of accessing values in objects. 



// 2. Using bracket notation:

console.log(userInfo["name"]); // Output: Sam
// 'keys' are stored in strings, in dot syntax we dont need to wrap them in quotes but in bracket syntax we do.


// Knowing the 2nd way is important because as we said earlier, keys are always strings in javascript. So if you have a variable that is having datatype of Symbol or is having spaces between the key name, you can't use dot notation. The ONLY way to access that value would be to use bracket notation

// Let us have an example to know its significance:

let obj1 = {
    "full email": "fullsam@gmail.com"
}

console.log(obj1["full email"]); // Output: fullsam@gmail.com

// Now we can access the key even tho it has space in the name

// Another application of bracket notation is allowing us to use Symbol as key instead of default string

// This gets asked in the interview, to use/add a Symbol in an object AS A SYMBOL KEY

let mySymbol = Symbol("Hello123")

let obj2 = {

    name : "John",

    // This is just a string, it has nothing to do with our declared symbol.
    mySymbol: "Done!(Not really)",
    
    // This way this is refering the symbol 'mySymbol' we created not as string
    [mySymbol]: "ACTUALLY DONE!" 
    // This is how you can add a symbol to an object
    
}

// Now if we want to use this symbol into an object AS A SYMBOL instead of the default string datatype, we cant do this ' { mySymbol: "Done!"} '

// This wont work because Javscript would still count is a string and not a symbol.

console.log(obj2.mySymbol); // Output: Done!
console.log(obj2[mySymbol]); // Output: ACTUALLY DONE!

// To check if we actually added symbol, we can print the object on console to see the difference

console.log(obj2); // Output: { mySymbol: 'Done!(Not really)', [Symbol(Hello123)]: 'ACTUALLY DONE!' }

// As we can see the normally written key is just a normal key while the one we wrapped brackets is being treated as a Symbol key and actually related to our declared symbol.




// Now these were some new topics lets get to basics and continue our study.

// Changing the value of a key in an object:

userInfo.age = 19
console.log(userInfo.age); // Output: 19


// Freezing the object so nothing can be changed, added or removed from it:

Object.freeze(userInfo) // This will freeze the object

userInfo.city = "San Francisco"

console.log(userInfo.city); // Output: New York

// As we can see the program got passed without any error but the change was not implemented because we froze the object in its current state



// Functions In Javascript are First Class Citizens, meaning they can be treated as normal variables

obj2.greetings = function(){
    console.log("Hello");
}

console.log(obj2.greetings()); 
/*
Output:
Hello
undefined
*/

// IMPORTANT: We are getting undefined, because there is no return statement in 'greetings' function , and when we explicitly don't return something then the function returns 'undefined' implicitly.

// In 'greeting' you log messages to the console but don't return anything, so it implicitly return 'undefined' as an output after every console. But when we use return keyword in functions instead of console.log it will not output 'undefined'.

// To avoid getting 'undefined' either use 'return "Hello"' in the function or run the function using obj2.greetings() instead of wrapping it in the console.log

obj2.greetings() // Output: Hello




// Using String interpolation and 'this' keyword:

obj2.customGreetings = function(){
    console.log(`Hello, ${this.name} `);
}

obj2.customGreetings() // Output: Hello, John


// 'this' keyword allows us to access all the properties (key and value pairs) present inside our object



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++