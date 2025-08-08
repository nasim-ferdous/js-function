/*
 * Objective: write a function to give me the sum of all numbers in an array
 * Step 1: Declare a function
 * Step 2: Call & check weather the function is called properly
 * Step 3: Set a parameter(s)
 * Step 4: pass the parameter(s), check the parameter is passed in proper
 *  format.
 * Step 5: Do the operation task(step by step)
 */

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum = sum + number;
  }
  return sum;
}
const nums = [2, 5, 7, 9];
const sum = sumOfNumbers(nums);
console.log("sum of the numbers is:", sum);
