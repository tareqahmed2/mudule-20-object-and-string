let myObject = {
  name: "tareq",
  age: 21,
  city: "dhaka",
  isStudent: true,
};
// object stored on array
const student = Object.keys(myObject);
console.log(student);
for (key of student) {
  //   console.log(key);
  console.log(`key: ${key}`, " | ", `type: `, typeof myObject[key]);
}
