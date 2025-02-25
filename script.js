// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector("header").offsetHeight; // Get fixed header height
            const targetPosition = targetSection.offsetTop - (window.innerHeight / 2) + (targetSection.clientHeight / 2);

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Scroll to top button functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = '⬆';
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #00f7ff;
    color: black;
    border: none;
    padding: 15px;
    font-size: 20px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
`;

document.body.appendChild(scrollToTopBtn);

window.onscroll = function() {
    scrollToTopBtn.style.display = (window.scrollY > 100) ? "block" : "none";
};

scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Mobile Menu Toggle
const toggleButton = document.createElement('div');
toggleButton.className = 'menu-toggle';
toggleButton.innerText = '☰';
document.querySelector('header').appendChild(toggleButton);

toggleButton.onclick = function() {
    document.querySelector('.nav-links').classList.toggle('show');
};
