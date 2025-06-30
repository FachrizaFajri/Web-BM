document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Menutup menu saat link diklik (untuk mobile)
        const navLinks = document.querySelectorAll('.main-nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }

    // Untuk memastikan halaman tetap di bagian atas saat reload
    window.scrollTo(0, 0);
});