$('.owl-carousel').owlCarousel({
    loop:false  ,
    margin:10,
    nav:false,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1 
        },
        770:{
            items:2
        },
        1000:{
            items:3
        },
        
        1200:{
            items:4
        }
    }
})