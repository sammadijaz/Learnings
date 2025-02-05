// Soucre: https://youtu.be/tGLCuoumaGY?si=ki3byirif61bCVqr


// Dates in Javascript:

// Dates are pain points of javascript and 'Temporal API' is getting proposed to fix it, but for now it is in experimental phase so we will have to go with the old way. The dates are calculated in miliseconds from 1st Jan 1970. But we can access current dates with no issues.


// The old way is using the 'Date' object and making an instance of it using 'new' keyword.

let myDate = new Date();

console.log(typeof myDate); // Output: object

console.log(myDate); // Output: 2025-02-04T18:51:58.167Z


// The current format is not readable, we can convert this using methods like 'toDateString()' , 'toLocaleString()' etc. Every method has its own format, you can choose according to your preferance.

// toString():
console.log(myDate.toString()) // Output: Tue Feb 04 2025 23:55:20 GMT+0500 (Pakistan Standard Time)

console.log(myDate.toLocaleString()); // Output: 2/4/2025, 11:57:29 PM
// toLocaleString():



// toDateString(): This method converts the date portion of a Date object into a human-readable string format.
console.log(myDate.toDateString()); // Output: Tue Feb 04 2025

// toLocaleDateString(): This method returns a string representing the date portion of a Date object using the system's local conventions.
console.log(myDate.toLocaleDateString()); // Output: 2/4/2025



// toTimeString():
console.log(myDate.toTimeString()); // Ouput: 23:59:29 GMT+0500 (Pakistan Standard Time)

// toLocaleTimeString():
console.log(myDate.toLocaleTimeString()); // Output: 12:01:51 AM



// toISOString():
console.log(myDate.toISOString()); // Output: 2025-02-04T19:02:27.475Z


// toJSON():
console.log(myDate.toJSON()); // Output: 2025-02-04T19:03:29.638Z

// When called on a valid Date object, both methods will produce the same string in the ISO 8601 format. 
// If the Date object is invalid, toJSON might return null while toISOString would throw a RangeError.



// getDay():
console.log(myDate.getDay()); // Output: 3
// It displayed 3 Because today is Wednesday and it is the 3rd day of the week



// getFullYear():
console.log(myDate.getFullYear()); // Output: 2025



// And Etc Methods...



// How to get specific dates:


// We can enter our own dates aswell, There are multiple ways of doing that

// 1. Pass as individual arguments:

// let date1 = new Date(2025, 0, 5);

let date1 = new Date(2025, 0, 5, 10, 30, 0);

console.log(date1.toLocaleString()); // Output: 1/5/2025, 10:30:00 AM

// When passing individually, The month is 0 based, so January is 0, February is 1, and so on.


// 2. Pass as a string:

let date2 = new Date("2025-02-05")

console.log(date2.toLocaleString()); // Output: 2/5/2025, 5:00:00 AM

// In string the month is 1 based, so January is 1, February is 2, and so on.



// Timestamps:

// We can also create timestamps in Javscript. They come in handy when we are creating some quiz or poll type of thing like we need to declare winner by checking who completed the quiz or the poll first etc.

let myTimeStamp = Date.now();

console.log(myTimeStamp); // Ouput: 1738782706356

// This long string are the mili seconds that have passed since 1 Jan 1970 till the current day


// Such timestamps can be used to compare times like booking a hotel room etc, or to check who completed the quiz first etc. To compare our previous date with the current one, we can use getTime() to convert our date into the same mili seconds passed since 1970

console.log(date2.getTime()); // Output: 1738713600000

// Now the both dates are in the same format and we can easily compare them.

// How to convert these mili-seconds into seconds:

// Although comparison should be done in mili-seconds but this question can be asked in interviews etc

// To convert mili-seconds into seconds we can divide the mili-seconds by 1000 because there are 1000 mili-seconds in a second.

console.log(Date.now()/1000); // Ouput: 1738783237.149

// It has decimals aswell so we will wrap it in Math.floor() to get the integer value of seconds only.
console.log(Math.floor(Date.now()/1000)); // Output: 1738783308



// We can further customize the format of the date with our own preferance using toLocaleString() method and passing the options as an argument.

// The first argument is for internationalization , and after that we pass an object in which we will write our preferances

let newDate = new Date();

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
})); // ouput: 2025 Thursday

// Now it is only giving us what we want and that too in our defined format.


// ====================================================================

// // (SOURCE of the below code: https://www.freecodecamp.org/news/how-to-format-a-date-with-javascript-date-formatting-in-js/)
// // Specific Date Format: To display a date in a specific format, such as DD/MM/YYYY, you can use Intl.DateTimeFormat with the appropriate options.

// // For example:

// const date = new Date();

// const formatter = new Intl.DateTimeFormat('en-PK', { day: '2-digit', month: '2-digit', year: 'numeric' });

// const formattedDate = formatter.format(date);

// console.log(formattedDate); // Output: 05/02/2025

//===============================================================
