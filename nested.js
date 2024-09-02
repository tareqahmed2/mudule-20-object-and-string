const college = {
  name: "vnc",
  class: ["10", "11", "12"],
  events: ["sceince fair", "bijoy dibos", "21 feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};
// console.log(college.unique.color);
college.unique.result["our-elevator"] = college.unique.result.merit;
console.log(college);
console.log(college.unique);
console.log(college.unique.result);
console.log(college.unique.result.merit);

college.unique.result.merit = "top top top top most";
console.log(college.unique.result.merit);
college.events[1] = "16 december";
console.log(college.events[1]);
delete college.class;
console.log(college);
