// we are use split on string to convert array

const address = "andorKIlla";

const part = address.slice(2, 5);
console.log(part);
const sp = address.slice(1, 3);
const total = address + "tareq" + sp + part;
console.log(total);

const sentence = `I am a good and hardworing persons`;
console.log(sentence.split(" "));
console.log(sentence.split("a"));
const friendsStr = "Rahim,kahim,dahim,lahim,fahim,sahim";
const friends = friendsStr.split(",");
console.log(friends);
// we are use join for convert array to string
const realFriend = ["Rahim", "kahim", "dahim", "lahim", "fahim", "sahim"];

console.log(realFriend.join());
console.log(realFriend.join("|"));
console.log(realFriend.join("-"));
