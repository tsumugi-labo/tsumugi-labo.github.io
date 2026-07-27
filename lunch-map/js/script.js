$(function() {
    // ==========================================
    // 1. スライドショー機能（3秒ごとに切り替え）
    // ==========================================
    let slides = $('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        // 現在のスライドから active クラスを取り除く
        slides.eq(currentIndex).removeClass('active');
        
        // 次のスライドのインデックスを計算
        currentIndex = (currentIndex + 1) % slides.length;
        
        // 次のスライドに active クラスを付与して表示する
        slides.eq(currentIndex).addClass('active');
    }

    // 3秒ごとにスライドを切り替える
    setInterval(showNextSlide, 3000);

    // ==========================================
    // 2. 登録フォームのバリデーション
    // ==========================================
    $('#store-form').on('submit', function(e) {
        let gmap = $('#gmap').val().trim();
        let tabelog = $('#tabelog').val().trim();

        if (!gmap && !tabelog) {
            e.preventDefault();
            alert('「GoogleMap URL」または「食べログ URL」のいずれか一方は必ず入力してください。');
        }
    });
});