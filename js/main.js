// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/* ===== HERO ANIMATIONS ===== */

// Hero fade-in on load
gsap.from(".hero-content", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out"
});

// Runner scroll animation (moves left → right)
gsap.to(".runner", {
  x: () => window.innerWidth * 0.6, // move about 60% across the screen
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Hero background transition while scrolling
gsap.to(".hero", {
  background:
    "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80') center/cover no-repeat",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

/* ===== ABOUT SECTION ===== */
gsap.utils.toArray(".about-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 80,
    duration: 0.8,
    delay: i * 0.2,
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});

/* ===== UPCOMING RUN SECTION ===== */
const path = document.querySelector("#run-path path");
if (path) {
  const length = path.getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#upcoming-run",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
}

/* ===== GALLERY SECTION ===== */
gsap.from(".gallery-item", {
  opacity: 0,
  scale: 0.95,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".gallery-grid",
    start: "top 80%"
  }
});

/* ===== JOIN SECTION ===== */
gsap.to(".join-section", {
  backgroundColor: "#48BB78",
  color: "#fff",
  scrollTrigger: {
    trigger: ".join-section",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});
