// ======================================
// Graduation Showcase
// script.js
// ======================================

// フェードイン
// const targets = document.querySelectorAll(
//     ".section, .concept-box, .future-card, .learn-grid article"
// );

const targets = document.querySelectorAll(
".concept-box, .feature, .future-card, .learn-grid article, .message-links > div, blockquote"
);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                // entry.target.style.background = "red";
                entry.target.classList.add("show");
            }, 300);

        }

    });

}, {
    threshold: 0.2
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

