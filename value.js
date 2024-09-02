const person = {
  name: "sador uddin",
  age: 24,
  profession: "developer",
  salary: 25000,
  married: true,
  "fav places": ["bandhorban", "saintmartin"],
};
person.salary = 30000;
person["age"] = 26;
person["fav places"] = ["maldives"];
console.log(person);
const keyName = "profession";
console.log(person[keyName]);
const propName = "profession";
person[propName] = "devop";
console.log(person);
const computer = {
  brand: "lenovo",
  price: "35000",
  professor: "intel",
  hdd: "512gb",
};
const keys = object.keys(computer);
