/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const body = getNode("body");
const h1 = getNode(".nickName");
const visualImg = getNode(".visual img");
const navigation = getNode(".nav");
const list = getNodes(".nav li");

bindEvent(navigation, "click", handleClick);

function handleClick(e) {
  const li = e.target.closest("li");
  if (!li) return;

  selectImg(li);
  setBgColor(li);
  setImage(li);
  setNameText(li);
}

function selectImg(li) {
  list.forEach((element) => {
    removeClass(element, "is-active");
  });
  addClass(li, "is-active");
}

function setBgColor(li) {
  const index = li.dataset.index;
  const bgColorA = data[index - 1].color[0];
  const bgColorB = data[index - 1].color[1];
  if (!bgColorB) bgColorB = "#000";

  body.style.background = `linear-gradient(to bottom, ${bgColorA}, ${bgColorB})`;
}

function setImage(li) {
  const index = li.dataset.index;

  const imgSrc = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
  const alt = data[index - 1].alt;

  attr(visualImg, "src", imgSrc);
  attr(visualImg, "alt", alt);
}

function setNameText(li) {
  const index = li.dataset.index;
  const nameText = data[index - 1].name;
  h1.textContent = nameText;
}
