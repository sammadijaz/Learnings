// source: part 1: https://youtu.be/htznIeWKgg8?si=J7eDWS83BpFhW-Tb
// part 2: https://youtu.be/BeVkob6Hl6w?si=BACMJQioMXXHm8zF


// 1. word vs keyword:

// word: any word that does not have a pre-defined meaning in javascript is a word. example: pakistan, india etc

// keyword: any word that has a pre-defined meaning in javascript is called a keyword. example: let, for, if etc

// ======================================

// 2. variables vs constant

// variables: the one who's value can be changed is called a variable. example: let a = 12; 

// contants: the one who's value can not be changed is called a constant. example: const b = 10;

// ======================================

// 3. var let const

// var, let: they both are used to declare variables

// const: it is used to declare constants

// ======================================

// 4. hoisting

// hoisting: variables and fucntions are hoisted, which means there declartion moves on the top of the code

// jab bhi hum kisi variable ko declare karny say pehly use karty hain to javascript uska declaration wala part code k top per move kardeti hai (only if declaration hua ho code me)

// example: agar hum let a = 12; likhty hain to javascript declaration or initialization ko separate karleta hai backend per like:

// let a; // declartion
// a = 12; // initialization

// aisy karti hai javascript code ko breakdown. To agar meny console.log kar k initalize krny say pehly hi a ko call kia hota to output undefined ata q k javascript sirf initialization ko hi code k top per move karti hai. 

// example where hoisting would work:

// console.log(a)
// let a = 12;

// meny variable ko declare karny say pehly hi use kardia ab humain pata hai k javascript is initilization ko let a; or a = 12; men break kardegi backend par or sirf let a; hi top par jaiga or a = 12; nechy hi rahyga, to pehlu let a; run hoga q k wo to top para chala gaya hai or phir second per console wali command or phr last men a = 12; run hoga. islye jab khali variable run hoga console men to output undefined aiga simply.

// is hi variable k declaration k code k top par chala jana backend per, ko hoisting kehty hain

// ======================================


// 5. datatypes

// 1) Primitive: Number, String, BigInt, Null, Undefined, Boolean, Symbol 

// 2) Reference (non-primitive): () {} [] (sary brackets waly reference type hoty hain)

// Jis data ko copy karny par actually men us data ki copy ki bajaye us data ka reference milta hai usko reference type ya non-primitive kehty hain. 

// Jis ki copy ho jaye to  wo primitive type hota hai

// example primitive datatype ki:

/*

let a = 10;

b = a;

b = 100;

console.log(b); //Output: 100   
console.log(b); // Output: 10

jesa k humny dekha b ki value change karny say a ki value change nahi hoi, iska mtlb hai number primtive datatype hai 

*/

// example reference datatype ki:

/* 

let a = [1, 2, 3];  // [] isko array kehty hain

b = a;

b.pop(); // pop() array k last element ko remove kardeta jo k hmary case men '3' hai

console.log("b") // Output: [1, 2]
console.log("a") // Output: [1, 2]

is bar b ki value change karny par a ki value bhi change hogai hai iska mtlb hai k array reference type follow karta hai

*/

// ======================================

// 6. Conditionals

// if-else, else-if

// if: if() ka samny wali brackets men just true ya false a sakta hai. ye chahy hum literally if(true), if(false) kar k likhain ya phir koi statement dekar jo k true ya false ho sakti hai kuch is trah say if(10>2), ab dekho 10 is greater than 2 to yeh true ho gaya na? ab agar if(10<2) likha hota to false hojata simple.

// if() ki brackets men agar true or false ki jgah kuch or bhi likh diya jaye to code phr bhi chalega, yeh hota hai truthy or falsy k concept ki wjah say jo hum advance class men parhain gay

/*

if-else: ab jesy humny upar discuss kiya k brackets men sirf true ya false a sakta hai, agar true hoga to if() ka code chal jaiga or agar false hoga to else ka code chal jaiga.

example:

if(10<100){

console.log("true")

}  

// ab hamari condition (10<100) true hai to jo code humny {} k undar diya hoga wo run ho jaiga. lekin agar hamari conditon false hai to? agar false hoga to else k {} k undar wala code run ho jaiga

if(10>100){

console.log("true")


}

else{

console.log("false")

}

*/

// else-if: yeh same hi chez hai just or conditions add ho jati hain check hony k liye, run hamesha aik hi cheez hogi on the basis of its condition, jo condition true hogi usky undar ka code run ho jaiga simple.


// example:

/*

if(10>100){

console.log("true1")


}

else if(10=100){

console.log("true2")

}

else if (10=10) {

console.log("true3")

}

*/

// is tarah say multiple condtions lagany k liye else-if use hota hai, pehli conditon check karyga agar true hogai to baki sab code ko ignore kariya jaiga or true wali value k undr wala code run ho jaiga, agar pehli false hai to next check kryga and continue.

// ======================================

// 7. loops

// loop: hum loops tab use karty hain jab humain kuch repeat karwana ho

// for loop: for loop k undr start, end, change k part hoty hain, kuch aisy:

// for(start; end; change;)

// start men starting ki value ati hai, end men ending value or change men change kia or kesy karna hai aiga. 

// example:

/* 

// using for loop to print numbers from 0 to 10:



for(i=0; i<11; i++){
    console.log(i);
}

// Output: 
0
1
2
3
4
5
6
7
8
9
10

*/

// for loop tab tak chalyga jab tak hmari given conditions true hain, jesy usny sabsy pehly check kia 0<10, joky true tha or hmari staring value 0 thi islye 0 print ho gaya, ab usny 1<10 check kia to wobhi true tha islye 0 men 1 add hogya hamary given change wali condition k mutabit. 

// yeh loop tab tak chalta raha jab tak hmari conditon true thi or tab ruk gaya jab hmari condition false hogai islye hum 10 per akar ruk gaye q k condition thi k loop tab tak chaly jab tk i ki value 11 say kam ho


// while loop: while() k undar kuch aisa likho jo true ho ya false ho. while hamesha k liye chalta rahyga or usky undar k code run hota rahyga agar while() k undar ki condition true hoti rahygi.

// islye while() k undr kuch aisa likhna jo aik time par akar false ho jaye taky loop bhi ruk saky

// example

// 

/*

var a = 12;

while(a<20){
    console.log(a++);
}

Output:
12
13
14
15
16
17
18
19

*/

// to jaisy humny dekha loop tab tak run hua jab tak a 20 say chota tha, jesy hi a<20 ki condition toti, loop bhi band hogaya

// ======================================

// 8. functions

// functions: functions ka matlab hai k apny bunch of code ko aik name dey dena or next time us sary code ko likhny ki bajaye wo name use karlena us sary code ko run karny k liye

// functions mainly 3 kaam karny k liye hota hai:

// 1) Jab apko apna code instantly run nahi karwana balky future men run karwana hai 

// 2) Jab apko apna code reuse karna hai

// 3) Jab ap apna code bar bar chalana chaty ho but with differet data


// example:

/*

function sayHello(){
    console.log("Hello"); 
}

// ab agar mujhy "Hello" print karwana hoga to men just sayHello() ko use kar k print karwa paoga without having to write the code again.

// function likhny k 6 styles hoty hain lekin abhi ham sirf yehi parh rhy hain

// function k undar ko likha hota hai usy 'function statement' kehty hain


another example:

function myTasks(){
    console.log("Do your work")
    console.log("Eat food")
    console.log("Do exercise")
    console.log("Drink water")
    console.log("Play fortnite")
    console.log("learn")
}

// ab jab bhi mujhy ye sab tasks dekhny hongy men myTask() function ko use kar k dekhlonga 

*/

// ======================================

// arguments and parameters

// arguments: real value jo hum dety hain function chalaty waqt 
// parameters: wo variable jinmy value store hoti hai arguments say ani wali

// example:

/*


function abcd(){

}

abcd(12)

ye jo function k agay () hain, agar hum abcd(12) ko aisy call kar k usmy 12 bhej dain, to wo 12 function ki un bracketes men jaiga. yejo abhi humny 12 bheja isko argument kehty hain


hum function ki brackets k andar aik ya multiple variable rakh sakty hain taky jo arguement humny bhejy wo unmy store ho jain, kuch is tarah say:

function abcd(a){

    console.log(a) // Output: 12

}

abcd(12)

yejo variable a humny function ki bracket k undar likha hai usy parameter ya param kehty hain


hum multiple variables bhi rakh sakty hain kuch aisy:

function abcd(a,b,c){

    console.log(a, b, c) // Output: 12 13 14

}

abcd(12, 13, 14)

// ab humny multiple arguments bhejy jo multiple parameters men jakar save hogaye

*/

// ======================================

// 10. Arrays

// hum aik variable men sirf aik hi value store kar sakty hain lekin agar humain aik say zyada values store karni hain to hum use karty hain array ka

// array: group of values

// example:
 
let arr = [1,2,3,5] // Output: [1, 2, 3, 5]

// array men index 0 say start hota hai yani k hmari first value 0th index par hogi 

// ======================================

// 11. push pop shift unshift splice

// push: agar humain array k end men koi value add karna chaty hain to hum push ka use karty hain

/*
arr.push(6); // yeh arr men 5 k bad 6 add karyga


// pop: yeh array ki last value ko remove kardeta hai

arr.pop(); // yeh last value yani 5 ko remove kardega array say


// unshift: yeh shuru men value ko jor deta hai

arr.unshit(0);  // isny arr k start men 0 add kardia


// shift: yeh first value ko remove karta hai

arr.shift();  // isny 1 ko remove kardia


// splice: is say hum array men koi bhi value remove kar sakty hain usky index ki value ko use kar k

arr.splice(2, 1) // first value yeh btati hai kis index per value remove karni hai or second value yeh btati hai k us index say or onforwad kitni values remove karni hai. Humny 2 index par rakhy hoye 3 ko remove karny ko kaha islye (2, 1) likha agar (2, 2) likhty to 3 or us say agli value yani 4 bhi remove ho jati array say. to basically agla number wahan say agay kitni values remove karni hain yeh btata hai

*/

// ======================================

// 12. Objects

// aik bandy ki bat ki to wo variable hai, aik say zayada bandon ki bat ki to wo array hai, or agar humny aik hi bandy ki detaiils store ki to wo object hoga

// object: its stores details about an identity in key value pairs

// types of objects:

// 2 type k object hoty hain aik blank object or dosra filled object

// 1) Blank Object:

let blankObj = {}  // yeh blank object hai, object curly brackets say denote hota hai javascript main

// 2) Filled Object:

let filledObject = {
    name: "Sam",
    age: 30,
    city: "California"
}

// yeh aik filled object tha, humny aik specific idenitity ki details store ki. 

// Property of an object: ab ye jo name, age or city haina? ye filledObject ki properties kehlati hain

// Method: ab agar object ki kisi property k undr hum aik function store karwadain to wo method kehlata hai


// example:

let pakSaafPowder = {
    brand: "Pak Saaf",
    name: "100g Garlic Powder",
    quantity_in_grams: 100,
    type: "Spices", 
    price: 350,
    // yeh sab properties hain object ki
    
    profit: function profit(){
        console.log("making cost - selling price");
    },
    // yeh profit bhi aik property thi object ki lekin jab humny is propety k undr aik function put kardia to yeh property aik method kehlaigi, isky opar hover karny per 'property' hi btaiga lekin isy 'method' kehty hain
}


// object men say kisi property ko access karny ka tareka:

// object ki kisi bhi property ko access karny k liye hum pehly us object ka name likhty hain or phr agay aik dot laga kar us property ka name likhty hain console.log k andar

// kuch aisy:

console.log(pakSaafPowder.name); // Output: 100g Garlic Powder


// is tarah hum aik object ki properties ko access karty hain

// ======================================

// 13. Updating properites of an object

// agar hum object ki kisi property ki value ko change karna chaty hain to hum wo kar sakty hain kuch aisy:

pakSaafPowder.name = "Garlic Powder"

console.log(pakSaafPowder.name); // Output: Garlic Powder


// is tarah hum object ki properties ki value ko update kar skty hain 
