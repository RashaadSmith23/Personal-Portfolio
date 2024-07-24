document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Validate form values
  if (name === '' || email === '' || subject === '' || message === '') {
      alert('Please fill out all fields.');
      return;
  }

  // Simulate form submission
  alert(`Form submitted successfully!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

  // Clear form fields
  document.getElementById('contactForm').reset();
});




// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');

  for (const link of links) {
      link.addEventListener('click', smoothScroll);
  }
});

function smoothScroll(event) {
  event.preventDefault();

  const targetId = event.currentTarget.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust this value to offset the fixed navbar height
      behavior: 'smooth'
  });
}


let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.testimonials-card');
    const current = slides[currentSlide];
    
    current.classList.remove('active');
    current.classList.add(direction === 1 ? 'slide-out-left' : 'slide-out-right');

    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    const next = slides[currentSlide];
    next.classList.add('active');
    next.classList.add(direction === 1 ? 'slide-in-right' : 'slide-in-left');

    setTimeout(() => {
        current.classList.remove('slide-out-left', 'slide-out-right');
        next.classList.remove('slide-in-left', 'slide-in-right');
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.testimonials-card');
    slides[0].classList.add('active');
});


function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}