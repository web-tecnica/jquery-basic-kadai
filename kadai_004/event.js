$(function() {
  // ドキュメントが完全に読み込まれたときに発火するloadイベント
  $(window).on('load', function() {
    console.log('loadイベントが発生しました');
  });

  // スクロール時に発火するscrollイベント
  $(window).on('scroll', function() {
    console.log('scrollイベントが発生しました');
  });
});
