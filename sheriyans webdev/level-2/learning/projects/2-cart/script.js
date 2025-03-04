var products = [
    {name:"Yellow Chair", price:'15,000', tagline:"Stole Mango's colors", link:"https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Gray Chair", price:'12,000', tagline:"Damn this is good", link:"https://plus.unsplash.com/premium_photo-1705169612261-2cf0407141c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Pink Chair", price:'11,000', tagline:"Barbies made for this", link:"https://images.unsplash.com/photo-1586158291800-2665f07bba79?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Royal Chair", price:'16,000', tagline:"Sit like a king", link:"https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Red Chair", price:'13,000', tagline:"Red like apple", link:"https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Soft Chair", price:'10,000', tagline:"Cozy the best" , link:"https://images.unsplash.com/photo-1611814771544-0baa57cb8224?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];

var viralProducts = [
    {name:"Cozy Sofa Bed", price:'50,000', tagline:"Sit & Sleep with Peace" , link:"https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?q=80&w=1538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Trendy White Sofa Bed", price:'60,000', tagline:"Trendy and Catchy" , link:"https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Simple Yellow Couch", price:'30,000', tagline:"Simple But Comfy" , link:"https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];

// adding products
function addProducts(){
    var clutter = ``;
products.forEach(function(obj){
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden ">
                    <img class="w-full h-full object-cover"src="${obj.link}" alt=""obj.name />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${obj.tagline}</h3>
                            <h4 class="font-semibold mt-2">Rs ${obj.price}</h4>
                        </div>
                        <button class="add w-10 h-10 rounded-full shader text-yellow-400"><i add class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
})

document.querySelector(".products").innerHTML = clutter;

} addProducts();

// adding viral products
function addViralProducts (){
    let clutter = ``;
    viralProducts.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src=${product.link}
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.tagline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">Rs ${product.price}</h4>
                    </div>
                </div>`

           
    })
    
document.querySelector(".populars").innerHTML = clutter;   

} addViralProducts();


// add to cart feature

let cart = [];

function addToCart (){
    document.querySelector(".products").addEventListener("click", function(details){
        console.log(details);
    })
} addToCart();

