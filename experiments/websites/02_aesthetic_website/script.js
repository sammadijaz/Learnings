var tl = gsap.timeline()

tl.from(".lnav",{
    opacity: 0,
    delay: 0.4,
    y: -10,
    duration: 0.4,
    ease: "expoScale",
    
    
})

tl.from(".text-container .h1, p",{
    x: 200,
    duration: 0.5,
    opacity: 0,
    ease: "expoScale",
    
})

tl.from(".text-container a",{
    opacity: 0,
    y: 100,
    ease: "expoScale",
})

