function doubleIt(number) {
  const double = number * 2;
  console.log(number, "double", double);
}
doubleIt(3);
console.log("---------");
doubleIt(33);
console.log("---------");
doubleIt(4565);
const number = 44;
doubleIt(number);
// j value/variable diye function k call kora hoi take arguments bole

function difference(num1, num2) {
  const differ = num1 - num2;
  console.log(num1, num2, "differ", differ);
}
difference(40, 30);
const fatherAge = 66;
const sonAge = 33;
difference(fatherAge, sonAge);
