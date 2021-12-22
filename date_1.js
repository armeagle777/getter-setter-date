



function monthsInterval(startDate, endDate){
  const start = startDate.getMonth()
  const end = endDate.getMonth() > start ? endDate.getMonth() : endDate.getMonth() + 12
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let result = [];
  for(let i =  start; i <= end && result.length < 12; i++ ){
    let j = i <= 11 ? i : i-12
    result.push(j)
  }
  return result.sort((a,b) => a-b).map(monthIndex => months[monthIndex]);
}



// Testing for some cases

let startDate = new Date(2017, 0, 1);
let endDate = new Date(2017, 2, 1);
console.log( monthsInterval( startDate, endDate ) );

startDate = new Date(2017, 11, 1);
endDate = new Date(2018, 0, 1);
console.log( monthsInterval( startDate, endDate ) );

startDate = new Date(2017, 0, 1);
endDate = new Date(2018, 0, 1);
console.log( monthsInterval( startDate, endDate ) );


