/**
 * MiLife Medicity - Modern Landing Page Logic
 * Features:
 * - Mobile navigation menu toggle
 * - Smooth scroll & active link tracking (ScrollSpy)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuBtn.classList.toggle('open');
    });

    // Close menu when clicking navigation links
    navLinks.querySelectorAll('.nav-anchor').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.classList.remove('open');
      });
    });
  }

  // Active navigation highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-anchor');

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        const targetId = id === 'inclusions' ? 'package' : id;
        navAnchors.forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === `#${targetId}`) {
            a.classList.add('active');
          }
        });
      }
    });
  });

  // Senior Developer Interactive Button Physics: Spotlight & Ripple
  const consultationButtons = document.querySelectorAll('.btn-primary-gold, .btn-consultation, .btn-outline-wa, .doctor-consult-btn');
  
  consultationButtons.forEach(btn => {
    // Dynamic specular spotlight following cursor
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--mouse-x', `${x}px`);
      btn.style.setProperty('--mouse-y', `${y}px`);
    }, { passive: true });

    // Tactile click ripple effect
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple-wave';
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      btn.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    });
  });
});
