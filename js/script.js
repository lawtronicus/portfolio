document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.querySelector('.hamburger-menu');
    hamburger.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    const menu = document.querySelector('nav > ul');
    const isMenuVisible = menu.style.display === 'flex';

    if (isMenuVisible) {
        // Apply fly out animation
        menu.style.animation = 'flyOutToTop 0.5s ease forwards';
        setTimeout(() => { menu.style.display = 'none'; }, 500); // Hide after animation
    } else {
        // Apply fly in animation
        menu.style.display = 'flex';
        menu.style.animation = 'flyInFromTop 0.5s ease forwards';
    }

    const hamburger = document.querySelector('.hamburger-menu');
    hamburger.classList.toggle('toggle');
}