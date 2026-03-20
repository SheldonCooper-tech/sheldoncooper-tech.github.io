// Tailwind Configuration (Loaded before CDN)
window.tailwind = {
    config: {
        theme: {
            extend: {
                colors: {
                    brand: {
                        dark: '#0f172a',
                        primary: '#6366f1',
                        secondary: '#818cf8',
                        light: '#e0e7ff',
                        accent: '#10b981'
                    }
                },
                fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                }
            }
        }
    }
};

// Application Logic (Loaded after DOM is ready)
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const menuIcon = mobileMenuBtn.querySelector('i');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Form Submission Handling
    betaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(betaForm);
    const data = {
        name: document.querySelector('input[type="text"]').value,
        email: document.querySelector('input[type="email"]').value,
        message: document.querySelector('textarea').value,
        date: new Date().toLocaleString()
    };

    try {
        await fetch('https://script.google.com/macros/s/2PACX-1vS7BfO-WSN60PF_K3EhrKiw01npLkVMKUvuJa2XrbrGZ53fsyuT4qo6P91oWGuIccz6WMWAoBzD4Aqf/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        
        // Показати успіх
        successMessage.classList.remove('hidden');
        betaForm.reset();
    } catch(e) {
        alert('Дані збережено!');
    }
});

            // Visual feedback for button
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

            // Simulate API Call / Network delay
            setTimeout(() => {
                // Show success message
                successMessage.classList.remove('hidden');

                // Reset form and button
                betaForm.reset();
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            }, 1000);
        });
    }
});
