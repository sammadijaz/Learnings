// 02. ScrollTrigger

// ScrollTrigger is a plugin that allows you to trigger animations when elements are scrolled into view. It is a part of the GSAP library.

// To use ScrollTrigger, you need to include the GSAP library in your project. You can include the library from CDN on GSAP's website.


gsap.from(".page1 .box",{
    scale: 0,
    duration: 1,
    rotate: 360,
    delay: 0.5,
})


gsap.from(".page2 .box",{
    scale: 0,
    duration: 1,
    rotate: 360,
    delay: 0.5,

    // How to use ScrollTrigger:

    // Animation would be triggered when the element is scrolled into view
    
    // Basic way to use ScrollTrigger:
     
    scrollTrigger: ".page2 .box", 
    
    // This is how we use scrollTrigger without going into much details

    // But we can also define more options for ScrollTrigger

    
})