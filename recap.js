function add(price1, price2) {
  const total = price1 + price2;
  return total;
}
// console.log(add(4, 7));
const bill = add(5, 80);

function add2(price1, price2) {
  return price1 + price2; // variable e declare na kore direct return er por condition declare kora jai
}
const bill2 = add2(5, 80);
console.log(bill, bill2);

function doMath(num1, num2) {
  const sum = num1 + num2;
  const multiply = num1 * num2;
  const diff = multiply - sum;
  const division = diff / 2;
  return division;
}
console.log(doMath(5, 6)); // variable e assign na koreu ey vabe console.log kora jai
