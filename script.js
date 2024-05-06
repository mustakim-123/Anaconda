var menubutton = document.querySelector('.mustakim');
var midnav = document.querySelector('.cent-nav');

menubutton.addEventListener("click", function() {
    midnav.classList.toggle('down');
})





var tl = gsap.timeline();

tl.from('.left-nav',{
    y: -50,
    opacity: 0,
    duration: 0.5,
    delay:1,
})

tl.from('.center',{
    y:-50,
    opacity:0,
    duration:1,
    delay:0.1
})

tl.from('.cent-nav',{
    y:-50,
    opacity:0,
    duration:0.5,
    delay:0.3,
    stagger:0.3
})


tl.from('.signin',{
    y:-50,
    opacity:0,
    duration:0.5,
    delay:0.3,
    stagger:0.3
})


tl.from('.contact',{
    y:-50,
    opacity:0,
    duration:0.5,
    delay:0.3,
    stagger:0.3
})


tl.from('.left1',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.left1',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})


tl.from('.center1',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.center1',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})

tl.from('.right1',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.right1',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})


tl.from('.left3',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.left3',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})

tl.from('.right3',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.right3',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})



tl.from('.left4',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.left4',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})

tl.from('.right4',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.right4',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})



tl.from('.left5',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.left5',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})

tl.from('.right5',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.right5',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})



tl.from('.left6',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.left6',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})

tl.from('.right6',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.right6',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})





    
    tl.from('.card1',{
        x:-300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.card1',
            scroll:'.body',
            scrub:1,
            start:"60% 100%",
            end:"60% 90%"
    
        }
     })
     tl.from('.card2',{
        y:300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.card2',
            scroll:'.body',
            scrub:1,
            start:"50% 100%",
            end:"50% 90%"
    
        }
     })
     tl.from('.card3',{
        x:300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.card3',
            scroll:'.body',
            scrub:1,
            start:"60% 100%",
            end:"60% 90%"
    
        }
     })
     
    
     tl.from('.card21',{
        x:-300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.card21',
            scroll:'.body',
            scrub:1,
            start:"60% 100%",
            end:"60% 90%"
    
        }
     })
     tl.from('.card22',{
        y:-300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.card22',
            scroll:'.body',
            scrub:1,
            start:"50% 50%",
            end:"50% 30%"
    
        }
     })
     tl.from('.card23',{
        x:300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.card23',
            scroll:'.body',
            scrub:1,
            start:"60% 100%",
            end:"60% 90%"
    
        }
     })
     tl.from('.twoleft',{
        x:-300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.twoleft',
            scroll:'.body',
            scrub:1,
            start:"0 100%",
            end:"0 70%"
    
        }
     })
     tl.from('.tworight',{
        x:300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.tworight',
            scroll:'.body',
            scrub:1,
            start:"0 100%",
            end:"0 70%"
    
        }
     })
     
     tl.from('.icon',{
        y:300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.icon',
            scroll:'.body',
            scrub:1,
            end:"0 70%"
        }
     })
     tl.from('.right-foot-one',{
        y:300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.right-foot-one',
            scroll:'.body',
            scrub:1,
            end:"0 70%"
        }
     })
     tl.from('.right-foot-two',{
        y:300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.right-foot-two',
            scroll:'.body',
            scrub:1,
            end:"0 70%"
            
    
        }
     })
     tl.from('.right-foot-three',{
        y:300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.right-foot-three',
            scroll:'.body',
            scrub:1,
            end:"0 70%"
        }
     })
     tl.from('.right-foot-four',{
        y:300,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:'.right-foot-four',
            scroll:'.body',
            scrub:1,
            end:"0 70%"
        }
     })

