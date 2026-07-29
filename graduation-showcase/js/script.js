// ======================================
// Graduation Showcase
// script.js
// ======================================

// フェードイン
const targets = document.querySelectorAll(
    ".section, .concept-box, .future-card, .learn-grid article"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

targets.forEach(target => {
    observer.observe(target);
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.animate(

            [

                {
                    transform: "translateY(0)"
                },

                {
                    transform: "translateY(-3px)"
                }

            ],

            {

                duration: 250,
                fill: "forwards"

            });

    });

});