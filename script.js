document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    if (btn) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll(".reveal");

    function reveal() {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    
    // Trigger once on load
    reveal();
});
