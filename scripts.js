document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for Fade-in effect on sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Dark Mode Toggle
    const toggleSwitch = document.querySelector('.switch input');
    toggleSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
    });
});