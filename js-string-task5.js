const letter =
  "my name is tareq ahmed currently i am a student of cse at eastern university. i have a dream to be good developer in future";
let capitalizeString = letter.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(capitalizeString);
