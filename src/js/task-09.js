function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const mainColor = document.querySelector("body");
const clickColor = document.querySelector('.change-color');
const changeColor = document.querySelector('.color');


clickColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  mainColor.style.backgroundColor = randomColor;
  changeColor.textContent = randomColor; 
})

