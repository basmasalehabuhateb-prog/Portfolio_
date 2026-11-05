window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header ul li a');

    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }

    let currentSectionId = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.scrollY >= (sectionTop - 150)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

const contactLinks = document.querySelectorAll('#contact .contact-links a');

contactLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        const platform = this.className || 'Professional Account';
        
        alert(`You are now redirecting to my professional ${platform} profile. Thank you for reaching out!`);
    });
});