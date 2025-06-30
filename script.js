// Parallax effect
// function Parallax() {
//     window.addEventListener("scroll", () => {
//         const scrollY = window.scrollY;
//         const parallax = document.getElementById("parallax");
    
//         // Slight movement — adjust 0.2 for more/less
//         parallax.style.transform = `translateY(${scrollY * 0.2}px)`;
//       });
    
    
// }
// Parallax()

function loadinganimation() {
    gsap.from("#page1 h1" , {
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay: 0.2, 
        stagger: 0.2,
    })
    gsap.from("#parallax" , {
        scale: 1.5,
        opacity: 0,
        duration: 0.3,
        delay: 0.8, 
    })
}
loadinganimation()
