for (let i=1  ; i <=10; i++){
console.log (i)
}
    // begin : khai báo tham số vòng lặp
    // condition : điều kiện để vòng lặp chạy ( điều kiện phải đúng)
//step : tăng hoặc giảm giá trị của tham số vòng lặp sau mỗi lượt
// có thể khai báo nhiều vòng lặp, phân tách nhau bằng dấu
// có thể kết hợp nhiều điều kiện với toán tử logic
// bước cập nhật tham số 
const boxes = document.querySelector(".boxes");
const points = document.querySelector(".points");
const btn = document.querySelector("#btn");
let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
function createBOx(color) {
  const div = document.createElement("div");

  div.classList.add("box");
  div.style.backgroundColor = color;

  div.addEventListener("click", function () {
    div.remove();
    points.innerText = boxes.children.length;
  });

  return div;
}

function render() {
  for (let color of colors) {
    const div = createBOx(color);

    boxes.append(div);
  }

  points.innerText = boxes.children.length;
}
btn.onclick = render;

render();

// default event
// propagation
// delegation
// capture/bybble

// event-sự kiện là tín hiệu khi một điều gì đó xảy ra trên DOM , tất cả cscs node trong DOM đều có thể kích hoạt các event
// vd1
//  const btn = document.querySelector("button")

//  btn.onclick = function(){
//     console.log("á á á á ");
//  };
// vd2
//  const btnUp = document.querySelector(".btn-up");
//  const btnDown = document.querySelector(".btn-down");
//  const value = document.querySelector(".counter-value");

//  btnUp.onclick = function(){
//     value.innerText = Number(value.innerText)+1;
//  };
//  btnDown.onclick = function(){
//     value.innerText -=1;
//  };

//  function demo (){
//     console.log("chạy demo");
//  }
//  // cái này hay nhầm nhất
//  btnDown.onclick= demo();
//  // thống nhất sử dụng thuộc tính DOM

// vd3
// function f1(){
//     console.log("chạy hàm F1");
// }
// function f2(){
//     console.log("chạy hàm F2");
// }
// chỉ cho phép gắn 1 hàm cho 1 sự kiện cụ thể
// btnDown.onclick = function(){
//     f1();
//     f2();
// };
// eventType KO CÓ "ON"
//  btnUp.addEventListener(//eventType,handler,option
//   "click",f1);
//   btnUp.addEventListener("click",f1);

//   btnUp.removeEventListener("click",f2);

// const key = document.querySelector(".key");

// window.onkeypress = function(event){
//     key.textContent = event.key.toUpperCase();};

    // click => button
    // submit => form
    // change => input/textarea/select
    // keydown/keyup => window
 // chú ý 
//tùy thuộc vào loại sự kieenj , thì evenObj sẽ có các thuộc tính  khác nhau 
// các thuộc tính thường dùng 
//  e.target- phần tử kích hoạt sự kiện 
// e.currentTargeet - phaanf tử đc gắn trình sử lí

//e.target=> input=> truy cập tất cả các input

const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener('input', function(e){
  e.target.value;

  p.innerText = e.target.value;
  // input/textarea => value
  // select => selected
  // checkbox/radio => checked

});
//