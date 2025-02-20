## 소개
- https://kenwheeler.github.io/slick/
- 제이쿼리 기반 슬라이더 라이브러리
- jQuery 플러그인으로 선언 전 jQuery가 연결되어 있어야 한다
- 터치, 스와이프, 자동 재생, 반응형 등 다양한 옵션을 사용 가능하다

## 사용 방법
### 1. Slick.js, Slick.css 연결
- slick은 js와 css 같이 연결해야 한다
- scroll.js는 jQuery 플러그인이기 때문에 jQuery 다음에 선언되어야 한다
- CDN
```
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```

### 2. [HTML] Slick 슬라이드 양식에 맞춰 HTML 마크업 작성
```
<div class="클래스명">
  <div>slide-1</div>
  <div>slide-1</div>
  <div>slide-1</div>
</div>
```

### 3. [JS] Slick 슬라이드 초기화
- 자주 사용하는 옵션 선언 (기본 옵션)
```
$('.클래스명').slick({
  slidesToShow: 1,      // 슬라이드 개수
  slidesToScroll : 1,   // 넘어갈 슬라이드 개수
  autoplay: true,       // 자동 슬라이드 넘김
  autoplaySpeed: 3000,  // 자동 넘김 속도 (3초)
  dots: false,          // 도트(인디케이터) 표시
  arrows: true,         // 좌우 화살표 표시
  fade: false,          // 슬라이드 전환 효과
  speed: 300,           // 전환 속도
  pauseOnHover: true,   // 호버시 멈춤
  pauseOnFocus:true,    // 포커스시 멈춤
});
```

### 4. [CSS] Slick CSS 커스텀
- 브라우저 개발자 모드(F12)을 참고하여 클래스명을 확인 후, CSS 커스텀
---

## 요소 위치 (CSS)

  |  요소                  |  위치 (CSS)  |
  | :--                    | :--         |
  |  슬라이더 컨테이너       |  .slick-slider.클래스명   |
  | 화살표 (button)         | .slick-slider.클래스명 .slick-arrow |
  | 이전 화살표 (button)    | .slick-slider.클래스명 .slick-arrow.slick-prev |
  | 다음 화살표 (button)    | .slick-slider.클래스명 .slick-arrow.slick-next |
  | 슬라이드 그룹            | .slick-slider.클래스명 .slick-list |
  | 개별 슬라이드            | .slick-slider.클래스명 .slick-list .slick-slide |
  | 보여지는 슬라이드        | .slick-slider.클래스명 .slick-list .slick-slide.slick-active |
  | 인디케이터 그룹 (ul)     | .slick-slider.클래스명 .slick-dots |
  | 인디케이터 (li)          | .slick-slider.클래스명 .slick-dots > li |
  | 현재 인디케이터 (li)      | .slick-slider.클래스명 .slick-dots .slick-active|

