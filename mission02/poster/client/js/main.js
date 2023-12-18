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

const audio = [
  new AudioPlayer(`./assets/audio/ember.m4a`),
  new AudioPlayer(`./assets/audio/wade.m4a`),
  new AudioPlayer(`./assets/audio/clod.m4a`),
  new AudioPlayer(`./assets/audio/gale.m4a`),
];

// 이미지 클릭에 대한 eventListener 등록
bindEvent(navigation, "click", handleClick);

function handleClick(e) {
  const li = e.target.closest("li");
  if (!li) return;

  selectImg(li); // 이미지 선택시 흰색 테두리 박스 처리
  setBgColor(li); // 선택한 이미지에 따라 배경색 변경
  setImage(li); // visual img 변경
  setNameText(li); // 선택한 이미지에 따라 h1 변경
  setAudio(li); // 선택한 이미지에 따라 오디오 파일 재생
}

// 이미지 선택시 흰색 테두리 박스 처리
function selectImg(li) {
  list.forEach((element) => {
    removeClass(element, "is-active");
  });
  addClass(li, "is-active");
}

// 선택한 이미지에 따라 배경색 변경
function setBgColor(li) {
  const index = li.dataset.index;
  const bgColorA = data[index - 1].color[0];
  const bgColorB = data[index - 1].color[1];
  if (!bgColorB) bgColorB = "#000";

  body.style.background = `linear-gradient(to bottom, ${bgColorA}, ${bgColorB})`;
}

// visual img 변경
function setImage(li) {
  const index = li.dataset.index;
  const imgSrc = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
  const alt = data[index - 1].alt;

  attr(visualImg, "src", imgSrc);
  attr(visualImg, "alt", alt);
}

// 선택한 이미지에 따라 h1 변경
function setNameText(li) {
  const index = li.dataset.index;
  const nameText = data[index - 1].name;
  h1.textContent = nameText;
}

// 선택한 이미지에 따라 오디오 파일 재생
function setAudio(li) {
  const index = li.dataset.index;
  if (audio[index - 1].isPlaying()) return;
  audio.forEach((sound) => sound.stop());
  audio[index - 1].play();
}
