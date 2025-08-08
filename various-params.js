/**
 * for a given string tell me weather it has even characters or not
 */
function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("Size is Even");
    return true;
  } else {
    console.log("Size is Odd");
    return false;
  }
}
// evenSizedString("Dhaka");
// evenSizedString("Faka");
const dhk = evenSizedString("Dhaka");
const faka = evenSizedString("Faka");
console.log(dhk);
console.log(faka);

function doubleOrTripple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}
console.log(doubleOrTripple(5, true));
console.log(doubleOrTripple(5, false));

function numberOfElements(numbers) {
  const len = numbers.length;
  console.log("length is:", len);
  return len;
}
numberOfElements([22, 3, 345, 56565, 4, 6, 76]);

function getAge(person) {
  const age = person.age;
  console.log("Person age is:", age);

  return age;
}

getAge({
  name: "NFS",
  age: 30,
});
