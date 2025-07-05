// Locomotive Scroll trigger
function ScrollTriggler() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
ScrollTriggler()

// gsap scroll triggler logo animation
function logoanimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-150%) scale(1.4)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        markers: false,
        start: "top 0",
        end: "top -5%",
        scrub: true,
      }
    })
}
logoanimation()

// gsap scroll triggler nav-item animation
function navitemScrollanimation() {
gsap.to(".item", {
  y: "-150%",
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top 0",
    end: "top -5%",
    scrub: 1,
  }
});
}
navitemScrollanimation()

// Navbar links loading animation
function navLinksloadingAnimation() {
  gsap.utils.toArray(".nav-link").forEach((link, index) => {
    gsap.from(link, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: link,
        scroller: "#main",   // locomotive scroll ka container
        start: "top 90%",
        end: "top 70%",
        scrub: false,
        toggleActions: "play none none reverse",
      }
    });
  });
}
navLinksloadingAnimation();

function handleNavbarScroll() {
  let lastScrollTop = 0;
  const navbar = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Scroll down
      if (scrollTop > lastScrollTop) {
          navbar.style.transform = 'translateY(-100%)';
          navbar.style.transition = 'transform 0.3s ease-in-out';
      }
      // Scroll up
      else {
          navbar.style.transform = 'translateY(0)';
          navbar.style.transition = 'transform 0.3s ease-in-out';
      }
      
      lastScrollTop = scrollTop;
  });
}

handleNavbarScroll();
// Side menu
function SideMenu() {
  const menuBtn = document.querySelector('.ri-menu-line');
  const sideMenu = document.getElementById('sideMenu');

  menuBtn.addEventListener('click', () => {
      sideMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
          sideMenu.classList.remove('active');
      }
  });
}
SideMenu();

//Nav-link active color change
function NavLinkActive() {
  // Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through all nav links
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'active' class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    
    // Add 'active' class to clicked link
    this.classList.add('active');
  });
});
}
NavLinkActive()

// Parallax effect


// Parallax function mein locoScroll use karein
function Parallax() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", (args) => {
        const scrollY = args.scroll.y;
        const parallax = document.getElementById("parallax");
        if (parallax) {
            parallax.style.transform = `translateY(${scrollY * 0.2}px)`;
        }
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

function horizontalDrag() {
  const slider = document.querySelector("#msgs");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});
}
horizontalDrag();

function updateCenterButton() {
  const container = document.querySelector('#msgs');
  const buttons = container.querySelectorAll('button');
  const containerCenter = container.offsetWidth / 2;
  
  buttons.forEach(button => {
      const buttonCenter = button.offsetLeft + button.offsetWidth / 2 - container.scrollLeft;
      const distanceFromCenter = Math.abs(containerCenter - buttonCenter);
      
      if (distanceFromCenter < button.offsetWidth / 2) {
          button.classList.add('center-button');
      } else {
          button.classList.remove('center-button');
      }
  });
}
// Add scroll event listener
document.querySelector('#msgs').addEventListener('scroll', updateCenterButton);
updateCenterButton();