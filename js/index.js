gsap.registerPlugin(ScrollTrigger);

const sec = document.querySelectorAll('.sec');


sec.forEach(section => {
    gsap.fromTo(sec.children, 
        {
           y: '+=100',
           opacity: 0, 
        },
        {
            y:0,
            opacity:1,
            stagger:0.2,
            duration:1,
            ease: 'easeInOut', 

            scrollTrigger:{
                trigger: sec,
                start: 'top 20%'
            }
        }
    )
})