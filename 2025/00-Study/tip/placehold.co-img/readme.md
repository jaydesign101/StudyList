## 소개
- https://placehold.co/
- placehold(문자나 이미지 등이 들어갈 자리에 임시로 채워 놓는 내용물) 이미지
- url로 색, 확장자, 텍스트, 크기, 폰트 등을 지정할 수 있다

## 사용 방법
- 이미지 경로에 placehold URL 링크 작성
- HTML
``` 
<img src="placehold URL">
```
- CSS
```
.image{
  background-image: url('placehold URL');
}
```

## 작성 방법
```
// 템플릿
https://placehold.co/너비x높이[@배수x][/배경색/텍스트색][.확장자]?[text=입력\n텍스트]&[font=폰트명]

// 실제 url
https://placehold.co/300x200@2x/orange/white.png?text=300x200\nPNG&font=Playfair Display
```
### 1. 크기 지정 (필수)
- 직사각형 : ```https://placehold.co/200x300```
- 정사각형 : ```https://placehold.co/200```
- 필수값으로 최소 이미지 크기는 10px x 10px이다

### 2. Retina 고해상도 이미지
- 2배수 : ```https://placehold.co/200@2x/gold/white/png```
- 3배수 : ```https://placehold.co/200@3x/skyblue/white.jpg?text=JPG```
- 고해상도 : 2배수 (@2x), 3배수 (@3x)
- 확장자 기본이 svg 이기 때문에 png, jpeg, gif의 확장자를 설정해줘야 한다
- 작성 위치 : 크기 지정 영역 뒷부분

### 3. 배경색&텍스트색
- 16진수값 : ```https://placehold.co/200/FFBC0F/fff```
- CSS 명 : ```https://placehold.co/200/skyblue/white```
- 배경 투명색 : ```https://placehold.co/200/transparent/red```

### 4. 확장자
- 확장자 PNG : ```https://placehold.co/200/gray/white/png?text=PNG```
- 확장자 jpg : ```https://placehold.co/200.jpg```
- 확장자 종류 : svg(기본), png, jpg, gif
- 작성 방법 : ① .확장자  ②/확장자
- 작성 위치 : 경로 끝

### 5. 텍스트 입력
- 텍스트 입력 : ```https://placehold.co/200/orange/white?text=Hello\nWorld```
- 작성 위치 : 파라미터
  - 파라미터 시작 : ?

### 6. 폰트
- Playfair Display 폰트 : ```https://placehold.co/200/green/white?text=Hello&font=Playfair Display```
- 폰트 종류 : Lato, Lora, Montserrat, Noto Sans, Open Sans, Oswald, Playfair Display, Poppins, PT Sans, Raleway, Roboto, Source Sans Pro
- 작성 위치 : 파라미터
  - 파라미터 구분 : &


