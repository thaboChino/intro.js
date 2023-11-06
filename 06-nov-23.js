let courses = ["Angular", "React","JavaScript","HTML"];
console.log(courses);
let learners = new Array(3);
learners[0]=1;
learners[1]=2;
learners[2]=3;
learners[3]=4;
learners[4]=5;

console.log(learners);
console.log(learners.length);

let courses_length = courses.length;
console.log(courses);

for (let i = 0; i < courses_length; i++){
    courses[i] = courses[i]+'';
}
console.log(courses.join('\n'));

console.log("Courses which are available is " + courses);
courses.push("Mathmatecourse','chemerstyles");
console.log(courses);
console.log(typeof courses);
//console.log(instanceof courses);

let faculty__=['Faculty of Arts & Design','conomics and Finance ' ,'Engineering and the Built Environment' ,'Humanities' ,'Information and Communication Technology '];


