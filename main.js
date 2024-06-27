var typed = new Typed(".text", {
    strings: ["Android Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var homeSection = document.querySelector('.home');
    var aboutSection = document.querySelector('.about'); // Replace with your section class
    var homePosition = homeSection.getBoundingClientRect().bottom;
    var aboutPosition = aboutSection.getBoundingClientRect().bottom;

    // Check if scrolled past the home section
    if (homePosition <= 0) {
        header.classList.add('scrolled'); // Add class to change navbar background color
    } else {
        header.classList.remove('scrolled'); // Remove class to restore default navbar background color
    }

    // Toggle visibility based on scroll position
    var scrollPosition = window.scrollY;

    // Example: Show navbar content when scrolled to about section
    if (scrollPosition >= (aboutPosition - header.clientHeight)) {
        header.style.visibility = 'visible'; // Show the navbar content
        header.style.backgroundColor = 'white'; // Change background color to white
    } else {
        header.style.visibility = 'hidden'; // Hide the navbar content
        header.style.backgroundColor = 'transparent'; // Set background color to transparent
    }
});

