const mobile = {
  brand: "samsung",
  price: "25000",
  color: "black",
  camera: "12mp",
  isNew: true,
};
// for of for array
// for in for object
for (const prop in mobile) {
  console.log(prop);
  console.log(mobile[prop]);
}

// another ways
const keys = Object.keys(mobile);
// console.log(keys);
for (const key of keys) {
  //   console.log(key);
  console.log(key, ":", mobile[key]);
}
