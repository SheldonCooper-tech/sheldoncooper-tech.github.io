window.tailwind = {
    config: {
        theme: {
            extend: {
                colors: {
                    finerd: {
                        black: '#0a0a0a',
                        darker: '#121212',
                        dark: '#262626',
                        accent: '#e2fd52', /* acid/neon yellow */
                    }
                },
                fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                    mono: ['JetBrains Mono', 'monospace'],
                }
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
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
    mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

    const betaForm = document.getElementById('beta-form');
    const successMessage = document.getElementById('success-message');
    const submitBtn = document.getElementById('submit-btn');

    if (betaForm) {
        betaForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const originalBtnText = submitBtn.innerText;
            submitBtn.innerHTML = 'PROCESSING...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-50');

            setTimeout(() => {
                successMessage.classList.remove('hidden');
                betaForm.reset();
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-50');

                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 6000);
            }, 1200);
        });
    }
});
