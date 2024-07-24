function scrollToElement(elementSelector, instance = 0){
  // Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  // Check if there are element  matchng the selector and if the requested instance exists
  if(elements.length > instance){
    // Scroll to the specified instance of the element
    elements[instance].scrollIntoView({behavior: 'smooth'});
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () =>{
  scrollToElement('.container');
})

link2.addEventListener('click', () =>{
  // Scroll to the second element with "header" class
  scrollToElement('.container', 1);
})

link3.addEventListener('click', () =>{
  // Scroll to the second element with "header" class
  scrollToElement('.portfolio');
})

//////////////////////////////////////////////////////////////////////
// JavaScript to toggle the content visibility for multiple "Read More" buttons
document.querySelectorAll('.read-more-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
      const contentWrapper = this.closest('.card');
      const moreText = contentWrapper.querySelector('.more-text');

      if (moreText.style.display === 'none' || moreText.style.display === '') {
          moreText.style.display = 'inline';
          this.textContent = 'Read Less';
      } else {
          moreText.style.display = 'none';
          this.textContent = 'Read More';
      }
  });
});

///////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('nav-menu');
  const menuLinks = document.querySelectorAll('.nav-links li');
  const scrollOffset = 50; // Adjust this value to set the desired offset

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      menu.classList.add('expanded');
    } else {
      menu.classList.remove('expanded');
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - scrollOffset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

////////////////////////////////////////////////////////////////////
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}