// bài 1
//Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
function repeatString(str) {
  var str;
  let loopResult = "";
  for (let i = 0; i < 10; i++) {
    loopResult += str;
  }
  return loopResult;
}
console.log(repeatString("80;"));

// bài 2
//Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatSting(str) {
  var str;
  let loopResult = "";
  for (let i = 0; i < 10; i++) {
    loopResult += str + "-";
  }
  return loopResult;
}
console.log(repeatSting("a"));

// bai3
//Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1,
//hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
function truyen() {}

// baif 4
function chiahet5() {
  let n = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
      n = n + i;
    }
    return n;
  }
}
console.log(chiahet5(100));

// bài 5
// Viết function tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function thetichmatcau(r) {
  let PI = 3.14;
  return (4 / 3) * PI * r * r * r;
}

console.log(thetichmatcau(4));

//bai 6
//Viết hàm function vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng

// bài 7

function laSoNguyenTo(n) {
  let prime = true;
  if (n < 2) prime = false;
  else if (n === 2) prime = true;
  else if (n % 2 === 0) prime = false;
  else {
    for (let i = 3; i < n - 1; i += 2) {
      if (n % i === 0) prime = false;
    }
  }
  return prime;
}
console.log(laSoNguyenTo(17));
console.log(laSoNguyenTo(48));

// bài 8
//Cho 1 số nguyên dương bất kỳ. Viết function tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function flotinhhe(n) {
  let tong = 0;
  for (let i = 3; i < n - 1; i += 2)
    if (n > 3 && n % i === 0) {
      tong = tong + n;
    }
  return tong;
}
console.log(flotinhhe(195));
console.log(flotinhhe(70));

// bài 9
function Tong_UocSo(N) {
  let tong = 0;
  for (let i = 1; i <= N; i++) {
    if (N % i == 0) tong += i;
  }

  return tong;
}
console.log(Tong_UocSo(15));
console.log(Tong_UocSo(36));
