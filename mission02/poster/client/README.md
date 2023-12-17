
# mission02
썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성해주세요.

### 결과 화면
https://github.com/ParkjiDev/test/assets/148675654/e1279157-e50d-46d8-b3d3-a715882110af

### 요구사항

1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
    1. 이벤트 위임
    2. 반복문<br/>
<img src="https://github.com/ParkjiDev/test/assets/148675654/4b9f4080-ad50-4220-86d5-f6f4e35f8cb3"  width="60%" height="60%"/><br/>
- 이미지 클릭시 부모 요소중 가장 가까운 li 요소를 선택하도록 함. 해당하는 li요소가 없을 경우 return하여 함수 실행 종료.
<br/><br/>
2. 이미지와 색상의 데이터는 `data.js` 에서 불러와주세요.
3. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
    1. 배경색 변경 ( colorB의 기본값은 `#000` 으로 한다 )
    2. 이미지 변경<br/>
<img src="https://github.com/ParkjiDev/test/assets/148675654/3615aa89-fff4-4f40-af98-22df1316c200"  width="70%" height="70%"/><br/>
- data-index 값을 이용하여 배경색과 이미지 주소를 설정함.
<br/>
4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.
<img src="https://github.com/ParkjiDev/test/assets/148675654/29d0ae25-7479-425a-b178-d44061ee93b4"  width="60%" height="60%"/><br/>
<br/>
5. 함수를 분리시켜주세요.

<img src="https://github.com/ParkjiDev/test/assets/148675654/4b9f4080-ad50-4220-86d5-f6f4e35f8cb3"  width="60%" height="60%"/><br/><br/>
6. 가독성이 좋은 코드로 리팩토링 해주세요.<br/>
<img src="https://github.com/ParkjiDev/test/assets/148675654/b228a902-4739-41c6-a1f4-4c47f28970f7"/><br/>
- 공통으로 사용할 수 있는 함수는 lib폴더 내에 각각 js파일로 분리하여 관리
<br/>

### 추가사항
- 오디오 재생<br/>
<img src="https://github.com/ParkjiDev/test/assets/148675654/41559a42-c57e-49a3-9c33-346aaf21f167"  width="60%" height="60%"/><br/>

### 진행중
 - swiper로 슬라이드 변경 해보는 중
