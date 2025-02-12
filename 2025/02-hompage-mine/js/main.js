$(function(){
  $(".content .scrollBox .scroll").on("click",function(){
    var scrollBtnPosition = $(".content .scrollBox .scroll").offset().top + 20;
    $('html, body').animate({scrollTop:(scrollBtnPosition)},400);
  })
})

//스크롤애니메이션(scrolla.js)
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

$(function(){
  $('.home-think .video .line-effect').on("click", function(){
    $(this).css({'display':'none'});
    $('.home-think .video iframe').css({'display':'block'});
  })
})

