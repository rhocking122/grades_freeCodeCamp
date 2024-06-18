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

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(getGrade(100));
console.log(getGrade(92));
console.log(getGrade(63));
console.log(getGrade(83));
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));