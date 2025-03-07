## 소개
- https://maximzhurkin.github.io/jquery-scrolla/
- 스크롤 애니메이션 제이쿼리(jQuery) 플러그인
- jQuery 플러그인으로 선언 전 jQuery가 연결되어 있어야 한다
- Animate.css와 함께 사용할수도 있고 개별로 사용할 수 있다
- 사용방법
  - [1 - 기본 (with Animate.css)](#사용-방법1---기본-with-animatecss)
  - [2 - CSS 커스텀](#사용-방법2---css-커스텀)
  - [3 - 다른 라이브러리 활용 (with Splitting.js)](#사용-방법3---다른-라이브러리-활용-with-splittingjs)

## 사용 방법1 - 기본 (with Animate.css)
### 1. Animate.css, jQuery, scrolla.js 연결
- CDN
- scroll.js는 jQuery 플러그인이기 때문에 jQuery 다음에 선언되어야 한다
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-scrolla@0.0.3/dist/js/jquery.scrolla.min.js"></script>
```
- Scrolla CDN : jsDelivr CDN 이용
  - https://www.jsdelivr.com/package/npm/jquery-scrolla
  - jsDelivr : 오픈 소스 CDN 서비스 사이트

### 2. [HTML] Scrolla 적용할 요소에 클래스명, 옵션 속성 추가
- Scrolla 적용할 요소 : 애니메이션이 실행될 위치
- 요소에 스크롤 위치시 data-animate의 속성값이 클래스명에 추가가 되어 animate.css가 실행되는 원리
- 다른 속성 (data-duration, data-delay, data-offset, data-iteration) 은 인라인 스타일로 동작
```
<div class="animate" data-animate="animate__bounceIn" data-duration="1s" data-delay="0.5s" data-offset="100" data-iteration="1">THIS</div>
```
#### * 속성 옵션 정리
- ```data-animate``` : (필수) 애니메이션 종류 지정, 클래스명에 추가 된다
- ```data-duration``` : 애니메이션 동작 시간
- ```data-delay``` : 애니메이션 지연 시간
- ```data-offset``` : 애니메이션 동작 영역 범위 (px)
- ```data-iteration``` : 애니메이션 반복 횟수

### 3. [JS] Scrolla 초기화
- scorlla를 사용할 요소(.animate)에 scrolla를 선언하여 활성화 한다
- 초기화 선언은 한 번만 가능
```
// 기본
$(function(){
    $('.animate').scrolla();
});
```

#### * Scrolla 옵션 설정
- 모바일에도 동작할지, 한번만 실행할지, animate.css 버전을 어떤 것을 사용할지 설정할 수 있다.
```
// 옵션 설정
$(function(){
    $('.animate').scrolla({
      mobile: true, 
      once: false, 
      animateCssVersion: 3, 
    });
});
```
- ```mobile``` : 모바일시 활성화 여부 
  - true : 활성화
  - false : (기본) 비활성화
- ```once``` : 스크롤시 실행 횟수 
  - true : 한번만
  - false : (기본) 반복
- ```animateCssVersion``` : 사용되는 animate.css 버전 
  - 3 : animate 버전 3
    - 스크롤 위치시 [data-animate] 속성 값이 클래스명에 붙는다
    - 때문에 animate.css를 사용하기 위해서는 풀네임인 "animate__bounceIn" 를 붙여야 한다
  - 4 : (기본) animate 버전 4
    - 스크롤 위치시 " animate__ + [data-animate] " 속성 값이 클래스명에 붙는다
    - 때문에 [data-animate] 속성 값으로 "animate__bounceIn"을 붙인다면 "animate__animate__bounceIn"가 되기 때문에 "bounceIn"만 붙여야 한다
    - 버전에 따라 조금씩 동작 방식이 다르기 때문에 브라우저 개발모드로 클래스명이 어떻게 붙는지 확인하면서 진행한다


## 사용 방법2 - CSS 커스텀
### 1. jQuery, scrolla.js 연결
- CDN
```
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-scrolla@0.0.3/dist/js/jquery.scrolla.min.js"></script>
```

### 2. [HTML] Scrolla 적용할 요소에 클래스명, "data-animate" 속성 추가 
- 애니메이션이 실행될 위치 : Scrolla 적용 요소 ('.animate')
- ('.animate') 요소에 스크롤 위치시 "action"이라는 클래스명이 추가
```
<div class="animate" data-animate="action">
  <div class="item">요소</div>
</div>
```

### 3. [JS] Scrolla 초기화 (한 번만 가능)
```
// 기본
$(function(){
    $('.animate').scrolla({
      mobile: true, 
      once: false, 
      animateCssVersion: 3, 
    });
});
```

### 4. [CSS] CSS 애니메이션이 설정
- 애니메이션을 실행될 요소('.item')에 애니메이션 설정
- ('.animate') 요소에 스크롤 위치하여 "action"이라는 클래스명이 추가 되면 ('.item')요소가 custom-animate 애니메이션 실행
```
.animate.action .item{
  animation: custom-animate;
  animation-duration: 1s;
}
@keyframes custom-animate {
  0%{transform: translateX(-50px); opacity: 0;}
  30%{transform: translateX(-50px); opacity: 0;}
}
```

## 사용 방법3 - 다른 라이브러리 활용 (with Splitting.js)
- 참고&출처 : [[인프런] J.영 - 실전! 웹사이트제작! Step by Step! (대방산업_InteractiveWeb)](https://www.inflearn.com/course/%EC%8B%A4%EC%A0%84-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%A0%9C%EC%9E%91-%EB%8C%80%EB%B0%A9%EC%82%B0%EC%97%85-interativeweb)

### 1. jQuery, scrolla.js, splitting.js 연결
- CDN
```
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-scrolla@0.0.3/dist/js/jquery.scrolla.min.js"></script>
<script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
```

### 2. [HTML] Scrolla 적용할 요소에 클래스명, "data-animate" 속성 추가 
- 애니메이션이 실행될 위치 : Scrolla 적용 요소 ('.animate')
- Splitting 적용할 요소('.item'): ('.animate > .word > .char') 로 요소가 분리된다
```
<div class="animate" data-animate="action">
  <div data-splitting class="item">This is Splitting + Scrolla </div>
</div>
```

### 3. [JS] Splitting 초기화, Scrolla 초기화 (한 번만 가능)
```
// 기본
$(function(){

  Splitting();

  $('.animate').scrolla({
    mobile: true, 
    once: false, 
    animateCssVersion: 3, 
  });
});
```

### 4. [CSS] CSS 애니메이션 설정
- 애니메이션을 실행될 요소('.char')에 애니메이션 설정
- ('.animate') 요소에 스크롤 위치하여 "action"이라는 클래스명이 추가 되면 ('.char')요소가 splitting-slide-down 애니메이션 실행
```
.animate.action .item .char {
  display: inline-block; /* 추가 작성 */
  animation: splitting-slide-down .2s cubic-bezier(.5, 0, .5, 1) both;
  animation-delay: calc(60ms * var(--char-index));
}

@keyframes splitting-slide-down {
  from {
    transform: translateY(-.3em) scale(.8);
    opacity: 0;
  }
}
```