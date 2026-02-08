// ==========================================
// CRITTER CANDY - INTERACTIVE BEHAVIORS
// ==========================================

// Quiz State Management
let quizState = {
  currentStep: 1,
  answers: {
    trait: null,
    habitat: null
  }
};

// Critter Database
const critters = {
  'sweet-woodland': {
    emoji: '🐻',
    name: 'Maple Bear',
    flavor: 'Rich maple caramel with a hint of vanilla',
    description: 'Like you, the Maple Bear is warm, comforting, and brings sweetness to everyone around.'
  },
  'sweet-ocean': {
    emoji: '🐬',
    name: 'Blue Dolphin',
    flavor: 'Blue raspberry with sea salt',
    description: 'Playful and refreshing, you bring joy and lightness wherever you go, just like the Blue Dolphin.'
  },
  'sweet-safari': {
    emoji: '🦁',
    name: 'Sunny Lion',
    flavor: 'Mango honey blend',
    description: 'Bold and bright like the Sunny Lion, you radiate confidence and natural leadership.'
  },
  'sweet-tropical': {
    emoji: '🦜',
    name: 'Paradise Parrot',
    flavor: 'Pineapple coconut fusion',
    description: 'Vibrant and tropical, you bring exotic flair and adventure to every moment.'
  },
  'sour-woodland': {
    emoji: '🦊',
    name: 'Berry Fox',
    flavor: 'Tangy wild berry burst',
    description: 'Clever and lively like the Berry Fox, you keep things interesting with your zesty personality.'
  },
  'sour-ocean': {
    emoji: '🐠',
    name: 'Citrus Fish',
    flavor: 'Lemon lime sparkle',
    description: 'Refreshing and energizing, you dive into life with enthusiasm and bright energy.'
  },
  'sour-safari': {
    emoji: '🦒',
    name: 'Ginger Giraffe',
    flavor: 'Ginger citrus zing',
    description: 'Standing tall and unique, you add a distinctive tang to any gathering.'
  },
  'sour-tropical': {
    emoji: '🦩',
    name: 'Pink Flamingo',
    flavor: 'Passion fruit punch',
    description: 'Bold and unapologetically yourself, you stand out with tropical confidence.'
  },
  'rich-woodland': {
    emoji: '🐿️',
    name: 'Chocolate Squirrel',
    flavor: 'Dark chocolate hazelnut',
    description: 'Thoughtful and grounded like the Chocolate Squirrel, you appreciate life\'s rich moments.'
  },
  'rich-ocean': {
    emoji: '🐙',
    name: 'Salted Caramel Octopus',
    flavor: 'Salted caramel depths',
    description: 'Complex and intriguing, you have many layers that make you fascinating.'
  },
  'rich-safari': {
    emoji: '🐘',
    name: 'Elephant Truffle',
    flavor: 'Coffee cocoa blend',
    description: 'Wise and substantial, you bring depth and richness to every experience.'
  },
  'rich-tropical': {
    emoji: '🐒',
    name: 'Mocha Monkey',
    flavor: 'Banana chocolate swirl',
    description: 'Fun-loving yet sophisticated, you blend playfulness with indulgence perfectly.'
  }
};

// Initialize Quiz
document.addEventListener('DOMContentLoaded', () => {
  initializeQuiz();
  initializeCartCounter();
  initializeSmoothScroll();
});

// Quiz Initialization
function initializeQuiz() {
  const quizOptions = document.querySelectorAll('.quiz-option');

  quizOptions.forEach(option => {
    option.addEventListener('click', handleQuizAnswer);
  });

  // Reset quiz button
  const resetButton = document.querySelector('.result-actions .ghost');
  if (resetButton) {
    resetButton.addEventListener('click', resetQuiz);
  }
}

// Handle Quiz Answers
function handleQuizAnswer(event) {
  const button = event.currentTarget;
  const step = button.closest('.quiz-step');
  const stepNumber = parseInt(step.dataset.step);

  // Store answer
  if (stepNumber === 1) {
    quizState.answers.trait = button.dataset.trait;
  } else if (stepNumber === 2) {
    quizState.answers.habitat = button.dataset.habitat;
  }

  // Animate button click
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = '';
  }, 150);

  // Move to next step or show results
  setTimeout(() => {
    if (stepNumber < 2) {
      showNextStep(stepNumber + 1);
    } else {
      showQuizResults();
    }
  }, 300);
}

// Show Next Quiz Step
function showNextStep(stepNumber) {
  const steps = document.querySelectorAll('.quiz-step');
  steps.forEach(step => {
    step.classList.remove('active');
  });

  const nextStep = document.querySelector(`[data-step="${stepNumber}"]`);
  if (nextStep) {
    nextStep.classList.add('active');
  }

  quizState.currentStep = stepNumber;
}

// Show Quiz Results
function showQuizResults() {
  const { trait, habitat } = quizState.answers;
  const critterKey = `${trait}-${habitat}`;
  const matchedCritter = critters[critterKey];

  if (!matchedCritter) {
    console.error('No matching critter found');
    return;
  }

  // Hide quiz steps
  const steps = document.querySelectorAll('.quiz-step');
  steps.forEach(step => step.classList.remove('active'));

  // Populate and show results
  const resultsSection = document.querySelector('.quiz-results');
  const matchedCreatureDiv = resultsSection.querySelector('.matched-creature');

  matchedCreatureDiv.innerHTML = `
    <span class="result-emoji">${matchedCritter.emoji}</span>
    <h4 class="result-name">${matchedCritter.name}</h4>
    <p class="result-flavor">${matchedCritter.flavor}</p>
    <p class="result-description">${matchedCritter.description}</p>
  `;

  resultsSection.classList.remove('hidden');

  // Add confetti effect (simple implementation)
  createConfetti();
}

// Reset Quiz
function resetQuiz() {
  quizState = {
    currentStep: 1,
    answers: {
      trait: null,
      habitat: null
    }
  };

  const resultsSection = document.querySelector('.quiz-results');
  resultsSection.classList.add('hidden');

  showNextStep(1);
}

// Simple Confetti Effect
function createConfetti() {
  const colors = ['#FF7F6B', '#FFE66D', '#87CEEB', '#B8E6D5', '#E5DEFF'];
  const container = document.querySelector('.quiz-results');

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '0';
    confetti.style.opacity = '1';
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.transition = 'all 2s ease-out';

    container.style.position = 'relative';
    container.appendChild(confetti);

    // Animate
    setTimeout(() => {
      confetti.style.top = '100%';
      confetti.style.opacity = '0';
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    }, 10);

    // Remove after animation
    setTimeout(() => {
      confetti.remove();
    }, 2100);
  }
}

// Cart Counter
function initializeCartCounter() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCountElement = document.querySelector('.cart-count');
  let cartCount = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      cartCount++;
      cartCountElement.textContent = cartCount;

      // Animate button
      button.innerHTML = '<i class="ti ti-check"></i> Added!';
      button.style.background = '#2D5F3F';
      button.style.color = 'white';

      setTimeout(() => {
        button.innerHTML = '<i class="ti ti-shopping-bag"></i> Add to Bag';
        button.style.background = '';
        button.style.color = '';
      }, 2000);

      // Animate cart icon
      cartCountElement.style.transform = 'scale(1.5)';
      setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
      }, 300);
    });
  });

  // Add to cart from quiz results
  const resultAddButton = document.querySelector('.result-actions .primary');
  if (resultAddButton) {
    resultAddButton.addEventListener('click', () => {
      cartCount++;
      cartCountElement.textContent = cartCount;

      resultAddButton.innerHTML = '<i class="ti ti-check"></i> Added to Cart!';
      setTimeout(() => {
        resultAddButton.innerHTML = 'Add to Cart';
      }, 2000);
    });
  }
}

// Smooth Scroll for Navigation
function initializeSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Wishlist Toggle
document.addEventListener('click', (e) => {
  if (e.target.closest('.wishlist-btn')) {
    const button = e.target.closest('.wishlist-btn');
    const icon = button.querySelector('i');

    if (icon.classList.contains('ti-heart')) {
      icon.classList.remove('ti-heart');
      icon.classList.add('ti-heart-filled');
      button.style.background = 'var(--coral)';
      button.style.color = 'white';
    } else {
      icon.classList.remove('ti-heart-filled');
      icon.classList.add('ti-heart');
      button.style.background = '';
      button.style.color = '';
    }
  }
});

// Habitat Card Hover Effects
const habitatCards = document.querySelectorAll('.habitat-card');
habitatCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// CTA Button Click Handlers
document.querySelector('.hero-copy .primary')?.addEventListener('click', () => {
  const quizSection = document.querySelector('#quiz');
  quizSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('.hero-copy .ghost')?.addEventListener('click', () => {
  alert('Gift Builder coming soon! 🎁');
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;

    if (email) {
      const button = newsletterForm.querySelector('button');
      button.innerHTML = '<i class="ti ti-check"></i> Subscribed!';
      button.style.background = 'var(--forest-green)';

      setTimeout(() => {
        button.innerHTML = '<i class="ti ti-send"></i> Subscribe';
        button.style.background = '';
        newsletterForm.reset();
      }, 3000);
    }
  });
}

// Scroll-based Nav Background
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.top-nav');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    nav.style.background = 'rgba(255, 248, 240, 0.98)';
    nav.style.boxShadow = '0 2px 12px rgba(93, 61, 46, 0.08)';
  } else {
    nav.style.background = 'rgba(255, 248, 240, 0.95)';
    nav.style.boxShadow = 'none';
  }

  lastScroll = scrollPosition;
});
