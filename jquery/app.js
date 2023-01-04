console.log($);
// là thư viện để cung cấp các cái thao tác với Dom
// ưu điểm : thao tác ngắn ngọn, dễ nhớ , thuận tiện.
// $ : đối tượng jquery hoặc không gian tên (namespace) => $() | $
// đối tượng hàm
// function hello() {
    hello.name = "ahahaha"
    hello()
    hello
//}


// có 2 cách tìm 
const h1 = document.querySelector("h1");// tìm1
const h1s = document.querySelectorAll("h1");//tìm tất cả 

const $h1 = $("h1");// tìm tất 
console.log($h1);


// chỉnh sửa 
h1.innerText = "cái gì đó";

console.log($h1.text());// getter - lấy nội dung của phần tử đầu tiên

$h1.text("something"); // setter - sửa nội dung cua tất cả phần từ

h1.innerHTML = "<span>thẻ html</span";// getter- lấy html của phần tử đầu tiên
$h1.html("<span>thẻ html</span>");// setter - sửa html của tất cả phần tử

console.log($h1.attr("id"));// getter - lấy thông tin về phần tử đầutiee

$h1.attr("id", "my-id");// setter - sửa id của tất cả các phần tử 
$h1.attr({
    id:"myId",
    title:"My Title",
    lang :"en",
})// setter - sửa cùng lúc nhiều thuộc tính
$h1.addClass("class1 class2 class3");
$h1.removeClass("class2 class3");
$h1.tonggleClass("check");
console.log($h1.hasClass("check"));

$h1.css("backround-color", "red");
$h1.css({
    backgroundColr: "Blue",
    with:"500px",
});

$h1.data({
    product : 1,
    quantity : 10:
});

console.log($h1.data());

const $input = $(#"input");

console.log($input.val());
$input.val("hihihi");

const $select = $("select");
console.log($select.val());
$select.val();

$input.remove();
