// Count how many times a string has the letter a

let string = `Count how many times a string has the letter a`;
let count = 0;
for (char of string) {
  if (char === "a") {
    count++;
  }
}
// console.log(count);

// another ways
let counts = string.match(/a/g);
if (counts) {
  //   console.log(counts.length);
}
// another ways
counts ? counts.length : "";
