console.log(Math.random());// tạo số ngẫu nhiên 0-1
// tạo ra một gtri ngẫu nhiên trong một khoảng
Math.floor(Math.random()*(max-min)+min);
Number.isNaN(NaN);// kra gtri có phải nan k
//string
// có tính chất gần giống mảng
//từng kí tự bên trong chuỗi đều được đnhs số thứ tự cụ thể tươnguwngs
// tt bắt đầu từ 0
012345678
// khi mà mình nói 
// nó cho phép mình truy cập trực tiếp đến kí tự thông qua index

"lan anh"
console.log(str[1]);//"a"
// nó là object
str = {
  0 : "L"
  1:"a"
}
console.log(str[0]);
console.log(str.length);// độ dài - số thứ tự trong chuỗi 
//không được thay đổi kí tự bên trong chuỗi, không dc phép lm gây lôi
//String.prototype

trim 
toLowercase
touppercase
replace
replaceall
includes
index0f
split() // cắt chuỗi thành 1 mảng các từ r trả về mảng
includes()
// datetime
// đại diẹn cho gtri thời gian
// bắt buộc dùng đối tượng vì bên trong rất nhiều thứ

const present=new Date(); // thời gian hiện tại
const New birthday = new Date ("2000-05-10"); // mặc định 00:00:00
// dựa trên số milisecond đã trôi qua kể từ thời đieenr
// 2000-05-10 00:00:00 -> EPOC TIME
const today = new Date(now);
console.log(present);
console.log(birthday);
console.log(now);
console.log(today);
// khi dùng cách này month bắt đầu từ 0-11
// còn liên qua đến mũi giờ

const dob = new Date(1992, 4, 24, 7);// khi nhìn vào đây sẽ là tháng 5

console.log(dob);
// có 2 dạng hàm 
// Getter
console.log (present.getFullYear());
console.log(present.getMonth());
console.log(present.getDate());
console.log(present.getDay());// thứ trong tuần 0-6

console.log(present.toDateString());
console.log(present.toTimeString());
console.log(
  present.toLocaleString("vi",{
 year: "numeric",
 month:"long",
 day:"numeric",
 weekday:"narrow",
 dayPeriod:"long",


}))
// Setter
// khi gtri thời gian thiết lập vượt quá phạm vi
// sẽ tự điều chỉnh tăng / giảm cho phù hợp 
// tháng 2 => 29=> 1/3
present.setFullYear(1999);
// Array
// tập hợp  các gtri được lưu trữ trong 1 biến 
//khác với object, các gtri trong mảng k có key
const Arr = [ 1, 2 ,3];
//            1, 2 , 3
// các gtri (phần tử ) trong mảng phân tách bằng dấu , mảng dùng [] ngoặc vuông

// tính chất của mảng 
// các phần tử trong mảng được đánh số thứ tự ( chỉ mục - index)
// bắt đầu từ 0
// vì nó có chỉ mục nên có thể truy cập phần tử thông qua chỉ mục
console.log(arr[0]);//1
console.log(arr[2]);//3
// có thể thay đổi các gti về phần tử
arr[0]=100;
console.log(arr);
arr[2]=30;
console.log(arr);
//Lưu ý:
console.log(typeof arr);// "object"
console.log(Array.isArray(arr)); // true

// thuộc tính length sẽ tự động thay đổi khi thêm / xoá phần tử trong mảng 
// có thể tuỳ ý thay đổi length ( nhưng có thể ảnh hưởng phần tử trong mảng )
ar[4]=5;// thêm 1 phần tử mới
arr[arr.length]=5;// cách thêm môitj phần tử mới vào cuối mảng 
// một số mẹo cho length
arr[arr.length-1];// truy cập phần tử cuối cùng 
arr.length=100;// thêm phần tử empty vào cuối mảng 
arr.length=0;// xoá phần tử trong mnagr
// Ví dụ :
const arr = [1, 2, 3, 4];//[3,2,1,4]
// đỏi chỗ 2phaanf tử hoặc đổi 2 biến
let temp = arr[0];//1
arr[0]=arr[2];//bốc 3 sang vị trí 1
arr[2]=temp;
// duyệt mảng 
// có nhiều phương thức duyệt mảng
// có thể truy cập được cả index và value
for ( let index = 0 ; index < arr .length;index++){
  console.log(arr[index]);

}
let str ="Lan anh";
for (let index = 0; index < str.length; index++) {
  console.log (str[index]);
  
}
// chỉ duyệt qua gia trị
for (let value of arr ){
  console.log(value);
}
  
// tính tổng các số trong mảng
const arr = [4,3,5,9,10,2]
function sumAll(arr) {
 let sum = 0;
 for ( let value of arr) {
  sum += value;

 }

}
arr.includesa(3); // true
arr.indexOf(5);// 2
arr.slice(1,4);//[ 3,5,9]
arr.unshift(9);//thêm vào đầu -8 ( new length)
Arr.push(21);// ( thêm vào cuối - new length)
arr.pop();//21- xoá ở cuối
arr.shift();//9 - xoá giá trị ở đầu 
arr.reverse();// [ 2,10,9,5,3,4]
arr.concat([1,2,3,]);// trả về mảng mới
arr.join("-");//


// duyệt qua mảng , gọi hàm callback 1 lần với mỗi  gtri 
// k có gtri trả về , và cũngk ngắt được foreach
arr.forEach(console.log);

// tìm một gtri đầu tiên phù hợp với yêu cầu
// được đánh giá bởi hàm callback tuyền vào
const i =   arr.findIndex(isPrime);
console.log(i);
// tìm gia trị phù hợp với yếu cầu
// được đánh giá bởi callback
arr.filter()
let result = [];
for ( let value of arr)
let result = arr .filter(isPrime);
console.log(result);
// chuyển đổi tất cả trong mảng thàng gtri mới 
// gtri mới được tnhhs toán bởi hàm callback truyền vào 
// mảng kết quả là mảng mới , khônng ảnh hưởng mảng ban đầu 
arr.map

//let spuare = [];
function pow(n){
  return n * n ;
}
 const spuare = arr.map(pow);
 console.log(spuare);

 let arr = [1,4,5,7,9,4,6,7];
 // let total = 0 ; // gtri tích luỹ 
 function sum(current,value) {
  return current + value;
 }
 const total = arr.reduce(sum,0);// 0 có thể gán cho total ban đầu
console.log(total);
