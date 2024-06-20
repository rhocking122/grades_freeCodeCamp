//way to find an average of an array
/* function getAverage(scores) {
   let sum = 0;
   for (const score of scores) {
     sum += score;
   }
   return sum / scores.length;
 } */

// another way to find the average of an array

function getAverage(scores) {
  let sum = 0;
  for (let i=0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};

function getGrade(scores) {
  if (scores === 100){
    return "A++"
  } else if (scores >= 90) {
    return "A"
  } else if (scores >= 80) {
    return "B"
  } else if (scores >= 70) {
    return "C"
  } else if (scores >=60) {
    return "D"
  } else {
    return "F"
  }
};

function hasPassingGrade(scores) {
  return getGrade(scores) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const classAverage = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);

  if (passed) {
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`;
  } else {
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 47)); // "Class average: 71.7. Your grade: D. You failed the course."
console.log(studentMsg([45, 87, 98, 100, 86, 94, 67, 88, 94, 95], 95));