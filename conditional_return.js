function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(5));
console.log(isEven(10));

// function isEven(num) {
//   if (num % 2 === 0) {
//     return "even"; evabe likhleu hobe
//   } else {
//     return "odd";
//   }
// }
// console.log(isEven(5));
// console.log(isEven(10));

function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  }
  return false;
}
console.log(isOdd(5));
console.log(isOdd(10));
