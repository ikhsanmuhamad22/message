const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-first");
const btnSecond = document.querySelector(".btn-second");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "makasihhhhh ❤️❤️";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  btnGroup.remove();
  btnSecond.style.visibility = "visible";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Kurangi ukuran tombol tanpa batas minimum
  const currentWidth = noBtn.offsetWidth;
  const currentHeight = noBtn.offsetHeight;

  const newWidth = currentWidth * 0.9;
  const newHeight = currentHeight * 0.9;

  noBtn.style.width = newWidth + "px";
  noBtn.style.height = newHeight + "px";

  // Perkecil ukuran font sebanding
  const currentFontSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
  const newFontSize = currentFontSize * 0.9;
  noBtn.style.fontSize = newFontSize + "px";
});
