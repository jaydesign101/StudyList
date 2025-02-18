## 옵션 정리 (202502)
### Layout (레이아웃)
- slide : 개별 슬라이드 적용할 요소 태그
  - 'div', 'li'
- slidesToShow : 영역에 보여질 슬라이드 열의 개수
  - [int] : 1(기본)
- slidesToScroll : 좌우로 넘어갈 슬라이드 개수
  - [int] : 1(기본)
- rows : 영역에 보여질 슬라이드 행의 개수
- slidesPerRow : 행 기준 한줄에 들어갈 슬라이드 개수
  - [int] : 1(기본)
  - row (슬라이드 행 개수 설정)옵션 과 함께 사용
- centerMode : 가운데 슬라이드 활성화 여부
  - true : 가운데 슬라이드가 강조
  - false(기본) 가운데 슬라이드 비활성화
  - slidesToShow (영역에 보여질 슬라이드 개수) 옵션에 홀수 설정 필요
  - centerPadding (좌우 슬라이드 크기) 옵션과 같이 사용
- centerPadding : centerMode일때 이전/다음(좌우) 슬라이드가 보일 크기 설정
  - [단위] : px, %
- variableWidth : 슬라이드 너비 독립 여부 설정
  - true : 슬라이드 너비를 각각 다른 너비를 가질 수 있다 (텍스트 두줄이 될 때 사용 가능)
  - false : (기본) 슬라이드 너비가 같음
- vertical : 세로 방향 슬라이드 이동 여부
  - true, false (기본)
- verticalSwiping : 세로 슬라이드에서 스와이프 기능 활성화
  - true, false (기본)
- adaptiveHeight : 슬라이드 높이 자동 맞춤 여부
  - false : (기본) 슬라이드 높이 고정
  - true : 슬라이드 높이 자동 맞춤 
  
### Action (동작)
- infinite : 슬라이드 무한 반복 설정
  - true (기본), false 
- speed : 슬라이드 전환 속도 (ms)
  - [int] : 300(.3초, 기본)
- autoplay : 자동 슬라이드 재생
  - true, false (기본)
- autoplaySpeed : 자동 슬라이드 넘김 속도(ms)
  - [int] : 3000(3초, 기본)
- initialSlide : 슬라이드 시작 인덱스 설정
  - [int] : 0 (기본), index number
- pauseOnFocus : 포커스 받으면 슬라이드 자동재생 멈춤
  - true (기본), false
- pauseOnHover : 호버시 슬라이드 자동재생 멈춤
  - true (기본), false
- pauseOnDotsHover : Dots(인디케이터) 호버시 슬라이드 자동재생 멈춤
  - true, false (기본)


### Dots (인디케이터 / 네비게이션 / 페이지네이션)
- dots : 인디케이터 버튼 활성화
  - true, false (기본)
- dotsClass : 인디케이터 버튼 클래스 변경
  - [string] : '변경할 클래스명'
- appendDots : 인디케이터(네비게이션/페이지네이션) 버튼 변경(연결)
  - [string] : $('.인디케이터으로 사용할 요소')
- customPaging : 인디케이터 버튼을 페이징네이션 버튼으로 커스텀
  - dots (페이징네이션 버튼) 옵션에 true 가 되어 있어야 customPaging이 활성화 됨
  - [함수] : 숫자, 이미지, 아이콘 등을 사용할 수 있다
  - 숫자 : 1/5, 2/5, 3/5, 4/5, 5/5 출력
    ```
    customPaging : function(slider, i) {
      return '<button>'+(i + 1)+ '/'+ slider.slideCount + '</button>' ; 
      }
    ```
    
### Arrow (화살표)
- arrows : 슬라이드 이동 가능한 화살표 버튼 활성화
  - true (기본), false
- appendArrows : 화살표 버튼 변경(연결)
  - [string] : $('.화살표로 사용할 요소')
- prevArrow : 이전(좌) 화살표 버튼 변경
  - [string] : $('.이전 화살표로 사용할 요소')
- nextArrow : 다음(우) 화살표 버튼 변경
  - [string] : $('.다음 화살표로 사용할 요소')

### Effect (효과)
- cssEase : CSS 모션 (transition-timing-function of CSS)
  - 'ease' : (기본) 느림-빠름-느림
  - linear (일정한 속도), ease-in (천천히 시작), ease-out (천천히 멈춤), ease-in-out (천천히 시작&끝)
- useCSS : CSS Transition 적용 여부
  - true (기본), false
  - CSS의 transform  를 사용한다
- useTransform : CSS Transition 적용 여부
  - true (기본), false
  - (옛날 방식) CSS의 left/top를 사용한다
- easing : jQuery의 기반 애니메이션 사용
  - 'linear' : (기본)일정한 속도, 'swing' : 부드럽게 시작&끝
  - swing과 linear 는 jQuery의 내장기능으로 바로 사용가능하지만 다른 효과를 사용하려면 jQuery UI easing 라이브러리를 설치해야 한다
- fade : 슬라이드 페이드 효과 적용 여부 (원래는 좌우로 넘어가는 효과임)
  - true : 페이드 효과 활성화
  - false : (기본)기본 슬라이드 효과
  - slidesToShow (슬라이드가 보여지는 개수)가 1일 때만 가능하다
- edgeFriction : 처음&마지막 슬라이드 저항 효과 적용 여부
  - [float] : 0.15 (기본), 0 ~ 1 사이
  - 처음&마지막 슬라이드 이동시 0으로 설정하면 딱딱하게 이동하고, 1로 설정하면 부드럽게 더 멀리 갔다가 다시 돌아온다
- waitForAnimate : 슬라이드 애니메이션이 끝날때까지 슬라이드 전환 금지
  - true (기본), false

### User Event (사용자 입력&조작)

- draggable : 마우스 드래그 활성화 (마우스로 좌우로 이동 가능)
  - true : (기본) 마우스 드래그로 슬라이드 이동 가능 (PC)
  - fasle : 마우스 드래그로 슬라이드 이동 불가능
- swipe : 터치 활성화 (터치로 이동 가능)
  - true : (기본) 터치로 슬라이드 이동 가능 (모바일)
  - fasle : 터치로 슬라이드 이동 불가능
  - 터치를 허용할지 비허용할지 결정하는 옵션
- touchMove : 터치로 슬라이드 이동 허용 여부
  - true (기본), false
  - 터치(swipe)가 허용되었을때 슬라이드 터치로 이동을 허용할지 비허용할지 결정하는 옵션
- touchThreshold : 터치 감도
  - [int] : 5 (기본)
  - 이전/다음 슬라이드 전환시 터치로 드래그 하는 길이 (숫자가 작으면 길게 드래그, 숫자가 크면 짧게 드래그 하면 슬라이드가 전환, 숫자가 클수록 민감도가 높아짐)
  - 슬라이드 전환 드래그 길이 : (1 / N) * 슬라이드 너비
    - 1 : (1/1) * 300 = 300px 이동해야 슬라이드 전환
    - 5 : (1/5) * 300 = 60px 이동해야 슬라이드 전환
    - 10 : (1/10) * 300 = 30px 이동해야 슬라이드 전환
- swipeToSlide : 원하는 위치까지 슬라이드 이동 가능
  - true, false (기본)
  - slidesToScroll(좌우로 넘어갈 슬라이드 개수) 옵션 설정과 무관하게 원하는 슬라이드까지 이동 가능
- focusOnSelect : 클릭한 슬라이드로 이동
  - true : 슬라이드들 중 한 슬라이드를 클릭하면 가운데로 오면서 이동
  - false : (기본) 슬라이드 클릭 이동 불가능


### Responsive (반응형)
- responsive : 반응형(breakpoint) 설정
  - null : (기본) 반응형 미설정
  - 작성 방법 : breakpoint (적용 화면 크기), setting (변경할 옵션, 객체 형태)
  ```
  $('.slider').slick({
    slidesToShow: 4, // 기본값: 데스크톱에서 4개 보임
    responsive: [
      {
        breakpoint: 1024, // 화면이 1024px 이하일 때
        settings: {
          slidesToShow: 3, // 3개 보임
          arrows: false // 화살표 비활성화
        }
      },
      {
        breakpoint: 768, // 화면이 768px 이하일 때
        settings: {
          slidesToShow: 2 // 2개 보임
        }
      },
      {
        breakpoint: 480, // 화면이 480px 이하일 때
        settings: {
          slidesToShow: 1 // 1개 보임
        }
      }
    ]
  });

  ```
- respondTo : 반응형 적용 기준, responsive에서 설정한 breakpoint 가 어떤 기준으로 반응할지 설정하는 옵션
  - 'window' : (기본) 브라우저 창 ```window.innerWidth``` 기준으로 반응
  - 'slider' : slick 슬라이더 너비 ```($('.slider').width())``` 기준으로 반응
  - 'min' : window 와 slider 중 더 작은 값을 기준으로 반응
- mobileFirst : 반응형 옵션을 모바일 우선으로 적용
  - true : 모바일 우선, 큰화면 → 작은화면에서 큰화면 순서로 responsive 설정 필요
  - false : (기본) 데스크톱 우선 →큰 화면에서  작은 화면 순서로 responsive 설정 필요

### 기타
- accessibility : 접근성 여부
  - true : (기본) 웹 접근성 가능
  - false : 웹 접근성 불가
- asNavFor : 슬라이드 동기화
  - [string] : $('.서로 동기화할 슬라이드 요소')
- lazyLoad : 이미지 로딩 방식 설정
  - null : (기본) 지연 로등 비활성화
  - 'ondemand' : 슬라이드가 넘어갈때 해당 이미지만 로드
  - 'progressive' : 슬라이드 모든 이미지 미리 로드
- rtl : 슬라이드 방향이 오른쪽에서 왼쪽으로 변경
  - true (오른쪽 방향), false (기본, 왼쪽 방향) 
- zIndex : 슬라이드 요소의 z-index 값 설정
  - [int] : 1000 (기본)

---
## 옵션 초기화
```
$('.클래스명').slick({

});
```


