var clutter = "";
  document.querySelector(".about__us h2").textContent.split("").forEach(function(val){
    clutter += `<span>${val}</span>`
    document.querySelector(".about__us h2").innerHTML = clutter;
    
})

const tl = gsap.timeline()
tl.from(".h__logo",{
    opacity:0,
    y:-20,
    duration:0.8,  
    delay:0.2,
    ease: "elastic.out(1, 0.3)",
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
        // end:"bottom -10%",
        scrub:3,
        pin:true
    }
})

gsap.to(".textScroll",{
    backgroundColor:"#f7f9fb",
    scrollTrigger:{ 
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin:true
    }
})

// gsap.from(".videoScroll video",{
//     // transform:"translateY(-105%)",
//     width:"50%",  
//     scrollTrigger:{
// trigger:".videoScroll",
// start:"top 0",
// scrub:5,
// pin:true,
//     }
    
// })

gsap.to(".about__us h2 span",{
    color:"#193175",
    stagger:4,
    scrollTrigger:{
        trigger:".about__us",
        start:"top 62%",
        end:"top 50%",
        scrub:5,
        // markers:true,
    },
})
 
