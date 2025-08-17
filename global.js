// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    
    // Function to handle smooth scrolling
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 10;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Handle navigation menu clicks
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
        });
    });
    
    // Handle footer navigation clicks
    document.querySelectorAll('footer a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
        });
    });
// Make sure to destroy any existing Typed instance first
const element = document.querySelector('#element');
if (element._typed) {
    element._typed.destroy();
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Clear any existing content and destroy existing instances
    const element = document.querySelector('#element');
    
    // Remove any existing typed instances
    if (window.typedInstance) {
        window.typedInstance.destroy();
    }
    
    // Clear the element content
    element.innerHTML = '';
    
    // Initialize single Typed instance with slower, smoother settings
    window.typedInstance = new Typed('#element', {
        strings: ['Data Analyst', 'UI/UX Designer', 'Python Developer'],
        typeSpeed: 80,        // Slower typing
        backSpeed: 40,        // Slower backspacing
        backDelay: 1500,      // Wait before backspacing
        startDelay: 500,      // Initial delay
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        smartBackspace: true  // Only backspace what doesn't match
    });
});

// Store reference to prevent multiple instances
element._typed = typed;
    
    // Add active link highlighting (optional)
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    
    function highlightActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Add scroll event listener for active link highlighting
    window.addEventListener('scroll', highlightActiveLink);
    
    // Mobile menu optimization
    function optimizeForMobile() {
        if (window.innerWidth <= 768) {
            // Add touch-friendly behavior for mobile
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.style.padding = '8px 12px';
            });
        }
    }
    
    // Run on load and resize
    optimizeForMobile();
    window.addEventListener('resize', optimizeForMobile);
    
    // Prevent form submission redirect (since you're using mailto)
    const contactForm = document.querySelector('.form-column form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Allow the default mailto behavior
            setTimeout(() => {
                // Clear form after submission
                this.reset();
            }, 100);
        });
    }
});