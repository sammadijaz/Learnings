// Source: https://youtu.be/7gwc-1czolw?si=bLlPoX6P0GUhXjvq

// Types of Memory in JavaScript


// There are two types of memories in JavaScript. One is Stack Memory and the other is Heap Memory.

// 1. Stack Memory (Used by Primitive Data Types): 

// Stack Memory is used by all the primitive datatypes in JavaScript.  When a variable is stored in stack memory and the variable is called, a copy of the actual data is given. So if we change the variable later, the original data will not be changed. 




// 2. Heap Memory (Used by Reference (Non-Primitive) Data Types):

/* Heap Memory is used by all the reference (non-primitive) datatypes in JavaScript. When a variable is stored in heap memory and the variable is called, a reference to the memory location where the data is stored is given. 

That reference points to the place where the original data was stored without creating any copies of it.
So if we change the variable later, the original data will be changed.

Original data will be changed because when the variable was called, it directly pointed towards the data without creating anything else, Hence the original data will get affected */



// Examples of them.


// Example 1: Stack Memory

// As we discussed earlier, Stack Memory is used by all the primitive datatypes in JavaScript. When a variable is stored in stack memory and the variable is called, a copy of the actual data is given. So if we change the variable later, the original data will not be changed.

// Let's test that with an example:

let myName = "Sam" // Declaring a string variable

console.log(myName) // Output: Sam


let otherName = myName // Copying the value of myName to otherName

// Now let's change the value of otherName and see if myName changes or not.

otherName = "Nina" // Changing the value of otherName

console.log(otherName) // Output: Nina
console.log(myName) // Output: Sam

// As we can see, the value of myName did not change when we changed the value of otherName. This is because the value of myName was stored in Stack Memory and when we copied it to otherName, a copy of the value was given to otherName. So when we changed the value of otherName, the original value of myName was not affected.


// Example 2: Heap Memory

// As we discussed earlier, Heap Memory is used by all the reference (non-primitive) datatypes in JavaScript. When a variable is stored in heap memory and the variable is called, a reference to the memory location where the data is stored is given. That reference points to the place where the original data was stored without creating any copies of it. So if we change the variable later, the original data will be changed.

// Let's test that with an example:

// We will be using object as an example of reference (non-primitive) datatype (more on objects later)

let user1 = {
    name: "Sam",
    age: 25,
}

let user2 = user1 // Copying the value of user1 to user2


// Now let's change the value of user2 and see if user1 changes or not.

user2.name = "Nina" // Changing the value of user2, this is how we access data inside an object

console.log(user2.name) // Output: Nina
console.log(user1.name) // Output: Nina


// As we can see, the value of user1 changed when we changed the value of user2. This is because the value of user1 was stored in Heap Memory and when we copied it to user2, a reference to the memory location where the data was stored was given to user2. So when we changed the value of user2, the original value of user1 was affected.

