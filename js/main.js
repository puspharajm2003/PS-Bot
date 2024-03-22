// Smooth scrolling function
function smoothScroll(target) {
    var targetSection = document.querySelector(target);
    window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjusted for nav height
        behavior: 'smooth'
    });
}

// Event listener for smooth scrolling
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = this.getAttribute('href');
        smoothScroll(target);
    });
});

// Function to highlight active navigation link based on scroll position
function setActiveLink() {
    var sections = document.querySelectorAll('div[id^="section"]');
    var navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(function(section, index) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });
            navLinks[index].classList.add('active');
        }
    });
}

// Call the setActiveLink function when the page is loaded and when the user scrolls
document.addEventListener('DOMContentLoaded', setActiveLink);
window.addEventListener('scroll', setActiveLink);

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset,
            behavior: 'smooth'
          });
        }
      });
    }
  });

 $(document).ready(function() {
  $('nav a').click(function(event) {
    event.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      var top = target.offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 1000, function() {
        // Add underline to clicked link
        $('nav a').removeClass('active');
        $(this).addClass('active');
      });
    }
  });
});
