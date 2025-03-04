// Source: https://youtu.be/ks4MFTHLfyg?si=lrygJbzU7IKveSOc


// 01. Higher order functions

// ◼ Higher order functions: Higher order function is the function which accepts a function in its parameter OR returns a function OR Both.

// Matlab yeh k yeh wo functions hoty hain jo apny parameter men function accept krty hain ya wo functions jo aik function return karty hain ya phir wo yeh dono hi karty hain, aisy functions ko higher order function kehty hain.

// Examples:

// example 1:
function one(parameter){

}

one(function(){
    console.log(`This is a higher order function now`);
})

// jab tak humny 'one' men function pass nahi kia tha tab tak wo aik simple function that lekin jab humny usmy function pass kardia to ab wo higher order function ban gaya hai


// example 2:
function two(){
    return function(){
        console.log(`This is also a higher order function`);
    };
}


// example 3: 

// forEach() method aik higher order function hai q k wo khud aik function ho kar aik function accept karta hai

let arr = [1, 2, 3, 4]

arr.forEach(function(){
    console.log(arr);
})

// forEach() aik function hokar function accpet kar raha hai isly yeh higher order function hai



// =================================================================



// 02. Constructor Functions

// ◼ Constructor Functions: A function which whenever called using 'new' keyword outputs an object, if we use 'this' keyword inside that function, it outputs the object with all the properties and methods mentioned in that function. Such function is called is constructor function. 

// ('this' keyword kia hai yeh hum bad men parhain gay, but basically window object ki taraf point karny k liye use hota hai)

// Yeh function aik biscuit k mold/sanchay ki tarah hota hai jis k undr biscuits bake hoty hain aik hi shape and size k. 

// Jab bhi hum us mold k andar biscuit material dal kar bake karain gay to wo same shape and size ka biscuite return karyga, same aisy yeh function karta hai

// Humny 'new' keyword already hitesh sir ki videos men use kia hua hai yeh kisi bhi element ko unique banany k liye use hota hai


// Examples:

// Example 1:

function biscuitBananyWalaMold(){
    this.size = 10;
    this.width = 20;
    this.height = 30;
}

var biscuit1 = new biscuitBananyWalaMold()
var biscuit2 = new biscuitBananyWalaMold()
var biscuit3 = new biscuitBananyWalaMold()
var biscuit4 = new biscuitBananyWalaMold()

console.log(biscuit1); //Output: biscuitBananyWalaMold { size: 10, width: 20, height: 30 }
console.log(biscuit2); //Output: biscuitBananyWalaMold { size: 10, width: 20, height: 30 }
console.log(biscuit3); //Output: biscuitBananyWalaMold { size: 10, width: 20, height: 30 }
console.log(biscuit4); //Output: biscuitBananyWalaMold { size: 10, width: 20, height: 30 }


// Is function nay 4 instances bana diye jin men same properties or data hai lekin phir bhi wo unique hain q k new keyword use kia gaya hai


console.log(biscuit1===biscuit2===biscuit3===biscuit4); // Ouput: false
// Yeh batata hai k even tho sab k andar same hi cheez hai lekin phr bhi wo unique hai or same nahi hai because humny new keyword use kia tha


// Example 2:

// Imagine karo hamain same shape, size or type k circular button bananay hain kafi zyada but unka ka color different hona chye, tab ham hum use karain gay constructor function ka

// Kuch aisy:

function circularButtonsBanao(color){
    this.radius = 5;
    this.type = "pressable"
    this.shape = "circular"
    this.color = color;
}

// humny color parameter men dedia, ab agar hum function men color argument use kar k bhejain gain to baki sab properties same hi rahain gi buttons ki sirf color change ho jaiga or hamary different color k buttons ban jaingy

var redButton = new circularButtonsBanao("red")
var greenButton = new circularButtonsBanao("green")
var blueButton = new circularButtonsBanao("blue")

console.log(redButton); 
/* Output: circularButtonsBanao {
  radius: 5,
  type: 'pressable',
  shape: 'circular',
  color: 'red'
} 
*/

console.log(greenButton);
/* Output: circularButtonsBanao {
  radius: 5,
  type: 'pressable',
  shape: 'circular',
  color: 'green'
} 
*/

console.log(blueButton);
/* Output: circularButtonsBanao {
  radius: 5,
  type: 'pressable',
  shape: 'circular',
  color: 'blue'
} 
*/


// to dekha humny different color k buttons bana liye constructor function ko use kar k with same properties but different colors



// =================================================================



// 03. First Class Functions

// ◼ First Class Functions: In Javascript, Functions are first class. Meaning that they can be treated as normal value or like variables. They can be passed into parameters via arguements just like variables.

// is ka mtlb yeh hai k hum function k andar aik or function pass kar sakty hain because javascript men functions first class hoty hain or jis language men functions variable ki tarah treat kiye ja sakain, is tareky ko hum first class functions kehty hain. Yani k functions first class hain.

// Example:

function aFunction (val){
   val();
};

aFunction(function(){
    console.log(`This functionality of a function accpeting a function like a variabel is because functions are first class in javascript`);
});


// Dekha function pass ho gaya 'aFunction' main aik normal variable ki tarah



// =================================================================



// 04. 'new' keyword

// ◼ new keyword: It creates an empty object and points the empty object towards the values (usually a function) mentioned after the 'new' keyword. It makes it unique.

// new keyword aik empty object bana kar, usky agay jo likha hota hai (jo k usually aik function hota hai) usky data ka reference adopt karelata hai or aik unique instance bana deta hai

// Example:

var str1 = `Hello`

var str2 = new String(`Hello`)

console.log(str1, str2, str1===str2); // Output: Hello [String: 'Hello'] false

// dono men Hello hi store tha lekin equal nahi hain q k new keyword nay unique bana dia object men wrap kar k



// =================================================================



// 05. IIFE (Immediatley Invoked Function Expression)

// ◼ IIFE: IIFE runs immedialtely while allowing us to create private variables.

// IIFE hai function ko turant chalane ki kala, is tarah say k hum private variables bana pain.

// Yeh jo 'gsap' nam k special keywords hamain milty hain GSAP main wo iife ko use kar k hi banty hain


// Private variables say murad hai kuch aisy variables jin ko koi access na kar paye. Mtlb k wo variables jo koi access na kar paye jis say wo safe and secure ban jain.

// IIFE k andar banaye gaye variables usky bahir access nahi kiye ja skty.

// Lekin agar humain unhain access karwana haito usky liye hamain IIFE k andar hi code likh kar access dilawana hoga. IIFE immediatley run ho jata hai.


// IIFE hai kia? chalo ao dekhty hain.

// normal function ka agar name hata diya jaye, or poray function ko () say wrap kardia jaye, or end par () laga kar usay call kardia jaye, to yeh ban jata hai IIFE. chalo ao dekhty hain:

// Code Example:

/*

(function(){
    var a = 5;
})()  
  
// yeh hai iife or uska structure

// 'var a' is function k bahir kahin bhi access nahi kia ja sakta ab

*/

// How to access the variables in IIFE:

/*

var answer = (function(){
    var privateValue = 10;

    return {
        getter: function(){
            console.log(privateValue);
        },
    }
})();


// humny 'return' k agay aik object {} laga diya or aik key 'getter' nam ki bana di jis k andar aik function rakh diya jo k hamari privateValue ko output kar raha hai jo k hmary varible 'answer' k andar store ho rahi hai

// 'return' nay IIFE run hoty sar hi yeh function return kardia or ab hum access kar sakty hain apny variable ko 'answer.getter()' type kar k console men, jiska output '10' aya hai jo k hmay private variable ki value thi

*/


// How to set/change the private value and access it:



var ans2 = (function(){
    var privateValue = 30;

    return {
        // This will make privateValue accessable 'ans2.getter()'
        getter: function(){
            console.log(privateValue); 
        }, 

        // This will allow us to set the privateValue ourself 'ans2.setter(150)'
        setter: function(newValue){
            privateValue = newValue;
        }
    }
})();



// Humny getter wali key or uska purpose to samjh liya tha ab, ab humny aik or key banai 'setter' namki. Isko hum use karain gay 'privateValue' ki value khud say assign karny main out of the function. Pehly hum sirf value ko access or view kar sakty thy ab hum usko change bhi kar pain gay.

// Sab say pehly hamara IIFE run ho jaiga or 'privateValue = 30' set ho jaigi phr IIFE object return karyga jo jakar 'ans2' men store ho jaiga.

// Object k undar 2 key-value pairs hain, 1st hai getter or uska function, or 2nd par hai setter or uska function. Yeh dono run hokar return kiye jain gay IIFE ki taraf say or 'ans2' men store hongy.

// 'getter' ka to humny dekhlia wo value access karwa dega 'ans2.getter()' type kar k console men, iska answer change karny say pehly '30' aiga 

// 'setter' say hum privateValue ko khudsy assign kar paingy. 'setter' k undar likha gaya hai k jo value hum 'newValue' ko dengy, wohi value 'privateValue' ko assign ho jaigi jo k hamara private variable hai.

// 'setter' main new or old value ko equal karny k bad, hum jo bhi value assign karna chaty hain wo 'setter' k andar waly function k arguement 'newValue' men store ho jaiga or 'privateValue' ki value update ho jaigi.

// value change karny k liye hamain console men 'ans2.setter(150)' likhna hoga '150' ki jgah hamain jo value set karni hogi hum wo likhain gay, or ab jab hum 'ans2.getter()' run karain gay console men to value '30' say update hokar '150' ho chuki hogi.



// =================================================================



// 06. Prototype

// ◼ Prototype: When we create an object, Javascript adds some properties and methods into the object automaticaly for us to use. All those methods are inside prototype.

// Hitesh sir k videos men humny dekha hua hai array ki example say jismy humny sekha tha k '.length' aik property hai na k aik method islye hum usko use karty hoye '()' nahi lagaty jis tarah methods ki bari lagaty hain. 

// NOTE: Length property prototype ka part nahi hai wo bahir hai us say


// Code Examples:


// Exampl #1:

let arr2 = [1,2,3];

console.log(arr2.length); // Output: 3

// yeh length property hamain Javascript nay automatically di thi humny isay create nahi kia, Hala k yeh aik property hai arrays ki or prototype ka part nahi hai lekin as an example use karlia phir bhi

// Example #2:

let obj2 = {
    name: "Sam"
}

console.log(obj2.hasOwnProperty("name")); // Output: true

// Ab hasOwnProperty() property prototype k andar diya hua aik method tha jo hamain ye batat hai k hamari key us object men hai ya nahi, hamary object men 'name' namki key thi islye iska output 'true' aya.



// =================================================================



// 07. Prototypal Inheritance

// ◼ Like kids get their parents' properties and goods in inhertiance, the same way objects get protype in inheritance from javascript. One object can inherit other objects prototype which which will allow that object to have the chracteristics of the other object.


// Jaisy parents bacho ko apny genes, propert and wealth waghera inherit karty hain inheritance men kuch isi tarah har object ko javascript prototyp men methods inherit karta hai. 

// Agar aik average human hai or aik Web Developer hai to Web Developer wo sab kam kar sakta hai jo aik average human karta hai lekin Web developer kuch extra kam kar sakta hai jo aik average human nahi kar sakta, jaisy k website banana etc.

// Ab is example men dekha jaye Web developer aik average humans ki characteristics jesy k walking, talking etc inherit karta hai 

// Jo characteristics web developer nay humans say inherit ki hain unko hum prototypal inhertance bol sakty hain.

// Basically hum kisi object ki properties kisi or object ko inherit kar sakty hain isi ko prototypal inheritance kehty hain.


// Code example:

let averageHuman = {
    canWalk: true,
    canTalk: true,
    canFly: false,
    canFight: true
};


let webDeveloper = {
    canMakeWebsites: true,
    canManageBackEnd: true,
    canWriteHTML: true,
    canWriteCSS: true,
    canWriteJS: true
};

// ab web developer wo sab kar sakta hai jo average human karta hai lekin wo humny mention nahi kia hum copy bhi kar sakty hain human object ka data or web developer k object men paste kar sakty hain lekin yeh effecient nahi hoga.

// Instead hum 'averageHuman' ki properties 'wedDeveloper' ko inherit kar sakty hain kuch aisy:

webDeveloper.__proto__ = averageHuman;


// ab 'webDeveloper' k pas aik or prototype ka section add ho jaiga jismy 'averageHuman' ki sabhi properties available hongi or wo unhain access kar paiga

console.log(webDeveloper); // Output in console: {canMakeWebsites: true, canManageBackEnd: true, canWriteHTML: true, canWriteCSS: true, canWriteJS: true}

// Output men hamain 'averageHuman' ka data nahi mila lekin nechy prototype k andar aik or prototype ka section add ho jaiga jismy 'averageHuman' ki key-value pairs mojod hongy or hum unhain access kar paingy



// =================================================================



// 08. Difference between Method and Function

// ◼ Difference: Jo function aik object k andar hota hai usy hum method kehty hain. Normal function ko hum function kehty hain.

// Example of function:

var isAFunction = function aFunc(){
    console.log("This is a normal Function");
}

// Example of method:

var isAMethod = {
    method: function(){
        console.log("This is a method");
    }
}



// =================================================================



// 08. this, call, apply, bind

// ◼ Global Scope and Local Scope: 

// Global Scope: jo data {} curly braces k andar likha jata hai, chahy wo function ya object k andar likhi jaye, uska sope local hota hai (yeh wohi var let and const k bech men difference waly scope ki bat hori hai)

// Local Scope: Jo data kisi bhi braces k andar nahi likha jata uska scope global hota hai




// ◼ 'this' keyword: The value of 'this' keyword will always change depending upon the context.

// 'this' ki value different hogi different jgah par depending upon uska use kahan kia gaya hai.

// Ao dekhty hain 'this' ki value different contexts men:



// ◼ 1. In Global Scope: 

// The value of 'this' in global scope will be 'Window'

console.log(this); // Output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// ◼ 2. In Function/Local Scope: 

// The value of 'this' in function scope will also be 'Window'.

function localScope(){
    console.log(this);
}; 
// Ouput: Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// ◼ 3. In Method Scope: 

// In methods the value of 'this' will contain the data inside its parent object

var methodScope = {
    name: "Sam",
    age: "30",
    someMethod: function(){
        console.log(this);
    }
};

console.log(methodScope.someMethod()); // Output on console: {name: 'Sam', age: '30', someMethod: ƒ}

// idhar 'this' nay jo bhi usky parent object k andar tha wo output kardia



// ◼ 3. In Event listeners: 

// (this one is related to DOM and I dont know DOM yet)

// The value of 'this' in event listeners will equal to whatever written before the '.addEventListener' 

// If its written 'button.addEventListener' then the value of 'this' will be the value of 'button'



// ◼ call, apply and bind: All of them have similar motive.


// Agar tumhary pass aik 'function' hai or aik 'object' hai, to jo 'this' ki jo bhi default value hogi, usk ko default value na rakh kar, us particular 'object' ki taraf point karwana inka motive hai.


// ◼ call:

// Agar aik function hai 'func1' namka or aik object hai 'objt1' namka, function k andar console k andar 'this' print hora hai to jaisa humny upar parha tha k function k andar 'this' ki default 'Window' hoti hai, to agar hum 'this' ki value window na rakh kar 'objt1' rakhna chaty hain to tab use mn aiga 'call'


// function ko noramly 'fucn1()' type kar k run krny ki jagah usy 'call' say run karwain gay 'func1.call()' type kar k or () brackets k andr us object ka nam likh dain gay jis ki value hamain 'this' ko deni hai

// Jo k hamary case men 'func1.call(objt1)' hogi 

// Is tarah say function normally hi run hoga lekin 'this' ki value default value ki jgah hamary object ko print karygi


// Code Example:

function func1 (){

    console.log(this); // Output on console: {name: 'Sam'}
};

var objt1 = {
    name: "Bumba"
};

func1.call(objt1);




// Same way men agar hamary pass parameters hon function men to hum unhain object k bad likhty hain brackets men:


function callFunc(val1, val2, val3){
    console.log(this, val1, val2, val3); // Output on Console: {age: 20} 10 20 30

    console.log(this.age); //Output on console: 20
    console.log(callObj.age); //Output on console: 20
};

var callObj = {
    age: 20,
};

callFunc.call(callObj, 10, 20, 30)


// ' console.log(this.age); ' ka answer 20 islye aya q k 'this' ki value to directly object ki value ban jaigi to jis tarah hum object k agay dot laga kar uski properties access kar paty hain to idhar bhi kar paye q k 'this' 'callObj' ki value ki taraf point kar raha tha islye yeh isi tarah work kara jesy 'callObj.age' work karta




// ◼ apply: apply blkl similar tareky say kam karta hai yeh just arguements array ki form men leta hai lekin treat unko individual values ki tarah hi karta hai same call ki tarah


// Ismy just ' .apply() ' use karna hoga or 'functionName.apply(objectName, [arguemten1, arguement2,....])' yeh format use hoga just


function applyFucntion(param1, param2, param3){
    console.log(this, param1, param2, param3); // Output on console: {FavGame: 'Fortnite'} 100 200 300
};


var applyObj = {
    FavGame: "Fortnite"
};

applyFucntion.apply(applyObj, [100, 200, 300])


// to dekha isny same call ki tarah function kia just array ki form men arguements liye lekin treat individually hi kia sabko array sirf input deny k liye tha uska baki kuch nahi.




// ◼ bind: ismy bhi takreban same hai lekin bind function or object ko bind kar deta hai lekin run nahi karta, isko hamain save karna hota hai variable men or jab use krna hota to run kar sakty, answer same wohi aiga just usko run nahi karyga


// bind react men bahot use hota hai jab hamain event listeners bananay hoty hain or koi function sirf click hony par hi chalana hota hai

function bindFunc(){
    console.log(this);
}

var bindObj = {
    painWhere: "Chest",
};


var bindedFunction = bindFunc.bind(bindObj);

bindedFunction(); // Output on console: {painWhere: 'Chest'}



// =================================================================



// 09. Pure and Impure functions

// ◼ Pure functions: Pure Function has two characteristics, They are:

// 1) It should always return same output for an input.

// 2) It should never be changing or updating the value of a variable outside of its scope.


// Example of Pure function:

function pureFunc(a,b){
    return a*b;
};


var pureAnswer1 = console.log(pureFunc(2,3)); // Output on console: 6
var pureAnswer2 = console.log(pureFunc(2,3)); // Output on console: 6

// Jaisa k humny dekha dono outputs same value return kar rahy hain, or na hi hamara function ksi global variable ki value change/update kar raha hai, islye yeh aik pure function hai.



// ◼ Impure functions: Impure functions have the opposite characteristics of a pure function. If one of these characteristics a present, it will make the function impure.


// 1) It returns a different output for an input.

// 2) It changes/updates the value of a variable of a global variable/or a variable outside of its scope.


// Examples of an impure functions:

// Example #1:

function impureFunc1(valew){
     return Math.random()*valew; // Multiplies a random value with 'valew'
};


var impureAns1 = console.log(impureFunc1(10)); // Ouput on console: 9.883921518566536
var impureAns2 = console.log(impureFunc1(10)); // Ouput on console: 0.7610872376671041

// NOTE: The value of them will keep on changing

// Jaisa k humny dekha dono ko same input deny par phr bhi dono ka different output return hua. Islye yeh impure function hai. 


// Example #2:

var outSideVar = 12;

function impureFunc2(){
    outSideVar = 24; // Updating the value of a variable which is beyond its scope
};


// Is function nay aik variable jo k us k scope k bahir tha ki value update ki islye yeh bhi aik impure function ban gaya.



// =================================================================





