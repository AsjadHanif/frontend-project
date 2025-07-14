// Locomotive Scroll trigger
// ==========================================
// LOCOMOTIVE SCROLL INTEGRATION WITH GSAP SCROLLTRIGGER
// ==========================================
// This function initializes and configures the integration between Locomotive Scroll 
// and GSAP ScrollTrigger for smooth scrolling animations
function ScrollTriggler() {
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Locomotive Scroll for smooth scrolling
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  
  // Update ScrollTrigger whenever Locomotive Scroll updates
  locoScroll.on("scroll", ScrollTrigger.update);

  // Set up ScrollTrigger proxy for Locomotive Scroll
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // Handle mobile devices differently
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // Refresh ScrollTrigger and update LocomotiveScroll when window updates
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // Refresh ScrollTrigger after setup
  ScrollTrigger.refresh();
}

// Initialize ScrollTrigger integration
ScrollTriggler()

// ==========================================
// LOGO ANIMATION ON SCROLL
// ==========================================
// Animates the logo when user scrolls down the page
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

// ==========================================
// NAVIGATION ITEMS SCROLL ANIMATION
// ==========================================
// Fades out navigation items when scrolling down
function navitemScrollanimation() {
  gsap.to(".item", {
    y: "-150%",
    opacity: 0,
    stagger: 0.05,  // Creates a sequential animation effect
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

function initReviewsSystem() {
      const outer = document.getElementById('msgs'); // fix here
      const reviews = document.querySelectorAll('.review');
  
      function updateActiveReviewById(id) {
          reviews.forEach(review => {
              review.classList.remove('active');
              if (review.getAttribute('data-review') === id) {
                  review.classList.add('active');
              }
          });
      }
  
      function updateReviewOnScroll() {
          const buttons = document.querySelectorAll('.msg-track button');
          const containerCenter = outer.offsetWidth / 2;
          let closestButton = null;
          let minDistance = Infinity;
          let closestId = null;
  
          buttons.forEach((button) => {
              const buttonCenter = button.offsetLeft + button.offsetWidth / 2 - outer.scrollLeft;
              const distance = Math.abs(containerCenter - buttonCenter);
              if (distance < minDistance) {
                  minDistance = distance;
                  closestButton = button;
                  closestId = button.getAttribute('data-review');
              }
          });
  
          buttons.forEach(btn => btn.classList.remove('center-button'));
          if (closestButton) closestButton.classList.add('center-button');
  
          if (closestId) updateActiveReviewById(closestId);
      }
  
      document.querySelectorAll('.msg-track button').forEach(button => {
          button.addEventListener('click', () => {
              updateActiveReviewById(button.getAttribute('data-review'));
          });
      });
  
      outer.addEventListener('scroll', updateReviewOnScroll);
      updateReviewOnScroll(); // ensure first load shows review
  }
// Initialize reviews system
initReviewsSystem();


function msgsbtnloop() {
  const msgs = document.getElementById("msgs");
const track = msgs.querySelector(".msg-track");

// Clone original content
let originalButtons = track.innerHTML;
track.innerHTML = originalButtons + originalButtons + originalButtons;

// Set scroll to middle set
let singleWidth = track.scrollWidth / 3;
msgs.scrollLeft = singleWidth;

// Handle infinite loop
msgs.addEventListener("scroll", () => {
  if (msgs.scrollLeft <= singleWidth * 0.1) {
    // Scrolling too far left → jump ahead
    msgs.scrollLeft += singleWidth;
  } else if (msgs.scrollLeft >= singleWidth * 1.9) {
    // Scrolling too far right → jump back
    msgs.scrollLeft -= singleWidth;
  }
});

}
msgsbtnloop();

function imagegrid() {
  const imagesDiv = document.querySelector("#result .images");

const weightedRand = (spec) => {
  let sum = 0, r = Math.random();
  for (let i in spec) {
    sum += spec[i];
    if (r <= sum) return i;
  }
};

const imageList = [
  'assests/images/1.jpg',
  'assests/images/2.jpg',
  'assests/images/3.jpg',
  'assests/images/4.jpg',
  'assests/images/5.jpg',
  'assests/images/6.jpg',
  'assests/images/7.jpg',
  'assests/images/8.jpg',
  'assests/images/9.jpg',
  'assests/images/10.jpg',
  'assests/images/11.jpg',
];

// Only take the first 10 images, no repetition
for (let i = 0; i < 11; i++) {
  const span = weightedRand({ 1: 0.6, 2: 0.3, 3: 0.1 });
  const imageUrl = imageList[i]; // no random index

  const div = document.createElement("div");
  div.className = `card span-${span}`;
  div.style.backgroundImage = `url(${imageUrl})`;

  imagesDiv.appendChild(div);
}

}
imagegrid();

//Cirle-animation
function Circleanimation() {
  
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('circleanimation'),
    path: 'orgcircle.json',
    render: 'svg',
    loop: true,
    autoplay: true,
  });
}
Circleanimation();

function removeCircleanimation() {
  var animation = document.getElementById('circleanimation');
  var input = document.getElementById('input');
  input.addEventListener('click', function() {
    animation.style.display = 'none';
  });
}
removeCircleanimation();

// Remove placeholder on input click
function removeEmailPlaceholder() {
  const input = document.getElementById('input');
  input.addEventListener('click', function () {
    input.placeholder = '';
  });
}
removeEmailPlaceholder();

function changeEmailicon() {
  const icon1 = document.getElementById('icon1');
  const icon2 = document.getElementById('icon2');
  const input = document.getElementById('input');
  input.addEventListener('click', function () {
    icon1.style.display = 'none';
    icon2.style.display = 'block';
  });
}
changeEmailicon();