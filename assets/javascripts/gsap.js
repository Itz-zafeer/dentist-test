const tl = gsap.timeline()
tl.from(".h__logo",{
    opacity:0,
    duration:0.8,  
    delay:0.2,
})
tl.from(".links li",{
    opacity:0,   
    stagger:0.2,
})
tl.from(".h__cta",{
    opacity:0,
    x:30, 
    duration:1,
    ease: "elastic.out(1, 0.3)",

})
tl.from(".h__content",{
    opacity:0,
    scale:0, 
    x:-300,
    
})
tl.from(".lottie",{
    opacity:0,
    scale:0,  
    
})
gsap.to(".textScroll h1",{
    transform:"translateX(-190%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:".textScroll",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin:true
    }
})
gsap.to(".textScroll",{
    backgroundColor:"#458FF6",
    scrollTrigger:{ 
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin:true
    }
})
 
