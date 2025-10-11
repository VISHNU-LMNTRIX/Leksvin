/*
 * File: js/script.js
 * Description: Handles mobile menu and other interactive animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const slidingMenu = document.querySelector('.sliding-menu');
    const submenuToggle = document.querySelector('.submenu-toggle');
    const submenu = document.querySelector('.submenu');

    // 1. Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class for the hamburger animation
        hamburger.classList.toggle('active');

        // Toggle the 'open' class for the sliding menu
        slidingMenu.classList.toggle('open');
    });

    // 2. Products Submenu Toggle
    submenuToggle.addEventListener('click', () => {
        // Toggle the 'open' class for the submenu
        submenu.classList.toggle('open');
        
        // Toggle the 'rotated' class for the '+' icon animation
        submenuToggle.classList.toggle('rotated');
    });

    // Optional: Close menu on link click (for better UX)
    document.querySelectorAll('.sliding-menu a').forEach(link => {
        link.addEventListener('click', () => {
            // Check if the clicked link is not the main Products link (which opens submenu)
            if (link.parentElement.className.indexOf('submenu-toggle-container') === -1) {
                hamburger.classList.remove('active');
                slidingMenu.classList.remove('open');
            }
        });
    });
});