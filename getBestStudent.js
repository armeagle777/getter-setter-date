// The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.

const givenObj = {}


function getBestStudent ( obj ) {
  let bestStudentName = 'Nobody';
  let bestGrade = 0;
  for(let student in obj){
    const average  = obj[student].reduce( (a,b) => (a + b))/obj[student].length
    if(average > bestGrade){
      bestStudentName = student;
      bestGrade = average;
    }

  }

  return bestStudentName ;

}


//Testing for an object
console.log( getBestStudent( givenObj ) );
