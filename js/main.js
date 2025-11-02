gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from('.hero-content', {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: 'power3.out'
});

// About cards animation
gsap.utils.toArray('.about-card').forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 80,
    duration: 0.8,
    delay: i * 0.2,
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });
});

// Run path animation
const path = document.querySelector('#run-path path');
if (path) {
  const length = path.getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#upcoming-run',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
}

// Gallery animation
gsap.from('.gallery-item', {
  opacity: 0,
  scale: 0.95,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.gallery-grid',
    start: 'top 80%'
  }
});

// Join section color change
gsap.to('.join-section', {
  backgroundColor: '#48BB78',
  color: '#fff',
  scrollTrigger: {
    trigger: '.join-section',
    start: 'top center',
    end: 'bottom center',
    scrub: true
  }
});
