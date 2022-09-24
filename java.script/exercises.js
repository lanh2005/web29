// **
//  * Tính chu vi hình chữ nhật
//  *
//  * @param {number} length Chiều dài hình chữ nhật
//  * @param {number} breadth Chiều rộng hình chữ nhật
//  *
//  * @return {number} Chu vi hình chữ nhật
//  */
function findPerimeterOfRectangle(length, breadth) {
  return (length + breadth) * 2;
}
console.log(
  "hình chữ nhật có chiều dài là 3 chều rộng là 4 thì có chu vi là",
  findPerimeterOfRectangle(3, 4)
);
/**
 * Tính diện tích hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Diện tích hình chữ nhật
 */
function findAreaOfRectangle(length, breadth) {
  return length * breadth;
}
console.log("Diện tích hình chữ nhật là", findAreaOfRectangle(3, 4));

/**
 * Tìm đường kính hình tròn
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number}  Đường kính hình tròn
 */
function findDiameterOfCircle(r) {
  return r;
}
console.log("đường kính hình tròn là", findDiameterOfCircle(2 * 2));
/**
 * Tìm chu vi hình tròn
 *
 * Quy ước PI = 3.14
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Chu vi hình tròn
 */
function findCircumferenceOfCircle(r) {
  return r;
}
console.log("chu vi hình tròn là", findCircumferenceOfCircle(3 * 3.14));

/**
 * Tìm diện tích hình tròn
 *
 * Quy ước PI = 3.14
 *
 * Bình phương sử dụng toán tử ** hoặc Math.pow()
 *
 * @param {number} r Bán kính hình tròn
 *
 * @return {number} Diện tích hình tròn
 */
function findAreaOfCircle(r) {
  return r * 2;
}
console.log("diện tích hình tròn là", findAreaOfCircle(4 * 3.14));

/**
 * Tính diện tích hình tam giác theo công thức Heron
 *
 * Link tham khảo công thức Heron: https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {number} Diện tích hình tam giác
 */
function findAreaOfTriangle(a, b, c) {
  return ((a + b + c) * (a + b - c) * (b + c - a) * (c + a - b)) / 4;
}

console.log("diện tích hình tam giác", findAreaOfCircle(5, 5, 5));

/**
 * Chuyển đổi nhiệt ở ở thang nhiệt Celsius sang Fahrenheit
 *
 * Tham khảo công thức chuyển đổi trên google
 *
 * @param {number} temp Nhiệt độ ở thang nhiệt Celsius
 *
 * @return {number} Nhiệt độ ở thang nhiệt Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  return temp * 1.8 + 32;
}
console.log("nhiệt độ ở thang nhiệt Fahrenheit là", celsiusToFahrenheit(4));
