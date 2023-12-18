# mission01

일치하는 아이디와 비밀번호를 입력했을 경우 welcome 페이지로 이동하는 코드 로직을 작성해주세요.
<br/><br/>

### 결과 화면

https://github.com/ParkjiDev/test/assets/148675654/69049dab-d32e-42ae-9f88-1454718341b9
- [바로가기](https://parkjidev.github.io/js-homework/mission01/naver_login/)


<br/><br/>
### 요구사항

1. email 정규표현식을 사용한 조건처리
2. pw 정규표현식을 사용한 validation

![code-1](https://github.com/ParkjiDev/test/assets/148675654/d63c6ad7-3f49-4536-a7a1-2ed6c13621e2)

- handleInput function을 통해 inputValid fuction 호출시 검사하려는 대상에 따라 다른 인수를 전달하도록 함(노드, 정규식 종류, inputStatus의 프로퍼티명 전달)
- 유효성 검사 통과시 해당 노드의 is—invalid class를 삭제, inputStatus에서 email 프로퍼티 값을 true로 변경
- 유효성 검사 실패시 해당 노드에 is—invalid class를 추가, inputStatus에서 email 프로퍼티 값을 false로 변경
<br/>

3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
3. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

![code-3](https://github.com/ParkjiDev/test/assets/148675654/e3111a9f-79e3-42db-ba12-6af948c62bb4)

- 로그인 버튼 클릭시 submit을 막기 위해 preventDefault 사용
- 모든 input요소의 상태가 true일 경우 입력값과 user객체에 저장되어 있는 값을 비교하여 같은 경우 페이지 이동하도록 설정

<br/><br/>


### 참고사항

![code-2](https://github.com/ParkjiDev/test/assets/148675654/e8b5ea8e-38cc-4ed3-8b9a-2d38805ae268)

- inputStatus 객체를 선언하여 email과 pw의 유효성 검사 성공 여부에 따라 해당 프로퍼티의 값을 true/false로 저장하도록 함
