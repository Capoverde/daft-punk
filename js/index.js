gsap.registerPlugin(ScrollTrigger);

const sec = document.querySelectorAll('.sec > .container');
const masterImg = document.querySelector('.master-img');
const h1 = document.querySelector('h1')


// header animatnion

gsap.fromTo(h1,
    {

        opacity: 0, 
     },
     {
         opacity:1,
         duration:2,
         ease: 'easeInOut', 
     })

// text in section animation

sec.forEach(section => {
    gsap.fromTo(section.children, 
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
                start: 'top 40%'
            }
        }
    )
})

// master image animation

gsap.fromTo(masterImg, 
    {
        opacity:0
    },
    {
        opacity:1,
        duration:4,
        ease: 'easeInOut'
    })