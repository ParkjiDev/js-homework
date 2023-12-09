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

// 상태 저장
let inputStatus = {
  email: false,
  pw: false,
};

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

  // inputStatus 객체에 저장되어 있는 input 요소들의 status를 검사
  // 모든 value가 true일 경우 statusTest = true
  let statusTest = (() => {
    for (const key in inputStatus) {
      if (!inputStatus[key]) {
        return false;
      }
    }
    return true;
  })();

  // 모든 input요소의 상태가 true일 경우 입력값과 user객체에 저장되어 있는 값과 비교
  if (statusTest) {
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
      inputValid(this, emailReg, "email");
      break;
    case "userPassword":
      inputValid(this, pwReg, "pw");
      break;
  }
}

// 정규식 이용하여 input값이 유효한지 검사
// 유효할 경우 is--invalid class 삭제, inputStatus에서 해당 프로퍼티의 값 true로 변경
// 유효하지 않은 경우 is--invalid class 추가, inputStatus에서 해당 프로퍼티의 값 false로 변경
function inputValid(node, regFunc, statusTarget) {
  if (regFunc(node.value)) {
    removeClass(node, "is--invalid");
    inputStatus[statusTarget] = true;
  } else {
    addClass(node, "is--invalid");
    inputStatus[statusTarget] = false;
  }
}

// 해당 노드에 class추가
function addClass(node, className) {
  node.classList.add(className);
}

// 해당 노드에 class삭제
function removeClass(node, className) {
  node.classList.remove(className);
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
