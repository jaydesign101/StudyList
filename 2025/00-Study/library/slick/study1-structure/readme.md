# Slick 구조
## [HTML] HTML 구조
```
<ul class="클래스명">
  <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>
</ul>
```
## [JS] Slick 초기화
```
$(function(){
  $('.클래스명').slick({
    dots:true,
    slidesToShow : 2,
    slidesToScroll : 2,
  });
})
```
## [HTML] Slick 적용 HTML 구조
```
<ul class="lick-initialized slick-slider">
  <button class="slick-prev slick-arrow">Previous</button>
  <div class="slick-list">
    <div class="slick-track">
      <li class="slick-slide slick-cloned">슬라이드 4 (복사)</li>
      <li class="slick-slide slick-cloned">슬라이드 5 (복사)</li>
      <li class="slick-slide slick-active slick-current">현재 슬라이드 1</li>
      <li class="slick-slide slick-active">슬라이드 2</li>
      <li class="slick-slide">슬라이드 3</li>
      <li class="slick-slide">슬라이드 4</li>
      <li class="slick-slide">슬라이드 5</li>
      <li class="slick-slide slick-cloned">슬라이드 1 (복사)</li>
      <li class="slick-slide slick-cloned">슬라이드 2 (복사)</li>
      <li class="slick-slide slick-cloned">슬라이드 3 (복사)</li>
      <li class="slick-slide slick-cloned">슬라이드 4 (복사)</li>
      <li class="slick-slide slick-cloned">슬라이드 5 (복사)</li>
    </div>
  </div>
  <button class="slick-next slick-arrow">Next</button>
  <ul class="slick-dots">
    <li class="slick-active">현재 인디케이터</li>
    <li></li>
    <li></li>
  </ul>
</ul>
  ```

<img src="./기본 구조.gif">

---

## 역할
### (지정요소).slick-slider
  - 역할 : Slick 슬라이더 최상의 컨테이너 (사용자 지정)
  - 위치 : .slick-slider
  - CSS : 슬라이더를 전체를 감싸고 있음
### button.slick-arrow
  - 역할 : 좌우 네비게이션(화살표) 버튼 공통
  - 위치 : .slick-slider > button.slick-arrow
  - CSS : .slick-prev, .slick-next의 공통
  - 이전 버튼 : .slick-prev 클래스명 추가 
    - 위치 : .slick-slider > button.slick-arrow.slick-prev
  - 다음 버튼 : .slick-next 클래스명 추가
    - 위치 : .slick-slider > button.slick-arrow.slick-next
### div.slick-list
  - 역할 : 보이는 영역(뷰포트) 역할
  - 위치 : .slick-slider > div.slick-list
  - CSS : { overflow:hidden; }
### div.slick-track
  - 역할 : 슬라이드들을 감싸고 움직이는 역할
  - 위치 : .slick-slider > div.slick-list > div.slick-track
  - CSS : { transform: translate3d(); } 로 슬라이드 이동
### (지정요소).slick-slide
  - 역할 : 개별 슬라이드 요소 (사용자 지정)
  - 위치 : .slick-slider > div.slick-list > div.slick-track > .slick-slide
  - 현재 위치 슬라이드 : .slick-current 클래스명 추가
    - 위치 : .slick-slider div.slick-list div.slick-track .slick-slide.slick-current
  - 보여지고 있는 슬라이드 : .slick-active 클래스명 추가
    - 위치 : .slick-slider div.slick-list div.slick-track .slick-slide.slick-active
### ul.slick-dots
  - 역할 : 슬라이더 인디케이터 버튼들의 컨테이너
  - 위치 : .slick-slider > ul.slick-dots
  - 인디케이터 버튼들은 &lt;li&gt; 태그로 구성
### ul.slick-dots li
  - 역할 : 슬라이더 인디케이터 버튼들, 슬라이드 페이지 표시
  - 현재 위치 인디케이터 : .slick-active 클래스명 추가 
    - 위치 : .slick-slider > ul.slick-dots > li.slick-active

---

## 자주 사용하는 요소 위치 (CSS)

  |  요소              |  위치 (CSS)  |
  | :--                | :--         |
  |  슬라이더 전체      |  .slick-slider   |
  | 화살표              | .slick-slider .slick-arrow |
  | 이전 화살표         | .slick-slider .slick-arrow.slick-prev |
  | 다음 화살표         | .slick-slider .slick-arrow.slick-next |
  | 슬라이드 그룹       | .slick-slider .slick-list |
  | 개별 슬라이드       | .slick-slider .slick-list .slick-slide |
  | 보여지는 슬라이드   | .slick-slider .slick-list .slick-slide.slick-active |
  | 인디케이터 그룹     | .slick-slider ul.slick-dots |
  | 현재 인디케이터     | .slick-slider ul.slick-dots li.slick-active|


