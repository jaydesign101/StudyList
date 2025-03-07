/* main.js */
document.addEventListener("DOMContentLoaded", function() { // dom 요소 모두 로드 후 실행
  /* dom 요소 설정 */
  const mySliderEl = document.querySelector("#defaultSlider");
  const btnPrevEl = mySliderEl.querySelector(".btn-prev");
  const btnNextvEl = mySliderEl.querySelector(".btn-next");
  // const sliderEl = mySliderEl.querySelector(".slider");
  const itemWrapEl = mySliderEl.querySelector(".item-wrap");
  const itemEls = mySliderEl.querySelectorAll(".item");
  const paginationEl = mySliderEl.querySelector(".pagination");


  /* 전역 변수 */
  let currentIndex = 0; // 현재 인덱스
  let itemCount = 4; // item 개수
  let itemGap = 10; // item 사이 간격
  let slideCount = Math.ceil(itemEls.length / itemCount) // 슬라이드 개수, currentIndex가 이를 넘어가면 안됨


  /* 초기 설정 */
  let itemCountPercent = 100 / itemCount; // itemEl 너비 구하는데 필요한 값 (dummy)
  let itemGapPx = itemGap - itemGap / itemCount; // itemEl 너비 구하는데 필요한 값(dummy)
  itemEls[0].parentNode.style.gap = `${itemGap}px` // itemEl 간격
  itemEls.forEach(itemEl => {
    itemEl.style.width = `calc(${itemCountPercent}% - ${itemGapPx}px)`; // itemEl Width
  })


  /* 함수 : 자주 사용하니 함수로 만듦 */
  // slide 이동 함수
  function moveSlider(){
    itemWrapEl.style.transition = ".3s"; // 이동할 시간
    itemWrapEl.style.transform = `translateX(calc(${-currentIndex * 100}% - ${currentIndex * itemGap}px))`; 
    // item-wrap 이동, itemEl 간격도 같이 계산
  }

  // 페이지네이션 불렛 setUp
  function setUpBullet(offIndex, onIndex){
    paginationBulletEls[offIndex].classList.remove("active") // 불렛 비활성화
    paginationBulletEls[onIndex].classList.add("active") // 불렛 활성화
  }

  // 이전 및 다음 버튼 setUp
  function setupBtn(){
    if(currentIndex == 0 && slideCount == 1){ // item 개수가 모든 화면에 나올때
      btnPrevEl.classList.remove("active")
      btnNextvEl.classList.remove("active")
    }else if(currentIndex == 0 && slideCount > 1){ // 처음 화면일때
      btnPrevEl.classList.remove("active")
      btnNextvEl.classList.add("active")
    }else if(currentIndex == slideCount-1 && slideCount > 1 ){ // 마지막 화면일때
      btnPrevEl.classList.add("active")
      btnNextvEl.classList.remove("active")
    }else{ // 중간 화면 일때
      btnPrevEl.classList.add("active")
      btnNextvEl.classList.add("active")
    }
  }

  
  /* 페이지네이션 */
  // 페이지네이션 불렛 생성
  for(let i = 0; i < slideCount; i++){
    let paginationBulletEl;
    paginationBulletEl = document.createElement('div');
    paginationBulletEl.classList.add('pagination-bullet');
    // paginationBulletEls.textContent = ""
    paginationEl.appendChild(paginationBulletEl)
  }

  // 페이지네이션 불렛 dom 설정
  let paginationBulletEls = mySliderEl.querySelectorAll(".pagination-bullet")
  paginationBulletEls[0].classList.add("active")

  // 페이지네이션 버튼 설정 및 이동
  paginationBulletEls.forEach((itemEl, index) => {
    itemEl.addEventListener("click", () => {
      setUpBullet(currentIndex, index)
      currentIndex = index;
      moveSlider();
      setupBtn();
    })
  })

  
  /* 버튼 */
  // 버튼 초기 설정
  setupBtn();

  // 버튼 이동
  btnPrevEl.addEventListener("click", () => {
    if(currentIndex > 0 && currentIndex <= slideCount-1){
      setUpBullet(currentIndex, currentIndex-1)
      currentIndex--;
      moveSlider();
      setupBtn()
    }
  })
  btnNextvEl.addEventListener("click", () => {
    if(currentIndex >= 0 && currentIndex < slideCount-1 ){
      setUpBullet(currentIndex, currentIndex+1)
      currentIndex++;
      moveSlider();
      setupBtn()
    }
  })
});
