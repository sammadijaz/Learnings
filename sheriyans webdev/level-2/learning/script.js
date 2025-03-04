// ◼ We will learn DOM Manipulation

// DOM = Document Object Model

// Iska matlab hai HTML k elements ki properties change karna using Javascript 

// Kaisy change karty hain? Selectors ko use kar k jesy CSS men bhi karty thy

// ◼ Selection

// ' document.querySelector() ' Yeh hai javscript men selector, or bhi tareky hain lekin bas yehi parhain gay abhi

var home = document.querySelector(".home");
var about = document.querySelector(".about");



// ◼ CSS change

// pehly element name phr .style or phir jo property change karni with dot(.)

home.style.color = "red";

home.style.backgroundColor = "green";

home.style.fontSize = "35px";

home.style.marginTop = "35px";



// ◼ HTML change

// ' .innerHTML ' is used to go inside an HTML element 

home.innerHTML = "<i>NoHome</i>"



// ◼ Text change

// ' .innerText ' or '.textContent' say hum text change kar skty hain lekin innerText purana tareka hai ab mainly textContent hi use hota hai

about.textContent = "NoAbout";


// 'innerHTML' us element k andar jakar HTML input karta hai jab k 'textContent' sirf Text content change karta hai element ka



// ◼ Adding Listeners

// javascript men already kuch listeners hoty hain hum custom listeners bhi bana skty hain lekin usky liye hamain uska event bhi banana hoga jo k complex hai islye wo nahi parhain gay abhi


// ' .addEventListener ' do chezain input men leta hai 

// 1st: Trigger 2nd: Function

// Kuch is tarah say ' home.addEventListener('triggerName', function(){}); '


// 'mouseenter' tab trigger hota hai jab mouse us element par ata hai
home.addEventListener('mouseenter', function(){
    home.style.color = "yellow"; // yeh element ka color change kardega jab mouse hover karyga uspar
});


// color change to ho jaiga lekin purana wapis nahi aiga jab mouse leave karega

// uskye liye hamain aik or listener banana hoga jo mouse leave hony par chaly


// 'mouseleave' tab trigger hota hai jab mouse element par say hat jaye
home.addEventListener('mouseleave', function(){
    home.style.color = "red";
});

// Ab aik hover effect ban jaiga, jab mouse element par aiga to color change ho jaiga or jab leave karyga to purana color ajaiga
