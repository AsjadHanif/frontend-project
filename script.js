//Smooth scrolling effect
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Parallax effect
function Parallax() {
    scroll.on("scroll", (args) => {
        const scrollY = args.scroll.y;
        const parallax = document.getElementById("parallax");
        parallax.style.transform = `translateY(${scrollY * 0.2}px)`;
      });
}
Parallax()

//Loading animation on website
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

//Cursor animation hovering on products
function moreproducts() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
        left: dets.x,
        top: dets.y,
    })
})

//Prd3
document.querySelector('.prd3').addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        backgroundColor: "#fff600",
        scale: 1,
        opacity: 0.2,
      });
    });
  
document.querySelector('.prd3').addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        scale: 0,
        opacity: 0,
      });
    });

//Prd4
document.querySelector('.prd4').addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        backgroundColor: "#4DFF45",
        scale: 1,
        opacity: 0.2,
      });
    });
  
document.querySelector('.prd4').addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        scale: 0,
        opacity: 0,
      });
    });

//Prd5
document.querySelector('.prd5').addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        backgroundColor: "#FFBB45",
        scale: 1,
        opacity: 0.2,
      });
    });
  
document.querySelector('.prd5').addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        scale: 0,
        opacity: 0,
      });
    });
  
//Prd6
document.querySelector('.prd6').addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        backgroundColor: "#45ADFF",
        scale: 1,
        opacity: 0.2,
      });
    });
  
document.querySelector('.prd6').addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        scale: 0,
        opacity: 0,
      });
});

}
moreproducts()
  