
const clock = document.querySelector(".clock");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const date = document.querySelector(".date");

function sync() {
    const now = new date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const wd = now.getDay();
    const d = now.getDate();
    const s = now.getSeconds();


}