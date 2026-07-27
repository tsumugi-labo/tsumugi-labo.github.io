// $(function () {

// $(".copy").html("連携成功");
// トップに戻るボタンの非表示・再表示の処理
// トップに戻るボタンをまず隠す
// $(".to-home, .to-top").hide();
// ブラウザがスクロールされたら処理を実行
// $(window).on("scroll", function () {

// // 変数FRAMEINを作り、inner-1タグのY座標を測って格納
// let FRAMEIN = $(".about").offset().top - $("header").height();

// スクロール量が500を上回ったら
// if ($(window).scrollTop() > FRAMEIN) {
// トップに戻るボタンを０．５秒かけてフェードイン
// $(".to-top, .to-home").fadeIn(500);

// } else {
// 条件を外れたらトップに戻るボタンを０．５秒かけてフェードアウト
// $(".to-top, .to-home").fadeOut(500);
// }
// });

// ★トップに戻る動きをスムーススクロールにする

$(function () {

    $(".to-top").hide();
    $(".to-home").hide();

    $(window).on("scroll", function () {

        let topPoint = $(".about").offset().top;
        let homePoint = $("footer").offset().top - $(window).height() + 200;
        // $("footer img").offset().top;
        // $(".banner-area").offset().top
        // + $(".banner-area").outerHeight() - 250;

        // Topボタン
        if ($(window).scrollTop() > topPoint) {
            $(".to-top").stop().fadeIn(1200);
        } else {
            $(".to-top").stop().fadeOut(500);
        }

        // Homeボタン
        if ($(window).scrollTop() > homePoint) {
            $(".to-home").stop().fadeIn(1200);
        } else {
            $(".to-home").stop().fadeOut(500);
        }

    });


    // console.log($(window).scrollTop());

    $(".to-top a").on("click", function () {

        $("html, body").animate(
            {
                scrollTop: 0
            },
            // 500
        );

        return false;

    });


    // 処理名を関数として名前つけて定義
    function addClassfunction() {
        $(".fadeUp-trigger").each(function () {
            let FRAMEIN = $(this).offset().top - $(window).height();

            if (FRAMEIN < $(window).scrollTop() - 100) {
                $(this).addClass("fadeUpActive");
            }
        });
    }

    // windowがスクロールされたときに処理を実行
    $(window).on("scroll", function () {
        // 処理を関数名の名指しで呼び出し
        addClassfunction();

    });

    // ページ読み込み時にも実行（半端な表示状態でのリロードでも表示するように）
    addClassfunction();

});

// alert($(".banner-area").position().top);
// alert($(".banner-area").offset().top);
// alert($(".banner-area").outerHeight());
// alert($(".about").offset().top);
// alert($("footer").offset().top);


// $(".to-top a").on("click", function () {
// $("html,body").animate({ scrollTop: 0 });
// 500

// return false;
// });

// ★アニメーション再生用のクラスfadeUpActiveをつけるタイミングを制御
// アニメーションさせたい要素（ fadeUp-trigger）がひとつづつブラウザに映るタイミングで
// アニメーション再生用のclass「fadeUpActive」を追加する





// slickの起動
// $('.slick01').slick({ //{}を入れる
// autoplay: true, //「オプション名: 値」の形式で書く
// dots: true, //複数書く場合は「,」でつなぐ
// fade: true,
// arrows: false,
// pauseOnHover: false,
// pauseOnFocus: false,
// autoplaySpeed: 1000,
// speed: 3000
// });
// });


