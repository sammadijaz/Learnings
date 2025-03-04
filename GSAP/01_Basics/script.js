// gsap learning

// 01. Basic Animations

// We use gsap.to() to animate the element from its initial state to the final state

gsap.to(".box1",{ 
    
    // basic animation from initial state to final state
    x: 1000,
    duration: 2,
    delay: 1,
    
    // gsap is made in javascript so we have to write numbers as it is but we have to write characters in double quotes because it is a string
    

    rotate: 360, // It rotates the element

    // We have to write in camel case.
     
    // Meaning we have to write the first letter of the first word in small and the first letter of the second word in capital. 

    // like backgroundColor, borderRadius, etc.

    backgroundColor: "#0249ac", // It changes the background color of the element
    
    borderRadius: "100%", // It changes the border radius of the element
    
    scale: 2, // It scales the element



})


// gsap.from() is used to animate the element from its final state to the initial state

gsap.from(".box2",{
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
})



// 02. Basic Text Animations and Stagger property in gsap

gsap.from("h1",{

    opacity: 0,
    y: 30,
    delay: 1,
    color: "red",
    duration: 2,
    // All elements get animated at the same time

    // We can use stagger property to animate the elements one by one
    
    stagger: 0.5, // It delays the animation of each element by 0.5 seconds

    // Now animations would be applied on each of the elements individually not just all at once

})


// yoyo and repeat property in gsap

gsap.to(".box3",{

    x: 1000,
    duration: 2,
    rotate: 360,
    delay: 1,

    repeat: -1, // It repeats the animation infinitely
    
    // repeat: 1, // It repeats the animation 1 time so in total it plays the animation 2 times. You can write any number of times you want to repeat the animation.

    
    yoyo: true, // It plays the animation in reverse after the animation is completed like a ball bouncing back from the wall
})





// 03. Timeline in gsap


// What code we wrote above was asynchronou. That means that the code is not in sync with each other. Every animation is independent of each other.

// But if we want our code to be sychronous then we can use timeline in gsap. If we want our animations to run after eachother in a synchronous order, we use timeline.

// We can use timeline to create a sequence of animations.


var tl = gsap.timeline() // This is how we create a timeline in gsap

// Now to use the timeline, we wont write gsap.to or gsap.from, instead we will write tl.to or tl.from. Lets see how

tl.to(".box4",{
 
    x: 1200,
    duration: 2,
    delay: 1,

}) // The next animation would only work after this animation is completed

tl.from(".box5",{

    x: 1200,
    duration: 2,
    
    yoyo: true,
    repeat: -1,
})

// This way we can create set of animations without manually calculating the delays between the animations. 



