// gnb : hover
$(function(){
  $('.gnb-dept1 > li > a').on('mouseenter focus contextmenu', function(){
    var gnbIndex = $('.gnb-dept1 > li > a').index($(this));
    $('.gnb-dept2').removeClass('on');
    $('.gnb-dept2:eq('+gnbIndex+')').addClass('on');
  })
  $('header').on('mouseleave', function(){
    $('.gnb-dept2').removeClass('on');
  })
})

/*
1. $(function(){~}
  - 문서가 준비되면 실행되는 코드
  - $(document).ready(function(){})의 단축 표현
2. 이벤트 리스너 문법
  - $("css선택자").메서드(이벤트, 콜백함수);
  - 선택자 : 이벤트를 등록할 요소 지정
  - 메서드 : 이벤트 실행 방법 설정
  - 이벤트 : 발생할 이벤트 종류 설정
  - 콜백함수 : 이벤트가 발생했을 때 실행할 함수
  2-1. 메서드 종류
    - on() : 이벤트 추가
    - off() : 이벤트 제거
    - one() : 한번 실행 후 제거
    - preventDefault() : 기본 동작 차단
    - stopPropagation() : 이벤트 전파 방지
  2-2. 이벤트 종류
    - click	: 요소를 클릭했을 때
    - dblclick : 요소를 더블 클릭했을 때
    - mousedown : 마우스 버튼을 눌렀을 때
    - mouseup	: 마우스 버튼을 뗐을 때
    - mousemove : 마우스를 움직일 때
    - mouseenter : 마우스가 요소 위로 올라갈 때 (버블링 없음)
    - mouseleave : 마우스가 요소에서 벗어날 때 (버블링 없음)
    - mouseover : 마우스가 요소 위로 올라갈 때 (버블링 있음)
    - mouseout : 마우스가 요소에서 벗어날 때 (버블링 있음)
    - contextmenu :마우스 오른쪽 버튼 클릭 시
  2-3. 버블링
    - 이벤트가 발생한 요소에서 상위 요소(부모, 조상)로 전파되는 현상    
3. 요소.index($(this))
  - 이벤트가 실행되는 해당 요소의 index 반환하는 제이쿼리 명령어
4. eq(n)
  - 선택한 요소의 인덱스(n)를 가져오는 명령어
  4-1. 요소.eq(n)
    - 제이쿼리 메서드
    - $('.menu li').eq(index).css('color', 'red');
  4-2. 요소:eq(n)
    - 제이쿼리 선택자 (css 사용 불가)
    - $('.menu li:eq('+index+')').css('color', 'blue');
5. 요소.addClass("클래스명"), 요소.removeClass("클래스명")
  - 클래스명 추가 및 삭제 제이쿼리 명령어 
*/


// fixHeader
$(function(){
  var scrollFix = 0;
  scrollFix = $(document).scrollTop();
  fixHeader();

  $(window).on('scroll resize', function(){ //윈도우창 조절시 이벤트
    scrollFix = $(document).scrollTop();
    fixHeader();
  })
  function fixHeader(){ //고정헤더 함수
    if(scrollFix > $('header').height()){
      $('header').addClass('on');
    }else{
      $('header').removeClass('on')
    }
  }
})


/*
1. 요소.scrollTop()
  - 해당 요소의 스크롤 위치 반환
  - $(document).scrollTop(); : 문서 전체의 스크롤 위치 반환
2. $(window).on('scroll resize', fuction(){~})
  - 윈도우창 (브라우저 창) 스크롤 및 크기 조절시 실행되는 이벤트
3. 요소.height()
  - 해당 요소의 높이값
  - dom 요소의 높이값을 구하는 것이기 때문에 페이지가 로드 된후 실행되어야 한다
  - 즉 function(){~} 내부에 작성하는 것이 안전함
*/