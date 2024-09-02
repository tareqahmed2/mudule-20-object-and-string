const school = "RAJ UK UTTARA Model SCHOOL";
console.log(school.toLowerCase());
const subject = "Chemistry";
const book = "chemistry";
if (subject.toLowerCase() == book.toLowerCase()) {
  console.log("i am reading book i will do my best on next semester");
} else {
  console.log("kono porasona nai");
}

const drink = "water";
const liquid = "            water";
if (drink.trim() === liquid.trim()) {
  console.log("pani nai");
} else {
  console.log("somodre pani ase");
}
const address = "andorKIlla";
const part = address.slice(2, 5);
