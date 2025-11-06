// ==========================================
// THE BANANA REPUBLIC - INTERACTIVE BEHAVIORS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeReservationForm();
  initializeNewsletterForm();
  initializeScrollEffects();
  initializeVideoPlaceholders();
  initializeMenuScroll();
});

// Navigation
function initializeNavigation() {
  const nav = document.querySelector('.top-nav');
  const navCTA = document.querySelector('.nav-cta button');
  const reserveSection = document.querySelector('#reserve');

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Nav CTA button
  if (navCTA && reserveSection) {
    navCTA.addEventListener('click', () => {
      reserveSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Hero CTAs
  const heroPrimaryCTA = document.querySelector('.hero-content .primary');
  const heroSecondaryCTA = document.querySelector('.hero-content .secondary');

  if (heroPrimaryCTA && reserveSection) {
    heroPrimaryCTA.addEventListener('click', () => {
      reserveSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (heroSecondaryCTA) {
    heroSecondaryCTA.addEventListener('click', () => {
      const menuSection = document.querySelector('#menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Scroll-based nav background
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      nav.style.background = 'rgba(255, 248, 220, 0.98)';
      nav.style.boxShadow = '0 2px 12px rgba(44, 44, 44, 0.08)';
    } else {
      nav.style.background = 'rgba(255, 248, 220, 0.95)';
      nav.style.boxShadow = 'none';
    }

    lastScroll = scrollPosition;
  });
}

// Reservation Form
function initializeReservationForm() {
  const form = document.querySelector('.reservation-form');

  if (!form) return;

  // Set minimum date to today
  const dateInput = form.querySelector('input[type="date"]');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const partySize = form.querySelector('select[required]').value;
    const date = dateInput?.value;
    const time = form.querySelectorAll('select[required]')[1]?.value;
    const specialRequests = form.querySelector('textarea')?.value;

    if (!partySize || !date || !time) {
      alert('Please fill in all required fields.');
      return;
    }

    // Format date for display
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Show success message
    const button = form.querySelector('button[type="submit"]');
    const originalHTML = button.innerHTML;

    button.innerHTML = '<i class="ti ti-check"></i> Reservation Confirmed!';
    button.style.background = 'var(--plantain-green)';
    button.style.color = 'white';

    // Show confirmation alert
    setTimeout(() => {
      alert(
        `Reservation Confirmed!\n\n` +
        `Date: ${formattedDate}\n` +
        `Time: ${time}\n` +
        `Party Size: ${partySize} ${parseInt(partySize) === 1 ? 'Guest' : 'Guests'}\n\n` +
        `We look forward to welcoming you to The Banana Republic!\n` +
        `A confirmation email will be sent shortly.`
      );

      // Reset form
      form.reset();
      button.innerHTML = originalHTML;
      button.style.background = '';
      button.style.color = '';
    }, 500);
  });

  // Party size change handler
  const partySizeSelect = form.querySelector('select[required]');
  if (partySizeSelect) {
    partySizeSelect.addEventListener('change', (e) => {
      if (e.target.value === '7+') {
        alert('For parties of 7 or more, please call us at (555) BANANAS to make your reservation.');
      }
    });
  }
}

// Newsletter Form
function initializeNewsletterForm() {
  const form = document.querySelector('.newsletter-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value;

    if (!email) return;

    const button = form.querySelector('button');
    const originalHTML = button.innerHTML;

    button.innerHTML = '<i class="ti ti-check"></i> Subscribed!';
    button.style.background = 'white';
    button.style.color = 'var(--plantain-green)';

    setTimeout(() => {
      alert(`Thanks for joining the bunch! 🍌\n\nWe'll send banana-inspired recipes and exclusive updates to ${email}`);
      form.reset();
      button.innerHTML = originalHTML;
      button.style.background = '';
      button.style.color = '';
    }, 500);
  });
}

// Scroll Effects
function initializeScrollEffects() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe sections for fade-in effect
  const sections = document.querySelectorAll(
    '.concept-section, .menu-spectrum, .featured-dishes, ' +
    '.farm-to-fork, .chefs-story, .reservation-section, ' +
    '.press-section, .location-section'
  );

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
  });
}

// Video Placeholders
function initializeVideoPlaceholders() {
  const videoPlaceholders = document.querySelectorAll(
    '.video-placeholder, .video-placeholder-large'
  );

  videoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', () => {
      // In a real implementation, this would open a video player
      alert('Video player would open here.\n\nIn a production version, this would play our chef\'s story video or a tour of our banana farms.');
    });
  });
}

// Menu Scroll
function initializeMenuScroll() {
  const spectrumSlider = document.querySelector('.spectrum-slider');

  if (!spectrumSlider) return;

  // Add arrow navigation for desktop
  let isDown = false;
  let startX;
  let scrollLeft;

  spectrumSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    spectrumSlider.style.cursor = 'grabbing';
    startX = e.pageX - spectrumSlider.offsetLeft;
    scrollLeft = spectrumSlider.scrollLeft;
  });

  spectrumSlider.addEventListener('mouseleave', () => {
    isDown = false;
    spectrumSlider.style.cursor = 'grab';
  });

  spectrumSlider.addEventListener('mouseup', () => {
    isDown = false;
    spectrumSlider.style.cursor = 'grab';
  });

  spectrumSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - spectrumSlider.offsetLeft;
    const walk = (x - startX) * 2;
    spectrumSlider.scrollLeft = scrollLeft - walk;
  });

  // Set initial cursor
  spectrumSlider.style.cursor = 'grab';

  // Download menu button
  const downloadButton = document.querySelector('.menu-cta button');
  if (downloadButton) {
    downloadButton.addEventListener('click', () => {
      alert('Full menu PDF would download here.\n\nIn production, this would download our complete menu with all dishes, ingredients, and allergen information.');
    });
  }
}

// Dish Card Interactions
const dishCards = document.querySelectorAll('.spectrum-dish, .dish-card');
dishCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Sustainability Badge Hover Effects
const badges = document.querySelectorAll('.badge-card');
badges.forEach(badge => {
  badge.addEventListener('mouseenter', () => {
    badge.style.transform = 'translateY(-4px) scale(1.05)';
  });

  badge.addEventListener('mouseleave', () => {
    badge.style.transform = '';
  });
});

// Location Get Directions Button
const directionsButton = document.querySelector('.location-info button');
if (directionsButton) {
  directionsButton.addEventListener('click', () => {
    // In real implementation, would open Google Maps
    alert('Opening directions in Google Maps...\n\n123 Tropical Avenue\nMiami, FL 33139');
  });
}

// Info Cards in Reservation Section
const infoCards = document.querySelectorAll('.info-card');
infoCards.forEach((card, index) => {
  // Stagger animation on load
  setTimeout(() => {
    card.style.animation = 'fadeInUp 0.6s ease forwards';
  }, index * 100);
});

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Chef's Story "Meet the Team" Button
const meetTeamButton = document.querySelector('.video-content .secondary');
if (meetTeamButton) {
  meetTeamButton.addEventListener('click', () => {
    alert('Meet Our Team\n\nChef Maria Santos - Founder & Executive Chef\nChef Andre Baptiste - Sous Chef\nSofia Rodriguez - Pastry Chef\nMarcus Chen - Beverage Director\n\nOur team brings together expertise from 15 countries and a shared passion for sustainable, innovative cuisine.');
  });
}

// Press Quote Hover Effects
const pressQuotes = document.querySelectorAll('.press-quote');
pressQuotes.forEach(quote => {
  quote.addEventListener('mouseenter', () => {
    quote.style.transform = 'translateY(-4px)';
    quote.style.boxShadow = 'var(--shadow-md)';
  });

  quote.addEventListener('mouseleave', () => {
    quote.style.transform = '';
    quote.style.boxShadow = '';
  });
});

// Award Badge Animations
const awardBadges = document.querySelectorAll('.award-badge');
awardBadges.forEach((badge, index) => {
  badge.style.opacity = '0';
  badge.style.transform = 'scale(0.8)';

  setTimeout(() => {
    badge.style.transition = 'all 0.5s ease';
    badge.style.opacity = '1';
    badge.style.transform = 'scale(1)';
  }, 2000 + (index * 150));
});

// Concept Image Rotation Control
const conceptImage = document.querySelector('.image-placeholder');
if (conceptImage) {
  let isPaused = false;

  conceptImage.addEventListener('click', () => {
    isPaused = !isPaused;
    conceptImage.style.animationPlayState = isPaused ? 'paused' : 'running';
  });
}

// Smooth scroll to top on logo click
const brand = document.querySelector('.brand');
if (brand) {
  brand.addEventListener('click', (e) => {
    if (brand.getAttribute('href') === '#' || brand.getAttribute('href') === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// Easter egg: Konami code for special banana message
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join('') === konamiSequence.join('')) {
    document.body.style.transform = 'rotate(360deg)';
    document.body.style.transition = 'transform 2s ease';

    setTimeout(() => {
      alert('🍌 SECRET BANANA POWER ACTIVATED! 🍌\n\nYou\'ve unlocked a 15% discount on your next reservation!\nUse code: BANANAFAN at checkout.');
      document.body.style.transform = '';
    }, 2000);
  }
});

// Log initialization
console.log('🍌 The Banana Republic website initialized successfully!');
console.log('💡 Try our interactive features: reservation form, video players, and menu scrolling!');
