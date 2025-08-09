// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(zeroStr) {
  let count = 0;
  for (const str of zeroStr) {
    if (str === "0") {
      count++;
    }
  }
  return count;
}
const binary = "1010100000";
const count = count_zero(binary);
console.log(count);
