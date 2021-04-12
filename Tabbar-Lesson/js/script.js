$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

// $('.menu-trigger').on('click', function(event) {
//   .menu-triggerクリック時に行われる処理
// });

// .toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッド
// トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加される
// .toggleClass()を設定すると、アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除される

// .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド
// このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定する
// #sp-menuが開いたときに、.fadeToggle()が処理されるように設定
// ハンバーガーメニューがクリックされたときに、フェードインとフェードアウトが交互に実行される



