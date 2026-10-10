// MACJOLA ENGINEERING LIMITED - MASTER SCRIPT

document.addEventListener("DOMContentLoaded", () => {
    // 1. PRELOADER HANDLER
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("hide");
            document.body.classList.remove("preloader-active");
        }, 300);
    }

    // 2. MOBILE MENU TOGGLE
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");
    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
            const expanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", !expanded);
        });
    }

    // 3. HEADER SHADOW ON SCROLL
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    });

    // 4. DYNAMIC FOOTER YEAR
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 5. SCROLL REVEAL ANIMATION
    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 80) {
                el.classList.add("active");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger initial check
});