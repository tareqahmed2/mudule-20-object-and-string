const senctence = "I am learing wb dev";
// cosnt result='.ved'
let reverse = "";
for (const letter of senctence) {
  //   console.log(letter);
  reverse = letter + reverse;
}
// console.log(reverse);
// others way

let rev = "";

for (let i = 0; i < senctence.length; i++) {
  //   console.log(i);
  //   console.log(senctence(i));
  const letter = senctence[i];
  rev = letter + rev;
}
console.log(rev);
// shortcut
const reversed = senctence.split("").reverse().join("");
console.log(reversed);
