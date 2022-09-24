console.log ("Hiển thị gì đó ở màn hình console")
// chuỗi -script//
"đậy là một chuỗi" 
'đậy cugx là một chuỗi'
//số-number//
1;
.1;
-12;
Infinity;
-Infinity;
NaN; //not a number//

// logic-boolean ( đúng hoặc sai)
true;
false;

// giá trị đặc biệt //
null;
undefined; 
//keyword namem = value;
// keyword : let , const , var
// name : chỉ bắt đầu bằng kí tự , không chứa kí tự đặc biệt
// value: string , number, boolean, null, underfined

let ten= "lan anh";
let tuoi=22;
let dangdihoc=true;
console.log(ten);
console.log(tuoi);
console.log(dangdihoc)

// từ đầu tiên viết thường , các từ tiếp theo trong  tên biến thì viết hoa chữ cái đầu tiên

// homNayLa
// hằng số ( giá trị mà mình có thể xác định từ đầu chương trình , và không bao giờ thay đổi ) thì viết hoa nối các từ bằng dầu gạch dưới 
const NGAY_SINH = ""
let x = 1;
let y = 2;
// số học - Arithmetic
// so sánh - Comparison
// gán - Assignment
// logo

// Bnary- bao gồm 2 toán hạng
// unary- chỉ cần 1 toán hạng

// let cong = x + y;//phép cộng
let tru = x -y ;// phép trừ 
x * y ;
x : y ;

console.log (x > y) ;
x < y;
let z = 123
-x;
+y;

// let x =1:
console.log(typeof x); //"number"

// function
// các câu lệnh được bọc trong một cái khối mã và gán cho một tên biến 
// cho phép tái sử dụng mã nhiều lần , nhiều nơi
// sử dụng cú pháp khai báo hàm 
// tham số - parameters - ()

function chao(ten) {
 console.log("một ngày " + ten + " đẹp trời ");
}
// đối số - arguments - các giá trị xác định cho tham số hàm 
chao( "Ba");//ten = "Ba"
chao("lanh");//ten="lanh"
// biểu thức hàm ( giống khai báo biến)
const tambiet = function () {
    console.log("my love");

};
tambiet();

function cong (a,b) {
    // console.log (a+b);
    // giá trị trả về 
    return a+ b;
}
cong(1,2); // tạo ra các giá trị

console.log(cong(1,2)); //3
console.log(cong(5, 4)); //3
console.log(cong(7, 6)); //13
console.log(cong(10,11)); //3
//1. chạy hàm cong
//2. hàm cong trả lại giá trị 3
//3. đặt hàm giá trị 3 vào biểu thức console.log
//console.log(cong(1,2))=> console.log(3) => in ra 3 màn hình