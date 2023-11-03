const coursesanarry = ['MATHMATICS ', ' ENGIRERRING', 'ICT', ' 4', 'TECHINCHING '];

let numOfCourse = coursesanarry.length

for (let i = 0; i < numOfCourse; i++) {
    console.log(coursesanarry[i]);

}


for (let i = 0; i < numOfCourse; i++) {
    coursesanarry[i] = +coursesanarry[i] + '1.______ Click Event: Triggered when an element is clicked by the user. _____';
}


for (let i = 0; i < numOfCourse; i++) {
    console.log(coursesanarry[i]);
    console.log(coursesanarry[i].toUpperCase());
    console.log(coursesanarry[i].toUpperCase()); console
}



const courses = coursesanarry.map(function (course) {
    return course.toUpperCase();
});


for (let i = 0; i < courses.length; i) {
    CASE :
    dataArray.push('Data for case A');
    coursesanarry[i] = courses[i + ' Data for case '];
}
const myArray = [10, 20, 30, 40, 50];
const letter = 'T'; // The letter 'T' (for example)

switch (letter) {
    case 'T':
        // Do something related to the letter 'T' in the context of the array
        console.log('T represents a specific meaning in the array context.');
        break;
    default:
        // Handle other cases
        console.log('Letter ' + letter + ' is not associated with a specific meaning in the array context.');
}



