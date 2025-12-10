// small interactions & entrance animation

// set current year
document.getElementById("year").textContent = new Date().getFullYear();

// mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
});

function page1Animation() {
  let tl = gsap.timeline();
  tl.from("header a, header button", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
  });
  /*Bring .btn-primary immediately after first animation :
Use "<" (means "start at the same time as previous")
or
use ">" (means "start right after previous").*/
  tl.from(
    ".btn-primary",
    {
      y: 300,
      opacity: 0,
      duration: 0.4,
    },
    ">"
  );
  tl.from(
    ".ghost-link",
    {
      y: 300,
      opacity: 0,
      duration: 0.4,
    },
    0.7
  );

  tl.from(".hero-title", {
    x: -300,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  });

  tl.from(".hero-sub", {
    x: -300,
    opacity: 0,
    duration: 0.4,
    stagger: 0.3,
  });
  tl.from(".brand-strip span", {
    scale: 0,
    opacity: 0,
    duration: 0.4,
    ease: "back.out(1.7)",
    stagger: 0.1,
  });
  tl.from(
    ".hero-right",
    {
      x: 300,
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
      stagger: 0.1,
    },
    "=-2.5"
  );
}

function page2Animation() {
    gsap.from(".card", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
  ease: "power4.out"
});

// CTA strip animation (on scroll)
gsap.from(".cta-strip h4, .cta-strip p, .cta-strip button", {
  scrollTrigger: {
    trigger: ".cta-strip",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  ease: "power2.out"
});
// Footer fade-in (optional)
gsap.from(".site-footer", {
  scrollTrigger: {
    trigger: ".site-footer",
    start: "top 95%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  duration: 0.6,
  ease: "power1.out"
});


}
page1Animation()
page2Animation()