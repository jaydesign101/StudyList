## 소개
- https://animate.style/
- CSS 애니메이션 라이브러리
- HTML 요소 클래스명에 이름을 지정하여 애니메이션을 적용

## 사용 방법
### 1. Animate.css 연결
- CDN
```
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
```

### 2. [HTML] 애니메이션 적용할 요소에 클래스명 지정
```
<h1 class="animate__animated animate__bounce">An animated element</h1>
```
  - 클래스명에 접두사 "animate__" 붙여서 옵션 지정 (지연시간, 작동시간, 반복횟수)
  - 필수 클래스명 : 'animate__animated' 'animate__애니메이션이름'
  - 클래스명은 공식 문서 가면 복사하여 사용할 수 있음

#### * 옵션 정리 (클래스명)
- 지연 시간
  - ```animate__delay-2s``` : 2s 지연
  - ```animate__delay-3s``` : 3s 지연
  - ```animate__delay-4s``` : 4s 지연
  - ```animate__delay-5s``` : 5s 지연
- 작동 시간
  - ```animate__slow``` : 2s 동안 작동
  - ```animate__slower``` : 3s 동안 작동
  - ```animate__fast``` : 800ms 동안 작동
  - ```animate__faster``` : 500ms 동안 작동
- 반복 횟수
  - ```animate__repeat-1``` : 1번 반복
  - ```animate__repeat-2``` : 2번 반복
  - ```animate__repeat-3``` : 3번 반복
  - ```animate__infinite``` : 무한 반복
