const box = document.querySelector(".image-box");

const img = document.querySelector("img");
const times = document.querySelector(".times");
let count = 0;

function displayHeart(x, y) {
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.innerText = "❤";
  heart.style.position = "absolute";
  heart.style.top = "px";
  heart.style.left = "px";
  heart.style.transform = "translate(-50%,-50%)";

  box.append(heart);

  setTimeout(function () {
    heart.remove();
  }, 500);
}

function countup() {
  count++;
  times.innerText = count;
}

function like(e) {
  const x = e.offsetX;
  const y = e.offsety;
}
