let tl = gsap.timeline();

tl.from("h2",{
    x: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5, 
    color: "#1bd124",
})

gsap.from("li",{
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.6 ,
    color: "#1bd124",
    stagger: 0.3,
})