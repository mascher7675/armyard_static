/**
 * ===========================================
 * THE ARMYARD - Main JavaScript
 * ===========================================
 * This file handles:
 * - Mobile menu toggle (hamburger menu)
 * - Any global interactivity
 * 
 * Page-specific JS is in each template's {% block extra_js %}
 * ===========================================
 */

// ===========================================
// MOBILE MENU TOGGLE
// Opens/closes the navigation on mobile
// ===========================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        // Toggle active class on button (animates hamburger to X)
        this.classList.toggle('active');
        
        // Toggle menu visibility
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link (for smooth navigation)
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}


// ===========================================
// SMOOTH SCROLL (for anchor links)
// ===========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
