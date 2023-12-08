/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const WELCOME_PAGE_URL = "welcome.html";

// element
const inputEmail = document.querySelector("#userEmail");
const inputPw = document.querySelector("#userPassword");
const loginForm = document.querySelector(".login-form");

// input eventListner 등록
inputEmail.addEventListener("input", handleInput);
inputPw.addEventListener("input", handleInput);

// form eventListner 등록
// button 클릭시 submit되지 않도록 preventDefault
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // email과 pw 모두 유효성 검사 통과시 user객체와 비교
  if (emailReg(inputEmail.value) && pwReg(inputPw.value)) {
    if (inputEmail.value === user.id && inputPw.value === user.pw) {
      window.location.href = WELCOME_PAGE_URL;
    } else {
      alert("아이디와 비밀번호를 확인해주세요");
    }
  }
});

// input 이벤트 핸들러
// switch문 사용하여 input id값에 따라 정규식 선택하여 inputValid의 argument로 전달
function handleInput() {
  switch (this.id) {
    case "userEmail":
      inputValid(this, emailReg);
      break;
    case "userPassword":
      inputValid(this, pwReg);
      break;
  }
}

function inputValid(el, regFunc) {
  if (regFunc(el.value)) {
    removeClass(el, "is--invalid");
  } else {
    addClass(el, "is--invalid");
  }
}

// 해당 element에 class추가
function addClass(el, className) {
  el.classList.add(className);
}

// 해당 element에 class삭제
function removeClass(el, className) {
  el.classList.remove(className);
}

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
