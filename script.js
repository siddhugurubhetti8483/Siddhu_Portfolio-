gsap.registerPlugin(ScrollTrigger);

// Animate header on scroll
gsap.to("header", {
  scrollTrigger: {
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  backgroundColor: "#1a252f",
  height: "60px",
  ease: "none",
});

// Animate sections on scroll
gsap.utils.toArray("section").forEach((section, i) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});

// Animate skill items
gsap.from(".skill-item", {
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Simple form submission (you would typically send this data to a server)
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  this.reset();
});

// fot progress bar
var listView = document.querySelector(".list-view");
var gridView = document.querySelector(".grid-view");
var progressbarList = document.querySelector(".project-boxes");

listView.addEventListener("click", function () {
  gridView.classList.remove("active");
  listView.classList.add("active");
  progressbarList.classList.remove("jsGridView");
  progressbarList.classList.add("jsListView");
});

gridView.addEventListener("click", function () {
  gridView.classList.add("active");
  listView.classList.remove("active");
  progressbarList.classList.remove("jsListView");
  progressbarList.classList.add("jsGridView");
});
