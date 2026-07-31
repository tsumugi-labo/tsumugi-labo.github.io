/*=========================================
つむぎ研究所
Logo Color Simulator
script.js
=========================================*/

const root = document.documentElement;

const cards = document.querySelectorAll(".color-card");

const colorName = document.getElementById("colorName");

const hexV = document.getElementById("hexV");
const hexH1 = document.getElementById("hexH1");
const hexH2 = document.getElementById("hexH2");


cards.forEach(card => {

    card.addEventListener("click", () => {

        /*--------------------------
        色取得
        --------------------------*/

        const v = card.dataset.v;
        const h1 = card.dataset.h1;
        const h2 = card.dataset.h2;
        const name = card.dataset.name;

        /*--------------------------
        ロゴ変更
        --------------------------*/

        root.style.setProperty("--v", v);
        root.style.setProperty("--h1", h1);
        root.style.setProperty("--h2", h2);

        /*--------------------------
        名前
        --------------------------*/

        colorName.textContent = name;

        /*--------------------------
        HEX表示
        --------------------------*/

        hexV.textContent = v.toUpperCase();
        hexH1.textContent = h1.toUpperCase();
        hexH2.textContent = h2.toUpperCase();

        /*--------------------------
        選択状態
        --------------------------*/

        cards.forEach(c => {

            c.classList.remove("active");

        });

        card.classList.add("active");

    });

});


/*=========================================
初期状態
=========================================*/

if (cards.length > 0) {

    cards[0].click();

}