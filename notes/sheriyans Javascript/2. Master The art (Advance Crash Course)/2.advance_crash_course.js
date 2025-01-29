// Source: https://youtu.be/EgDmCbhmstU?si=vvoDQCvqDrEAWNE9



// 1. difference between var let and const:

// Javascript k mainly 2 versions hain:

// 1) ES5(old)   2) ES6(new)

// ye dono versions aik dosry say alag nahi hain balky aik sath kam karty hain layers ki tarah. hum old or new features aik sath use kar skty hain. in dono version ko mila kar hamari Javascript bani hoi hai or time k sath sath new features aty rehty hain languages men

// hum dono versions ko aik sath use karengy, kaisy? browsers updates k sath HTML, JS or CSS ki new properties automatically add karleta hai hamain kuch install nahi karta apny say 

// differences:

// var let and const men mainly 3 difference hain joky in detail nechy alag alag headings men discuss kiye hain

// ES5 yani old version men sirf var tha or sirf var ko use kar k hi variable declare kiye jaty thy

// let and const ES6 men introduce hoye thy yani old version men nahi thym lekin ab hum teno ko use kar sakty hain





// var: 

// ◻ old version men sirf var tha

// ◻ var apny apko 'window object' men add karleta hai:

// JavaScript language men kuch feature jo hum use kar paty hain wo usky apny nahi hoty bal k browser ki taraf say diye gaye hoty hain or wo sab features aik box men hoty hain jisy 'window' kehty hain. jesy 'alert' waghera.

// window k features hum browser ki console men jakar 'window' type or enter kar k dekh sakty hain

// example window object ki:

var a = 10; // ab agar hum window men jakar dekhain to 'a' show hoga lekin agar hum var ki jgah let ya const use karain to nahi hoga

// old version men var window object men add ho jata tha or crucial information leak hony ka khatra hota tha islye new version men let or const window men add nahi hoty

// ◻ var function scoped hota hai:

// function scoped ki example:
function funcScoped(){
    for(var i=1; i<11; i++){
        console.log(i);
    }

    console.log(i);
}
// function scoped hony ka mtlb yeh hai k variable pory function men kahin bhi use ho skta hai aik bar declare hony k bad

// ab humny i ko for loop men define kia tha jiska output 1 say 10 tak mil gaya tha

// lekin 10 k bad 11 bhi print hua wo islye print hua q k loop k bahir console wala code bhi run ho gaya. wo islye run hua q k var function scoped hai or pory function men use kia ja sakta hai, even loop k bahir bhi. 

// is hi cheez ki solve karny k liye let add kia gaya



// let and const:

// ◻ let and const new version men add hoye

// ◻ let and const window object men add nahi hoty jaisy var ho jata hai:

let b = 100;

const c = 1000;

// ◻ yeh dono braces scoped hoty hain naky function scoped:

// example braces scoped ki:

function bracesScoped(){
    for(let i=1; i<11; i++){
        console.log(i);
    }

    console.log(i);
}
// let braces scoped hota hai islye ab i sirf for loop ki brackets k andar tak hi use ho sakta hai usky bahir nahi. or is hi liye jab hum is function ko run karain gay console men to hamain 10 tak counting milygi jo k hamary for loop ka output hai, isky bad error milyga k i is not defined, jo k is bat ko prove kardyga k let braces scoped hota hai



// ======================================



// 2. Window Object

// window: JavaScript men bahot features hain lekin kuch features usmy nahi hain lekin hum unhain phir bhi use kar paty hain. Wo features hamain browser provide karta hai islye hum unhain use kar paty hain.

// Browser jis box men hamain wo sary features use karny k liye deta hai, us box ko hi hum window kehty hain. alet, prompt, console waghera window k functions hain javascript k apny nahi.

// window k sary features hum browser ki console men jakar dekh sakty hain. Browser men tab open kar k CTRL + SHIFT + I (J in chrome) press kar k hum console open kar skty hain or console men 'window' type or enter kar k window k features dekh sakty hain.



// ======================================



// 3. Browser context api

// Browser hamain mainly 3 chezain deta hai:

// 1) Window object (jo abhi upar discuss kia)
// 2) Stack
// 3) Heap Memory

// Browser context api bigger picture hai jismy browser hamain window object deta hai or phir hum usky undr k features use kar paty hain, window k sath wo stack or heap memory bhi hamain sath deta hai, browser hamain yeh sab 'browser context api' ko use kar k deta hai.


// ======================================



// 4. Stack

// jis order men program run or execute hoty hain unhain stack kehty hain, yeh agay chal kar parhain gay kabhi


// ======================================



// 5. Heap Memory

// jitna data hum banaty hain wo kahin to store hota hai or jahan wo store hota hai, usko heap memory kehty hain.

// computer aik calculation ko aik bar men calculate nahi karta balky steps men break down kar k karta hai jesy k 1+2+3+4, pehly 1+2 hoga jiska answer 3 aiga usky bad 3+3 hoga jiska answer 6 aiga usky bad 6+4 hoga jisky bad final answe 10 aiga.

// yeh jo bech bech men step complete karny k liye computer nay data hold par rakha jesy k 3+3 kar k 6 kia or phir 6+4 kia, ab 6 ko store karny k liye storage bhi chye, yeh store hota hai heap memory men.



// ======================================



// 6. Execution Context

// Execution Context: It is a container in which function's code is executed. It is created whenever a function is called. It contains 3 things, variables, functions and the lexical environment of that function.


// Jab bhi hum function ko call karty hain to function apna khud ka aik imaginary container bana lega jismy uski 3 chezain hongi:

// 1) Variables

// 2) Functions insde that parent function (Agar parent fucntion k andar function add hain to wo hongy)

// 3) Lexical Environment of that function (next topic yehi hai lekin yeh bas aik guide hoti hai jo function ko yeh batatti hai k wo konsi information access kar sakta hai or konsi info access nahi kar sakta)

// ye jo imaginary container hai, us hi ko hum execution context kehty hain

// jab bhi function call hota hai to sabsy pehly us function ka execution context banta hai yani k imaginary box jisy men us function k variables, agar function k undr function thay to wo functions and us function ka lexical environment hota hai jo k function ko batata hai k kia use kia ja sakta hai or kia nahi


// ======================================



// 7. Lexical Environment:

// Lexical Environmet: yeh hota hai aik chart jo btata hai k aik particular function kin cheezon ko access karsakta hai and kin ko nahi. Matlb k it holds it's scope and scope chain.


function abcd(){
    var a = 50;
    
    function random(){
        var b = 200;
    }
}

// jab function abcd() call hoga to sab say pehly aik imagniary container ban jaiga or us container ka nam hoga abcd execution context.

// abcd function k container k andar jo aiga wo important hai concept k liye, abcd k execution context men 3 chezain aingi:

// 1) a (variable)
// 2) random (function)
// 3) lexical environment

// note karny wali bat yeh hai k abcd() k execution context men b variable nahi aiga, wo islye nahi aiga q k parent function apny child function ko to use kar sakta hai but apny child function k andar ki values ko use nahi kar sakta.

// ab agar men abcd() k andar random() k bahir variable b ko use kia to wo nahi chalyga error ajaiga, kia cheez chal sakti hai or kia nahi ye hi to lexical environment batata hai.


// ======================================



// 8. How to copy reference (non-primitiave) datatypes

// hamain pata hai k non-primitive(reference) datatype values copy nahi hotin balky unka reference hamain diya jata hai. to jab hum dosry variable ko change karty thy jisko humny equal rakha hota tha to dono ki values change ho jati

// proof:
let abc = [1,2,3,4,5,6];

let efgh = abc;

console.log(efgh.pop()); // Output: [1,2,3,4,5]
console.log(abc); // Output: [1,2,3,4,5]
// dono values change ho gain aik ko change karny par


// lekin primitve values ko actually men reference ki jagah copy karny ka tareka bhi mojod hai. hum array, obj waghera ko 'spread' operator ko use kar k copy kar skty hain

// spread operator: spread operator ko hum 3 dots say represent karty hain kuch aisy ' ... '

// example of spread operator:

let arr = [1,2,3,4,5,6,7,8,9,10]

let copyArr = [...arr] // ... (spread operator) k bad hum jo bhi likhty hain, us ki value hamary variable men actually copy ho jati hai instead of giving reference

console.log(copyArr.pop()); // Output: [1,2,3,4,5,6,7,8,9]
console.log(arr); // Output: [1,2,3,4,5,6,7,8,9,10]

// Dekha is bar aik ko change karny par dosri value change nahi hoi balky pheli array ki actually men value copy kar k do alag arrays ban gain na k aik single reference per dependent pehly ki tarah


// is hi trah say hum objects ko bhi copy kar sakty hain:


var obj = {
    name: "Sam",
    age: 30,
}

var copyObj = {...obj} // iska matlb hai yahan obj ki information paste kardo

copyObj.age = 19;

console.log(copyObj); // Output: {name: 'Sam', age: 19}
console.log(obj); // Output: {name: 'Sam', age: 30}

// dekha now they both are separate entities yani k actually men values copy hogain


// ======================================



// 9. Truthy VS Falsy

// Javascript men kuch bhi likho, wo mainly 2 categories men say kisi aik men belong karta hai, wo do categories hain:

// 1) Truthy
// 2) Falsy

// ◻ Falsy values: 0, Null, undefined, NaN, false, document.all

// ◻ Truthy values: falsy k ilawa jitni bhi values hongi wo sab truthy hain


// yeh dono true or false say alag hain. falsy values hamesha false return karain gay

// remember, if() men (-1) likhny par if run ho jaiga parha tha basic crash course men? Ao dekhty hain wo q chalyga

// jesa k hamain pata hai k if() ki () in brackets men either true a sakta hai ya to false, statements ki shakal men ya literally. abhi upar hamny parha hai k falsy values hamesha false return karain gay, iska mtlb yeh hain k agar un falsy values men say koi hum if() ki brackets men likh dain to if nahi balky else ka code run hoga, falsy values k ilawa hum kuch bhi likh dain, hamesha if() wala code hi run hoga.


// falsy ki examples:

// agar hum if() ki brackets () men 0, Null, NaN, undefined, false ya document.all men say kisi ko bhi likhain gay to if ka code nahi run hoga balky else ka code run hoga

if(null){
    console.log("if's code is running");
}
else{
    console.log("else's code is running");
} 
// Output: else's code is running

// isi tarah say falsy men say kuch bhi likho to if usy false ki tarah treat karyga or else wala code run hoga, falsy k ilawa har value ko true count kia jaiga


// example of truthy:

if(-1){
    console.log("The code of if is running");
}
else{
    console.log("The code of else is runnning");
}
// Output: The code of if is running

// hum falsy k ilawa koi bhi value likh dain, if ka code hamesha usko true count karyga or if wala code hi run hoga hamesha


// ======================================



// 10. forEach, forIn, do-while

// ◻ forEach loop: yeh loop siraf arrays par kam karta hai. matlab jab bhi hamain koi aik cheez array ki har aik value par apply karni hogi tab hum yeh loop use karain gay. yeh loop array ki har aik value ko affect krny k liye hai

// function ko likhny ki different tareky hoty hain, hum sirf basics hi dekhry hain

// forEach loop ki use karny k liye sabsy pehly hum jis array par chalana hai uska name likhain gay, usky bad dot laga kar agay forEach() likhain gay, ab () k andar jo humny function apply karna hoga array ki har value par wo likhdain gay

// example of forEach loop:

let loopArray = [1,2,3,4,5,6,7,8,9,10]

arr.forEach(function(val){
    console.log(val+2);
});
/*
Ouput:
3
4
5
6
7
8
9
10
11
12
*/

// jaisa k humny dekha output hamain array ki shakal men nahi bal k individual values ki shakal men mila hai

// forEach loop by default kabhi bhi original array ko affect nahi karta bal k uski temporay copy bana kar use karta hai or function array ki har aik value par individually perform karta hai islye array ko affect or change nahi karta

// proof:

console.log(loopArray); //Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// jaisa k humny kaha tha, array men koi change nahi aya and original array unaffected rahi



// ◻ forin loop:

// yeh loop objects par apply hota hai

// example of forin loop:

var loopObj = {
    name: "Sam",
    age: 30,
    city: "California"
}


for(var key in loopObj){
    console.log(key, loopObj[key]);  // 'key' variable only outputs the keys of the object, loopObj[key] outputs the values of the keys in loopObj
}  

/* 

Ouput: 

name Sam
age 30
city California

*/       


// kuch is trah use karty hain forin loop ko, key ki jgah hum koi or vairble nameb bhi dey sakty thy lekin mostly key hi use kia jata hai islye key likja

// console.log k andar key likhny say sirf object ki keys output hongi

// console.log k andar objectName k sath square brackets laga kar usky andar variable ka name likhny say object ki keys ki values output hongi

// console.log k andar object ka name likhny say pora object hi output ho jaiga in key value pairs



// do-while loop:

// harsh bhai kehry thy isko parhna zarori nahi lekin phir bhi concept lelo

var doWhile = 20;

do {
    console.log("20 is less than 25");
    doWhile++;
} 
while(doWhile<25);

// Output: (5 times) 20 is less than 25

// hamesha sab say pehly 'do' k andar ka code run hota hai, islye agar while k andar ki condtion false bhi hoi to bhi 1 bar 'do' k andar ka code run hoga hi hoga

// to aisy cases jin men apko aik bar code run karwa kar kuch condition check karwa kar code run karwana hoto tab use ho sakta hai forin loop

// harsh bhai kehry thy 'while' mixed with 'if' becomes do-while to islye alag say zarorat nahi parti 



// ======================================



// 11. Callback functions

// humny is video men asynchronous javascript ko blkl bhi touch nahi kia or sirf synchronous javascript hi parhi hai. Yeh topic Asynchronous javscript ka hai lekin phir bhi hum samajh sakty hain.

// pehly synchronous or asynchronouse ka dekh lety hain thora sa

// In communication:

// The key difference between synchronous and asynchronous communication is synchronous communications are scheduled, real-time interactions by phone, video, or in-person. Asynchronous communication happens on your own time and doesn't need scheduling.

// In programming: 

// ◻ Asynchronous is a non-blocking architecture, so the execution of one task isn’t dependent on another. Tasks can run simultaneously.

// ◻ Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it. Each task requires an answer before moving on to the next iteration.


// Aisa code jo bad men run hota hai kisi task ya code k run hony k bad, us code ko hum aik function assign kardety hain jo run hota hai us pehly waly code k run hony k bad, wojo function hum us code ko assign karen gay us hi ko callback function kehty hain. Callback function normal function hi hota hai just jahan use hua hota hai us nisbat ki wjah say usko callback function kehty hain


// aik example asynchronous ki but smjh ajaigi:

setTimeout(function(){
    console.log("This is a callback function, running after 2 seconds");
}, 2000)

// yeh code function k andar ka code 2 second bad run karyga or 2 second bad console k andar ka sentence print ho jaiga. '2000' jo likha hua hai uska mtlb hai 2000 miliseconds yani k 2 seconds. Uska mltb hai k function ko 2 second bad run karna jab 2 second pory ho jaingy tab function run ho jaiga. Yeh aik callback function tha.

// jaisa k humny dekha yeh normal function hi tha just aik task mil gaya or us task k complete hony k bad function run ho gaya, yani 2 second complete hony ka task.



// ======================================



// 12. First class functions

// JavaScript men yeh concept hota hai k hum functions ko as a value ya variable ki tarah treat kar skty hain, is hi function ko hum first class function kehty hain

// example:

// remember parameter and arguements? hum function men value bhejty thy arguements say? Hum arguements ko use kar k value ki jgah aik pora function bhi bhej sakty hain, ao dekhty hain kaisy:

var anotherFunction = function(value){
    value(); // Output: Hello, I have sent a function into a function!
};

anotherFunction(function(){
    console.log("Hello, I have sent a function into a function!");
})

// dekha humny aik function k parameter men aik function bhej dia or usko run karwaya value() likh kar us hi k andar, yeh hum islye kar paye q k Javascript men functions first class hoty hain or use kiye ja skty hain as a value and a variable.



// ======================================



// 13. How arrays are made behind the scenes in Javascript

// array khud say aik datatype nahi hai javascript men bal k object datatype ki hi aik type hai. Jab hum aik array banaty hain to javascript men to behind the scenes javascript us array ko aik object men convert kardyga us k index k hisab say, aik example dekhlo

/*

// example k liye humny yeh array banai
var arr1 = [1, 2, 356, 4, "Hello", "Mango"];

// agar hum iski datatype check karain to wo object hi aiga
console.log(typeof arr1) // Output: object

// backend par javascript hamari array ko aik object men convert kardeta hai kuch is trah say
var arr1 = {
    0: 1,
    1: 2,
    2: 356,
    3: 4,
    4: "Hello",
    5: "Mango",
}       

// to array kuch aisy store hoti hai as an object javascript men at the backend to summary yeh hai k array object ki hi aik type hai javascript men. 

// jin languages men array aik datatype hoti hai khudsy unmy men arr1[-1] nahi likh sakty error ajata hai lekin javascript men hum kar sakty hain q k array khud aik datatype nahi hai idhar bal k object ki hi aik type hai.


// lekin phir hamain pata kesy chalyga array konsa hai or object konsa hai jab dono k datatypes same hain?

// usky liye alag say operator hain unko use kar k pata chalyga, ao dekhty hain
console.log(Array.isArray(arr1)); // Output: true (upar waly object ko comment kardena yato false dikhaiga)

// to is operator say hum dekh skty hain konsa variable array hai or konsa nahi

*/



// ======================================



// 14. How to remove object property

// hamaim pata hai k object ki property ki value update kaisy karty hain, hum objectName.propertyName = newValue kar dety hain lekin delete ya remove kaisy karyty hain hamain yeh nahi pata, chalo ao dekhty hain kaisy

let anotherObject = {
    name: "Nina",
    age: null,
}


// to remove property from an object
delete anotherObject.age;

console.log(anotherObject); // Output: {name: 'Nina'}

// jaisa k hum dekh sakty hain age ki property remove hogai aisy hi hum koi bhi property ko remove kar skty hain.