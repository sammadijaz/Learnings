// We would need an array having objects. Each object would carry a 'name' and 'link'


// #1 FETURE. Sab images ko automate kar k display karny wala function
var arr = [
    {name:"Sea", link:"https://images.unsplash.com/photo-1737008220100-804be759a152?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Cool halway", link:"https://images.unsplash.com/photo-1735252723552-138dc3fb6f14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Leaf closeup shot", link:"https://images.unsplash.com/photo-1737202325171-0f62f8296922?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Sunset in LA", link:"https://images.unsplash.com/photo-1737741708962-6611036dc351?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Huskeys pulling a sledge", link:"https://images.unsplash.com/photo-1737995720044-8d9bd388ff4f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Cool Pattern", link:"https://images.unsplash.com/photo-1738005787913-3a51f95507a7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Starry night", link:"https://images.unsplash.com/photo-1738000711416-a22d5ad609a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Mountains with snow", link:"https://images.unsplash.com/photo-1738250733850-1507b75f5e2d?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Drone on the ground", link:"https://images.unsplash.com/photo-1736635929162-afc982d54a32?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Man in water", link:"https://images.unsplash.com/photo-1736943993999-3889ed6a8b18?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Long road", link:"https://images.unsplash.com/photo-1737440227575-fd61700ff759?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Woman with mountains", link:"https://images.unsplash.com/photo-1735230495173-acf77f646286?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

// Ab ham aik function banain gay jo k aik div bana kar in sab images ko display karyga HTML main


function DisplayArrImages(){
    var clutter = ""; // This is the variable that will hold the HTML code for the cards
    
    arr.forEach(function(obj){
        clutter += `<div class="box">
                        <img class="cursor-pointer" src="${obj.link}" alt="${obj.name}">
                        <div class="caption">Lorem ipsum </div>
                    </div>`;
    })

    // Yeh upar wala hamari array k har object par chalyga or return karyga har aik object individually, jo k jakar 'obj' men store ho jaingy

    // Phr hum 'clutter' k andar aik div add karain gay jis men img tag hoga, hum usky image tag ko hamary objects k image tag say replace kardain gay. Ab jab bhi hamara function call hoga, yeh function hamary array k har object par chalyga, or har object ka link indivially add hoga or different divs ban jaingy

    // Abhi sab output console par print hora tha HTML par nahi

    document.querySelector(".container").innerHTML = clutter; // Yeh code hamary banaye hoye divs ko HTML k andar '.container' namky div men inject kardyga


}
DisplayArrImages();






// #2 FEATURE. Search Bar Functionality banain gay

// HTML main aik overlay hai jo dark kardeta hai elements ko lekin wo hidden hai, usko 'display: hidden;' diya hua hai

// Ham chaty hain k jab hum search box ko click karain to wo overlay visible ho jaye 

function searchFunctionOn(){

    var inputElem = document.querySelector("#search-input"); // Input box ko select kar k varible men store karlia taky bar bar select na karna pary just 'inputElem' use kar k select kar skty ab

    // Yeh code hamary overlay ko 'display: block;' dekar visible kardyga
    inputElem.addEventListener("focus", function(){
        
        document.querySelector(".overlay").style.display = ("block") // Yeh visible kardyga

        // Ab click karny par overlay visible to ho jaiga lekin wapis nahi jaiga, islye kahin or click karny par usko hidden karny ka code likh na hoga

        inputElem.addEventListener("blur", function(){
            document.querySelector(".overlay").style.display = ("none") // Yeh code hamary overlay ko hidden kardyga
        })
    })


    // ab ham sikhain gay array.filter()

    // 'input' event Listener tab trigger hota hai jab kuch enter kia jaye 

    // 'console.log(inputElem.value);' karny par hamain jo hum input men enter karain gay console men show hoga

    // Ab jo hum enter kar rahain hain unhain hamain hamari array k objects k names say filter karna hoga
    
    inputElem.addEventListener("input",function(){
        //console.log(inputElem.value); // Jo hum type karain gay console men print karyga
        const filterdArray = arr.filter(obj => obj.name.toLowerCase().startsWith(inputElem.value));
        console.log(filterdArray);
       
        // Search box:
        var clutter = ``;
        filterdArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })

        document.querySelector(".searchdata").style.display = "block"; 
        document.querySelector(".searchdata").innerHTML = clutter;

    })

    
}

searchFunctionOn();