$(function () {
  // -----------------------------------------
  // 1. ハンバーガーメニュー制御
  // -----------------------------------------
  const $hamburger = $('#js-hamburger');
  const $navSp = $('#js-nav-sp');
  const $body = $('body');

  $hamburger.on('click', function () {
    const isExpanded = $(this).attr('aria-expanded') === 'true';

    $(this).toggleClass('is-active');
    $(this).attr('aria-expanded', !isExpanded);

    if (isExpanded) {
      // 閉じる処理
      $navSp.fadeOut(300, function () {
        $navSp.attr('aria-hidden', 'true');
      });
      $body.removeClass('is-fixed');
    } else {
      // 開く処理
      $navSp.attr('aria-hidden', 'false').fadeIn(300);
      $body.addClass('is-fixed');
    }
  });

  // SPナビゲーション内のリンクをクリックしたら閉じる
  $navSp.find('a').on('click', function () {
    $hamburger.removeClass('is-active').attr('aria-expanded', 'false');
    $navSp.fadeOut(300, function () {
      $navSp.attr('aria-hidden', 'true');
    });
    $body.removeClass('is-fixed');
  });

  // -----------------------------------------
  // 2. TOPに戻るボタン（根付け）制御
  // -----------------------------------------
  const $pageTop = $('#js-page-top');

  $(window).on('scroll', function () {
    // ページ全体の高さの約40%を超えたら表示
    const docHeight = $(document).height() - $(window).height();
    const scrollPoint = docHeight * 0.4;

    if ($(this).scrollTop() > scrollPoint) {
      $pageTop.addClass('is-active');
    } else {
      $pageTop.removeClass('is-active');
    }
  });

  // TOPに戻るスムーススクロール
  $pageTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  // -----------------------------------------
  // 3. ページ内スムーススクロール（ヘッダー高さ考慮）
  // -----------------------------------------
  // TOPに戻るボタン以外の # リンクに適用
  $('a[href^="#"]:not(#js-page-top)').on('click', function (e) {
    const href = $(this).attr('href');
    if (href === '#' || href === '') return;

    const $target = $(href);
    if ($target.length) {
      e.preventDefault();
      const headerHeight = $('.header').outerHeight() || 70;
      const targetPosition = $target.offset().top - headerHeight;

      $('html, body').animate(
        { scrollTop: targetPosition },
        500,
        'swing'
      );
    }
  });

  // -----------------------------------------
  // 4. スクロール表示アニメーション
  // -----------------------------------------

  const fadeItems = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('is-visible');

      }

    });

  }, {

    threshold: 0.15

  });

  fadeItems.forEach(item => observer.observe(item));

});
