function square(number) {
  console.log("the number is:", number);
  const borgo = number * number;
  console.log("The square is: ", borgo);
}
square(4);
console.log("---------");
square(55);

function add(num1, num2) {
  const sum = num1 + num2;
  console.log("The Addition is: ", sum);
}
add(5, 7);

function addAll(a, b, c, d, e) {
  const total = a + b + c + d + e;
  console.log(a, b, c, d, e);
  console.log("Total is: ", total);
}
addAll(4, 6, 7, 3, 7);
addAll(4, 6, 7, 3);
addAll(4, 6, 7, 3, 5, 7);
// j koita parameter add kora thakbe sey koitar e value assign
//  kora lagbe...kom hole result asbe na...r beshi hole extra man
// ta count hobe na
