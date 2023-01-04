let currentIndex = 0;
const items = document.querySelector(".carousel-inner");
const btnNext = document.querySelector(".carousel-next");
const btnprev = document.querySelector(".carousel-prev");
btnNext.onclick = function () {
    if ( currentIndex < items.children.length - 1) {
        currentIndex++;

        items.style.marginLeft = - currentIndex * 600 + "px";
        btnprev.disabled = false ;

    } else {
        btnNext.disabled  = true;
    }
};
btnprev.onclick = function () {
  if (currentIndex>0) {
    currentIndex++;

    items.style.marginLeft = --currentIndex * 600 + "px";
    btnNext.disabled = false;
  } else {
    btnprev.disabled = true;
  }
};