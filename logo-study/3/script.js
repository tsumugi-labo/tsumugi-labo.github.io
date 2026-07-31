/*==========================================
  つむぎ研究所 配色シミュレーター
==========================================*/

const root = document.documentElement;

const cards = document.querySelectorAll(".color-card");

const colorName = document.getElementById("colorName");

const hexV = document.getElementById("hexV");
const hexH1 = document.getElementById("hexH1");
const hexH2 = document.getElementById("hexH2");

const history = document.getElementById("history");

/*==========================
比較履歴
==========================*/

let compare = [];

/*==========================
カードへ色見本を追加
==========================*/

cards.forEach(card => {

    const preview = document.createElement("div");

    preview.className = "color-preview";

    ["v", "h1", "h2"].forEach(key => {

        const chip = document.createElement("span");

        chip.style.background = card.dataset[key];

        preview.appendChild(chip);

    });

    card.insertBefore(preview, card.firstChild);

});

/*==========================
比較履歴表示
==========================*/

function drawHistory(currentName) {

    if (!history) return;

    history.innerHTML = "";

    compare
        .filter(item => item.name !== currentName)
        .slice(0, 2)
        .forEach(item => {

            const div = document.createElement("div");

            div.className = "history-card";

            div.innerHTML = `

        <div class="history-preview">
            <span style="background:${item.v}"></span>
            <span style="background:${item.h1}"></span>
            <span style="background:${item.h2}"></span>
        </div>

        <div class="history-name">

            ${item.name}

        </div>

        `;

            history.appendChild(div);

        });

}

/*==========================
クリックイベント
==========================*/

cards.forEach(card => {

    card.addEventListener("click", () => {

        const v = card.dataset.v;
        const h1 = card.dataset.h1;
        const h2 = card.dataset.h2;
        const name = card.dataset.name;

        /* ロゴ変更 */

        root.style.setProperty("--v", v);
        root.style.setProperty("--h1", h1);
        root.style.setProperty("--h2", h2);

        /* 名前 */

        colorName.textContent = name;

        /* HEX */

        hexV.textContent = v.toUpperCase();
        hexH1.textContent = h1.toUpperCase();
        hexH2.textContent = h2.toUpperCase();

        /* active */

        cards.forEach(c => {

            c.classList.remove("active");

        });

        card.classList.add("active");

        /* 履歴 */

        compare = compare.filter(item => item.name !== name);

        compare.unshift({

            name: name,

            v: v,

            h1: h1,

            h2: h2

        });

        compare = compare.slice(0, 3);

        drawHistory(name);

    });

});

/*==========================
初期表示
==========================*/

if (cards.length > 0) {

    cards[0].click();

}