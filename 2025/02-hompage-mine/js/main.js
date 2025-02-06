$(function(){
  $(".content .scrollBox .scroll").on("click",function(){
    var scrollBtnPosition = $(".content .scrollBox .scroll").offset().top + 20;
    $('html, body').animate({scrollTop:(scrollBtnPosition)},400);
  })
})