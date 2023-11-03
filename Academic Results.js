function results(mark) {
    if (mark >= 75 && mark <= 100) {
        return "Distinction";
    } else if (mark >= 50 && mark < 75) {
        return "Pass";
    } else if (mark >= 1 && mark < 50) {
        return "Fail";
    } else if (mark < 1) {
        return "Did not write";
    }
}

const mark = window.prompt("Please enter your mark for JavaScript");

if (mark !== null) {
    const resultsInput = parseInt(mark, 10);

    if (resultsInput > 0 && resultsInput <= 100) {
        const academicTranscript = results(resultsInput);
        console.log(`Mark is ${resultsInput}, Results are ${academicTranscript}`);
    } else {
        console.log("Please enter a valid mark");
    }
}
