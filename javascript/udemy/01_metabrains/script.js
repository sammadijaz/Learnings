// Introduction

let name = "Sam";

let age = 19;

// document.write(`<h1>Hello <a href="#" style="color: #fff987" ><em>${name}</em></a> your age is <em>${age}.</em></h1>`)


// dif bw var let and const 

// var x = 20; ✅
// var x = 10; ✅
// x = 100; ✅     

// let y = 40; ✅
// let y = 50; ❌
// y = 200; ✅

// const z = 80; ✅
// const z = 90; ❌
// z = 500; ❌


// Advance console

console.log("Hello (Boring simple console.log mehhh)");

console.error(" HAHAHAH ERRRORR!!!")
console.error(["The", "Array", "of", "errors!"])

console.table(["The", "Array", "of", "errors", "in", "a", "table!!"])

console.warn("I AM WARNING YOU WITH A WARNING!! BEWARE!!")


console.time("Idk what this is but yeah its cool")
console.warn("Warning wraped in time which idk how it works")
console.timeEnd("Idk what this is but yeah its cool")


// Condition Ternary statement:

// Condition ternary statements are used to print a value only once based on a condition.

var x = 200;

var y;

x == 200 ? (y = "True <br>") : (y = "False <br>")
document.write(y)


// There is another way of writing them

y = x == 200 ? (y = "It is true <br>") : (y = "It is false <br>");
document.write(y);



y = x <= 500 ? (y = "x is greater than 500 <br>") : (y = "x is lesse than 500 <br>");
document.write(y);



// Switch statement


var moneyInDollars = 500;

switch (moneyInDollars) {
    
    case 100:
        document.write("You got $100 <br>") 
        break;
    
    case 500:
        document.write("You got $500 <br>")
        break;
    
    case 1000:
        document.write("You got $1000 <br>")
        break;

    default:
        document.write("You got some money? <br>")
        break;
}

// Output(in HTML file): You got $500


// Popup Boxes

// Alert Box:

// let alert1 = 10;
// let alert2 = 20;

// if(alert1 > alert2){
//     alert1("✅ First Condition is correct.")
// } else {
//     alert("❌ First Condtion is not correct.")
// }


// Confirm box:

// let confirmIt = confirm("Are you a human?")

// if (confirmIt){
//     alert("I see, I trust you.")
// } else {
//     alert("Why did you click the cancel button?!!")
// }


// Prompt box:

// prompt("Enter your ID:")

// let askName = prompt("Enter your name: ")
// let askAge = prompt("Now enter your age: ")

// if(askAge >= 18){
//     alert(`Welcome ${askName}! You are ${askAge} and are Eligible!`)
// } else{
//     alert(`Hello ${askName}, You are below 18 hence not eligible.`)
// }


// function (mine)

// let intro = (whatName) =>{
//     alert(`Welcome Dear ${whatName}!`)
// }

// intro(prompt("What is your name?"))

//=

// function sumOfNums (first, second, third){
//     first = Number(prompt("Enter your first number: "))
//     second = Number(prompt("Enter your second number: "))
//     third = Number(prompt("Enter your second number: "))

//     sum = confirm(`The sum of your numbers is: ${first+second+third}`)
// }

// let display = sumOfNums()


// function return

