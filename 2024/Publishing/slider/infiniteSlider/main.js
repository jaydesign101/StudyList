/* 함수정리 */
function infiniteSlider(sliderString){

  /* DOM 요소 */
  const customSlide = document.querySelector(sliderString);
  const sliderEl = customSlide.querySelector(".slider");
  const slideWrapEl = customSlide.querySelector(".slide-wrap");
  const slideEls = customSlide.querySelectorAll(".slide");
  const slideElsLength = slideEls.length;
  const paginationEl = customSlide.querySelector(".pagination");
 
  const btnPrevEl = customSlide.querySelector(sliderString + "> .btn-prev");
  const btnNextEl = customSlide.querySelector(sliderString + "> .btn-next");

  const cloneFirst = slideWrapEl.firstElementChild.cloneNode(true);
  const cloneLast = slideWrapEl.lastElementChild.cloneNode(true);


  /* 화면 초기 설정 */
  // 슬라이더 양 옆에 추가
  let currentIndex = 1; // 현재 슬라이더 인덱스
  slideWrapEl.appendChild(cloneFirst);
  slideWrapEl.insertBefore(cloneLast, slideWrapEl.firstElementChild);
  slideWrapEl.style.transform = `translateX( -100%)`;
  // pagination 요소 추가
  let paginationItem;
  slideEls.forEach(function (slide, index) {
    let pageNumber = index + 1; // 현재 슬라이더 인덱스를 pagination에 넣을 겁니당
    paginationItem = document.createElement('div');
    paginationItem.classList.add('pagination-item');
    paginationItem.textContent = pageNumber;
    paginationEl.appendChild(paginationItem);
  });
  const paginationItems = customSlide.querySelectorAll('.pagination-item');
  paginationItems[0].classList.add('active');

  /* 슬라이드 클릭 *********************************************************/
  let isAnimating = false; // 애니메이션 진행 중 여부를 나타내는 변수 (클릭 한번에 애니메이션 한번)

  /* 슬라이더 transition 세팅 */
  function sliderSetTransition(transition, transform){
    slideWrapEl.style.transition = transition;
    slideWrapEl.style.transform = transform;
  }
  /* 슬라이더 페이지네이션 확인 */
  function sliderMove(currentIndex){
    sliderSetTransition(".3s", `translateX(${-currentIndex * 100}%)` )
    paginationItems.forEach(function (item) {
      item.classList.remove('active');
    });
    let activeIndex = currentIndex;
    if (activeIndex == slideElsLength + 1){
      activeIndex = 1;
    }else if(currentIndex == 0){
      activeIndex = slideElsLength;
    }
    paginationItems[activeIndex-1].classList.add('active');
  }
  /* 슬라이더 무한 세팅 */
  function sliderInfinite(){
    if (currentIndex == slideElsLength + 1){
      // 마지막 슬라이더일때
      sliderSetTransition("none", `translateX(-100%)`)
      currentIndex =1;
    } else if ((currentIndex == 0)){
      // 처음 슬라이더일때
      sliderSetTransition("none", `translateX( ${-slideElsLength * 100}%)`)
      currentIndex = slideElsLength;
    }
    return currentIndex;
  }

  /* 이전 버튼 클릭 */
  btnPrevEl.addEventListener("click", function() {
    if (!isAnimating) {
      currentIndex--;
      isAnimating = true; // 애니메이션이 시작됨을 표시
      sliderMove(currentIndex);
    }
  });

  /* 다음 버튼 클릭 */
  btnNextEl.addEventListener("click", function() {
    if (!isAnimating) {
      currentIndex++;
      isAnimating = true; // 애니메이션이 시작됨을 표시
      sliderMove(currentIndex);
    }
  });

  /* pagination 버튼 클릭 */
  paginationItems.forEach(function(item, index){
    item.addEventListener("click", function() {
        currentIndex = index + 1;
        sliderMove(currentIndex);
    })
  })

  /* transitionend 이벤트 리스너 추가 (transiton이 끝나면 transitionend 이 발생) */
  slideWrapEl.addEventListener('transitionend', function() {
    sliderInfinite();
    isAnimating = false; // 애니메이션이 끝남을 표시
  });

  /* Slider 스와이프 */
  let startPos = 0; // 시작 좌표
  let offset = 0; // 이동 좌표
  let sliderClick = false; // true일때만 스와이프 가능하도록
  let changePoint = Math.round(sliderEl.offsetWidth / 4); // 스와이프 이동 기준 값 25%

  function handleSwipeStart(e) {
    startPos = e.clientX || e.touches[0].clientX;
    sliderClick = true;
  }
  
  function handleSwipeMove(e) {
    if (sliderClick) {
      offset = (e.clientX || e.targetTouches[0].e.clientX) - startPos;
      sliderSetTransition("none", `translateX( calc( ${currentIndex} * -100% +  ${offset}px))`);
    }
  }
  
  function handleSwipeEnd() {
    sliderClick = false;
    if (changePoint < Math.abs(offset)) {
      if (offset < 0 && !isAnimating) {
        currentIndex++;
      } else if (offset > 0 && !isAnimating) {
        currentIndex--;
      } 
      offset = 0;
      isAnimating = true;
      sliderMove(currentIndex);
      setTimeout(function () {
        sliderInfinite();
        isAnimating = false;
      }, 300);

    } else {
      sliderMove(currentIndex);
    }
  }
  
  // 데스크탑 스와이프
  sliderEl.addEventListener("mousedown", handleSwipeStart);
  sliderEl.addEventListener("mousemove", handleSwipeMove);
  sliderEl.addEventListener("mouseup", handleSwipeEnd);
  sliderEl.addEventListener("mouseleave", handleSwipeEnd);
  
  // 모바일 스와이프
  sliderEl.addEventListener("touchstart", handleSwipeStart);
  sliderEl.addEventListener("touchmove", handleSwipeMove);
  sliderEl.addEventListener("touchend", handleSwipeEnd);
};

/* mian.js */
document.addEventListener("DOMContentLoaded", function() {

  infiniteSlider("#infiniteSlider");

});