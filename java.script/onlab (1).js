function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}
console.log("1 + 2", add(1, 2));
console.log("1 - 2", sub(1, 2));
console.log("1 * 2", mul(1, 2));
console.log("1 / 2", div(1, 2));

const currentYear = 2022;

function calcAge(yearOfBirth) {
  console.log(currentYear - yearOfBirth);
}
calcAge(2000);
