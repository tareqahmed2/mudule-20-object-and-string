// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let string = `xxxxxxxxxx       XXXXXXXXXXXXX yyyyyyyyyy YYYYYYYYYYYYYYYYYY`;

let updateStringx = string.replace(/x/g, "y").replace(/X/g, "Y");
let updateStringy = string.replace(/y/g, "x").replace(/Y/g, "x");
console.log(updateStringx);
console.log(updateStringy);
