// SOURCE: https://youtu.be/cejBux2gtEE?si=93gFCcBPJjHSvMji

// Array in Javascript

// Array is an object that can store collection of elements. They can be of different data types.

// It has some properties:

// 1. Javscript Arrays are resizable and can contain mix of different data types.

// 2. Arrays are associative in js so array elements cant be accessed using string indexes.

// 3. Array index starts from 0 (Zero).

// 4. Javascript array-copy-operations creates shallow copy not deep copies.
// (Shallow copy means it points to a referance of the original data, not a copy of it.)
// (Deep copy means it creates an actual copy of the data not just a reference to it.)



const arr = [10, 20, 30, 40, 50, 60]

console.log(arr[0]); // Output: 10

// This was one way of declaring and accessing array elements in javascript.

// There is another way to create arrays, using the new keyword just like strings and numbers.

let arr2 = new Array(1, 2, 3, 4 , 5)

console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Here we dont have to wrap them in brackets[] it does it automatically


// Array methods:

// push() - adds an element to the end of the array.
arr2.push(6)
arr2.push(7)
console.log(arr2); 
/* Output: 

[
  1, 2, 3, 4,
  5, 6, 7
]

*/

// pop() - It does not take any arguement just removes the last element from the array.
arr2.pop()
console.log(arr2); // Output; [ 1, 2, 3, 4, 5, 6 ]



// unshift() - It adds an element to the beginning of the array. People find it stupid because it changes all the arrangement of previous elements.
arr2.unshift(100)
console.log(arr2);
/* 
Output: [
  100, 1, 2, 3,
    4, 5, 6
]
*/

// shift() - It removes the first element from the array. It does not take any arguement.
arr2.shift()
console.log(arr2); // Output: [ 1, 2, 3, 4, 5, 6 ]


// includes() - It checks if the array includes a certain value. It returns boolean output
console.log(arr2.includes(19)); // Output: false


// indexOf() - It returns the index of the first occurrence of the specified value.
console.log(arr2.indexOf(5)); // Output: 4
// If the value is not found it returns -1
console.log(arr2.indexOf(100)); // Output: -1


// It gets asked in the interview a lot to tell the difference between slice and splice. The difference is that slice does not change the array and splice actually changes the array.

// slice() - It returns a shallow copy of a portion of an array into a new array object. It does not change the original array. It takes starting and ending range. It outputs -1 of the ending value
let newarr = [100, 200, 300, 400, 500]
console.log(newarr.slice(1, 4)); // Output: [ 200, 300, 400 ]
console.log(newarr); // Output: [ 100, 200, 300, 400, 500 ] (Original Array)

// If you do not specify the ending value it will go to the end of the array
console.log(newarr.slice(0)); // Output: [ 100, 200, 300, 400, 500 ]


// splice() - It changes the array. It cuts the range from the array and outputs the cutted array in a new array. It does not have -1 index rule.
console.log(newarr.splice(1,4)); // Output: [ 200, 300, 400, 500 ]
console.log(newarr); // Output: [ 100 ] (Original Array)

// So as we can see splice() changed the original array but slice() did not.


// SUMMARY FROM COMMENTS:

/*

SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

*/