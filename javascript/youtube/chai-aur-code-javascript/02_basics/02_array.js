// SOUCRCE: https://youtu.be/m6azhgyCi-k?si=fBFJFxraS039SB-m

// Array Part-2

// NOTE: (HAVE COMMENTED OUT SOME CODE TO MAKE IT EASIER TO NAVIGATE ON CONSOLE, YOU CAN UNCOMMENT IT AND USE IT)

// Let us make 2 arrays:

const fruits = ["apple", "melon", "orange"]
const vegetables = ["potatoe", "cabbage", "beetroot"]

// fruits.push(vegetables)

// console.log(fruits); // Output: [ 'apple', 'melon', 'orange', [ 'potatoe', 'cabbage', 'beetroot' ] ]

// console.log(fruits[3][1]); // Output: cabbage


// As we know arrays can carry any datatype, including array inside an array. Here is a proof to that.

// We pushed one array into another, but they did not become one array but infact now the 'fruits' array is having the whole 'vegetable' array as its 4th element.

// To actually merge/concatenate arrays we have:

// 1. concat() method returns a new array that contains all elements from the original array and the elements from the array(s):

const allPlants1 = fruits.concat(vegetables);
console.log(allPlants1); // Output: [ 'apple', 'melon', 'orange', 'potatoe', 'cabbage', 'beetroot' ]

// const Array1 = [1,2,3,4,5];
// const Array2 = [5,6,7,8,9,10];
// const Array3 = [0,0,0];
// const Array4 = [1,3,9,19];

// const concatAll = Array1.concat(Array2,Array3,Array4)
// console.log(concatAll) 
// /* Output:

// [
//   1, 2, 3,  4, 5, 5, 6,
//   7, 8, 9, 10, 0, 0, 0,
//   1, 3, 9, 19
// ] 

// */


// 2. (...)spread operator actually copies the elements of an array into a new array. It does not copy the reference of the array:

const allPlants2 = [...fruits, ...vegetables];
console.log(allPlants2); // Output: [ 'apple', 'melon', 'orange', 'potatoe', 'cabbage', 'beetroot' ]

// As we can see both have the same output but spread operator is more convenient and cleaner way to do it.



// We rarely get an array nested into another array, if we get in such situation, we can make them all come into one array by using flat() method:

// flat() method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// There is a little hack to give "Infinity" as the depth to make it go as deep as possible, but we should always give the particular depth that we want it to go inside the array and declutter it into one array:

const messedUpArray = [1, 2, [3, 4], 5, 6, [7, 8, [9, 10]]];

const fixedArray = messedUpArray.flat(Infinity);
console.log(fixedArray);
/*

Output: 
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]

*/

// As we can see all nested arrays got out of each other and are now in one array.



// We often get data in different datatypes, we can convert them into array by different methods

// How to check if a variable is an array or not?

// Array.isArray() method returns true if the object is an array, false otherwise.

console.log(Array.isArray(fruits)); // Output: true
console.log(Array.isArray("Hello")); // Output: false


// How to convert a string into an array?

// 1. Array.from() method returns a new array from an array-like or iterable object. It outputs an empty array if it cant convert the string into an array.

console.log(Array.from("Sammad-Ijaz"));
/*

Output:
[
  'S', 'a', 'm', 'm',
  'a', 'd', '-', 'I',
  'j', 'a', 'z'
]

*/

console.log(Array.from(1000)); // Output: []

// As we can see it outputs and empty array when it cant convert the input into an array and creates an array FROM the string.


// We can also make different elements to form an array:

// 2. Array.of() method creates a new array with the set of given elements

let num1 = 1000
let num2 = 2000
let num3 = 3000
let num4 = 4000

console.log(Array.of(num1, num2, num3, num4)); // Output: [ 1000, 2000, 3000, 4000 ]

// As we can see it created an array OF the given elements.



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++