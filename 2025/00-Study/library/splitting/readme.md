## 소개
- https://splitting.js.org/
- 요소(텍스트, 그리드)를 분할하여 요소를 생성하여 텍스트 애니메이션를 적용할 수 있는 JS 라이브러리

## 사용 방법
### 1. Splitting.js 연결
- CDN
```
<script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
```
### 2. Splitting 초기화 코드 실행 작성
```
<script> Splitting(); </script>
```
### 3. [HTML] Splitting 적용할 요소에 data-splitting 속성 추가
```
<div data-splitting>This is SPLITTING!</div>
```
### 4. [CSS] 요소에 애니메이션 추가
- Splitting 홈페이지의 CodePen 예제 활용
- {display:inline-block;} 추가 작성 필요
- 단어는 .word 로 분리, 한 글자는 .char 로 분리 됨
```
    div .char {
      display: inline-block; /* inline-block 추가해야함! */
      animation: slide-in .3s cubic-bezier(.5, 0, .5, 1) both;
      animation-delay: calc(60ms * var(--char-index));
    }
    @keyframes slide-in {
      from {
        transform: translateY(-1em) rotate(-.5turn) scale(0.1);
        opacity: 0;
      }
    }
```