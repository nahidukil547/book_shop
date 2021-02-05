gsap.timeline()
    .from(".section__menu",{
        y:-200,
        opacity:0,
        duration:1,
        
    })
    .from(".nav__brand ,.nav-item ,.navigation__items",{
        y:-50,
        scale:2,
        opacity:0,
        duration:1.5,      
    })
    .from(".section__manu__tow ",{
        y:-100,
        x:200,
        opacity:0,
        scale:2,
        duration:2,

    })
    .from(".section__manu__text",{
        x:-300,
        duration:1,
        opacity:0,
    })
    .from(" .last__text",{
        x:300,
        duration:1.5,
        opacity:0,
    })