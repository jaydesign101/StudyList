# Slick 구조

## CDN 연결
```
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```

## [HTML] HTML 구조
- slick 내부에서 div구조를 기본으로 사용하기 때문에 ul, li 보다 div 태그를 이용하는 것이 좋지만, 명확한 구분을 위하여 ul, li로 작성해봄
```
<ul class="클래스명">
  <li>슬라이드 1</li><li>슬라이드 2</li><li>슬라이드 3</li><li>슬라이드 4</li><li>슬라이드 5</li>
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
- 상단처럼 작성시 생성되는 Slick HTML 구조
- 이해를 돕기 위해 일부 요소 및 클래스명을 삭제함
```
<ul class="클래스명 slick-slider"> <!-- 슬라이더 최상위 컨테이너 -->

  <button class="slick-prev slick-arrow"> <!-- 이전 화살표 -->
    Previous
  </button>

  <div class="slick-list"> <!-- 슬라이더 영역 -->
    <div class="slick-track"> <!-- 슬라이드 컨테이너 -->
      <li class="slick-slide slick-active slick-current"> 슬라이드 1</li> <!-- 현재 및 활성화된 슬라이드 -->
      <li class="slick-slide slick-active">슬라이드 2</li>
      <li class="slick-slide">슬라이드 3</li>
      <li class="slick-slide">슬라이드 4</li>
      <li class="slick-slide">슬라이드 5</li>
    </div>
  </div>

  <button class="slick-next slick-arrow"> <!-- 다음 화살표 -->
    Next
  </button>  

  <ul class="slick-dots"> <!-- 인디케이터 컨테이너 -->
    <li class="slick-active">1</li> <!-- 현재 및 활성화 인디케이터 -->
    <li>2</li>
    <li>3</li>
  </ul>

</ul>
  ```

<img src="./기본 구조.gif">

---

## 역할
### (지정요소).slick-slider
  - 역할 : (사용자 지정) Slick 슬라이더 최상위 컨테이너, 사용자가 작성한 클래스명이 추가
  - 위치 : (최상위) .slick-slider 
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
  - 역할 : (사용자 지정) 개별 슬라이드 요소
  - 위치 : .slick-slider > div.slick-list > div.slick-track > .slick-slide
  - 현재 위치 슬라이드 : .slick-current 클래스명 추가
    - 위치 : .slick-slider > div.slick-list > div.slick-track > .slick-slide.slick-current
  - 활성화 슬라이드 : .slick-active 클래스명 추가
    - 위치 : .slick-slider > div.slick-list > div.slick-track > .slick-slide.slick-active
### ul.slick-dots
  - 역할 : 슬라이더 인디케이터 버튼들의 컨테이너
  - 위치 : .slick-slider > ul.slick-dots
  - 인디케이터 버튼들은 &lt;li&gt; 태그로 구성
  - 옵션 { dots:true } 사용 시 .slick-slider 내부에 자동으로 생성됨과 동시에 .slick-slider에 .slick-dotted 클래스가 추가됨.
### ul.slick-dots li
  - 역할 : 슬라이더 인디케이터 버튼들, 슬라이드 페이지 표시
  - 활성화 인디케이터 : .slick-active 클래스명 추가 
    - 위치 : .slick-slider > ul.slick-dots > li.slick-active

---

## 요소 위치 (CSS)

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


