$(function () {

    // $(".top-text").html("連携成功");
    // トップに戻るボタンの非表示・再表示の処理
    // トップに戻るボタンをまず隠す
    $(".to-top").hide();
    // ブラウザがスクロールされたら処理を実行
    $(window).on("scroll", function () {

        // // 変数FRAMEINを作り、inner-1タグのY座標を測って格納
        let FRAMEIN = $(".gakudo").offset().top - $("header").height();

        // スクロール量が500を上回ったら
        if ($(window).scrollTop() > FRAMEIN) {
            // トップに戻るボタンを０．５秒かけてフェードイン
            $(".to-top").fadeIn(500);

        } else {
            // 条件を外れたらトップに戻るボタンを０．５秒かけてフェードアウト
            $(".to-top").fadeOut(500);
        }
    });

    // ★トップに戻る動きをスムーススクロールにする

    $(".to-top ").on("click", function () {
        $("html,body").animate({ scrollTop: 0 });
        return false;
    });

    // ★アニメーション再生用のクラスfadeUpActiveをつけるタイミングを制御
    // アニメーションさせたい要素（ fadeUp-trigger）がひとつづつブラウザに映るタイミングで
    // アニメーション再生用のclass「fadeUpActive」を追加する

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

    // slickの起動
    $('.slick01').slick({ //{}を入れる
        autoplay: true, //「オプション名: 値」の形式で書く
        // dots: true, //複数書く場合は「,」でつなぐ
        fade: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 1000,
        speed: 3000
    });
});
