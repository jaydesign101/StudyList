/* 함수 정리 */
function scrollToAreaMenu(menuString) {
  const menuEls = document.querySelectorAll(menuString);
  menuEls.forEach(function(menuEl) {
    menuEl.addEventListener("click", function(e) {
      e.preventDefault(); // 브라우저 기본 이벤트 무력화
      const dataValue = this.getAttribute('href'); // href의 속성값을 가져옴
      const targetEl = document.querySelector(dataValue); // dom 요소 선택
      
      if (dataValue && targetEl) {
        window.scrollTo({ 
          top: targetEl.offsetTop, // 해당요소의 위치 값으로
          behavior: 'smooth' // 부드럽게 스크롤
        });
      }
    });
  });
};

/* main js */
document.addEventListener("DOMContentLoaded", function() { // dom 요소 모두 로드 후 실행
  scrollToAreaMenu("header#scrollToAreaMenu a");
});