/**
 * write a function that will return only the even numbers
 * return the sum of the even numbers
 *
 */
// the array of even numbers
function evenNumbersOnly(numbers) {
  let even = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }
  return even;
}

const numbers = [2, 3, 35, 5, 6, 8];
// const evens = evenNumbersOnly(numbers);
// console.log("the even numbers are:", evens);

// The sum of even numbers
function sumOfEven(numbers) {
  let sum = 0;
  for (number of numbers) {
    if (number % 2 === 0) {
      sum = sum + number;
    }
  }
  return sum;
}
const sum = sumOfEven(numbers);
console.log("Thw sum of even number is:", sum);
