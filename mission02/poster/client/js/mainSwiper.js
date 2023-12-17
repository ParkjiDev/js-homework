const body = getNode("body");
const h1 = getNode(".nickName");

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: true,
  parallax: true,
  speed: 1000,
  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "bullet",
    bulletActiveClass: "is-active",
    renderBullet: function (index, className) {
      return /* html */ `
        <span class="${className}">
          <img src="./assets/${data[index].name.toLowerCase()}.jpeg" />
        </span>
      `;
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      const div = document.querySelector(".swiper-slide-active");
      setBgColor(div);
      setNameText(div);
    },

    touchEnd: function () {
      const div = document.querySelector(".swiper-slide-active");
      setBgColor(div);
      setNameText(div);
    },
  },
});

// 선택한 이미지에 따라 배경색 변경
function setBgColor(div) {
  const index = div.dataset.index;
  const bgColorA = data[index - 1].color[0];
  const bgColorB = data[index - 1].color[1];
  if (!bgColorB) bgColorB = "#000";

  body.style.background = `linear-gradient(to bottom, ${bgColorA}, ${bgColorB})`;
}

function setNameText(div) {
  const index = div.dataset.index;
  const nameText = data[index - 1].name;
  h1.textContent = nameText;
}
