// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(avgs) {
  let total = 0;
  let length = avgs.length;
  let result;
  for (const avg of avgs) {
    total = total + avg;
  }
  result = total / length;
  return result;
}
const numbers = [3, 5, 6, 7, 5, 8, 9];
const avg = make_avg(numbers);
console.log(avg.toFixed(2));
