// counts how many times a string has the letter a or A

const string = `Count how AAAAAAA  aaaaaaaaaa times a string has the letter a or A

`;
let count = string.match(/[aeiou]/gi);
count ? console.log(`the count of a: ${count.length}`) : console.log(`nothing`);
let counts = string.match(/A/g);
