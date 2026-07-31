/*==================================
 script.js
==================================*/

const cards = document.querySelectorAll(".color-card");
const colorName = document.getElementById("colorName");
const root = document.documentElement;

cards.forEach(card => {

    card.addEventListener("click", function(){

        root.style.setProperty("--v", this.dataset.v);
        root.style.setProperty("--h1", this.dataset.h1);
        root.style.setProperty("--h2", this.dataset.h2);

        colorName.textContent = this.dataset.name;

    });

});