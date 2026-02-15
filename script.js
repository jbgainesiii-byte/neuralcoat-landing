// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
document.querySelector('.cta-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('.email-input').value;
    
    // Show success message
    const form = this;
    const originalHTML = form.innerHTML;
    
    form.innerHTML = `
        <div style="padding: 20px; background: rgba(255,255,255,0.2); border-radius: 10px;">
            <p style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">✓ You're on the list!</p>
            <p style="font-size: 14px; opacity: 0.9;">We'll contact you at ${email} when your batch is ready.</p>
        </div>
    `;
    
    // Reset form after 5 seconds
    setTimeout(() => {
        form.innerHTML = originalHTML;
        // Re-attach event listener
        form.addEventListener('submit', arguments.callee);
    }, 5000);
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
