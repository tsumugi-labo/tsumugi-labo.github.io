$(function(){

    // ここからタブ切り替え

    // #tab1以外を隠す
    $("#contents #tab1").siblings().hide();

    // #buttonsの中にあるaタグがクリックされたら...
    $("#buttons a").on("click",function(){
       
        // #contentsの中にあるdiv（4つすべて）を隠す
        $("#contents .tab").hide();
        // クリックされたaタグのhref属性を取得（#tab1-#tab4のどれか）
        // 取得したid名のコンテンツを再表示
        $($(this).attr("href")).show();

        // #buttonosの中にあるaタグからcurrentというクラスをどこについていようが外す
        $("#buttons a").removeClass("current");
        // クリックされたaタグにcurrentというクラスをつける
        $(this).addClass("current");

        // aタグのリンク遷移機能をオフにする
        return false;

    });

    // ここからフェードイン

    // 処理を作って名前を付けて置いておく
    function addClassfunction() {
        $(".fadeUp-trigger").each(function () {
            let FRAMEIN = $(this).offset().top - $(window).height();

            if (FRAMEIN < $(window).scrollTop() - 100) {
                $(this).addClass("fadeUpActive");
            }
        });
    }

    // ウィンドウがスクロールされたら処理を実行
    $(window).on("scroll", function () {
        // 処理を名前で呼び出し
        addClassfunction();
    });

    // ページ読み込み時にも実行（半端な状態でのリロードに対応）
    addClassfunction();




});
