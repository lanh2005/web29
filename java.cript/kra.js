// XỬ LÍ SỐ
// c1
function thetichmatcau(r) {
  let PI = 3.14;
  return (4 / 3) * PI * r * r * r;
}

console.log(thetichmatcau(4));
// c2

// c3
function Tong_UocSo(N) {
  let tong = 0;
  for (let i = 1; i <= N; i++) {
    if (N % i == 0) tong += i;
  }

  return tong;
}
console.log(Tong_UocSo(15));
console.log(Tong_UocSo(36));

// c4
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

//c5
function flosuthantien(n) {
  let tong = 0;
  for (let i = 3; i < n - 1; i += 2)
    if (n > 3 && n % i === 0) {
      tong = tong + n;
    }
  return tong;
}
console.log(flosuthantien(195));

// XỬ LÍ CHUỖI
//c1
function capitalize(str) {
  str = str.toLowerCase();
  str = str[0].toUpperCase() + str.slice(1);

  let position = 1;
  let spaceIndex = str.indexOf(" ");

  while (spaceIndex !== -1) {
    str =
      str.slice(0, spaceIndex + 1) + // "anh em siêu nhân"
      str[spaceIndex + 1].toUpperCase() +
      str.slice(spaceIndex + 2); //'s fun'

    position = spaceIndex + 2;
    spaceIndex = str.indexOf(" ", position); // tìm ký tự đầu tiên
  }
  return str;
}
console.log(capitalize("javascirpt id Fun"));
// c2
function spinalCase(str) {
  let res = str.replace(/\s/g, "-");
  let result = res.replace(/_/g, "").toLowerCase();
  return result;
}
console.log(spinalCase("javascirpt ID Fun"));
// c3
// Mảng
