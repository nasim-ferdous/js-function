function tenTime(number) {
  const result = number * 10;
  return result;
  console.log(); //return korar por console.log kore lav nai
}
tenTime(5);
const output = tenTime(5); // return kora function er value ekta alada variable e store kora jai
console.log("Output: ", output);

const bigNumber = tenTime(999);
console.log("Output: ", bigNumber);
