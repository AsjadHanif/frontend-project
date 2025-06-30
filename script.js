const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Parallax effect
function Parallax() {
    scroll.on("scroll", (args) => {
        const scrollY = args.scroll.y;
        const parallax = document.getElementById("parallax");
        parallax.style.transform = `translateY(${scrollY * 0.1}px)`;
      });
}
Parallax()

function loadinganimation() {
    gsap.from("#page1 h1" , {
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay: 0.2, 
        stagger: 0.2,
    })
    gsap.from("#page1 #parallax-wrapper " , {
        scale: 1.3,
        opacity: 0,
        duration: 0.3,
        delay: 0.7, 
    })
}
loadinganimation()
