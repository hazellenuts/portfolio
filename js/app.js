window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    window.addEventListener("scroll", function () {
		const isMobile = window.matchMedia("(max-width: 768px)").matches; // Cek jika layar kecil
		if (window.scrollY > 50 && !isMobile) {
			navbar.style.backdropFilter = "blur(10px)";
			navbar.style.backgroundColor = "rgba(14, 16, 8, 0.3)";
		} else {
			navbar.style.backdropFilter = "blur(0px)";
			navbar.style.backgroundColor = "rgba(14, 16, 8, 0)";
		}
	});
	

	hamburger.addEventListener("click", function () {
		navLinks.classList.toggle("active");
	});
	
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Menghentikan scroll default browser

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Jika navbar fixed, tambahkan offset
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            // Scroll ke posisi target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});





function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
}
