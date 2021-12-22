//Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as month/day/year, return the day-number of the year.


function dayOfYear(dateString){
  const [month,day,year] = dateString.trim().split('/').map(el => parseInt(el));
  return Math.ceil((new Date( year, month, day ).getTime() - new Date( year - 1, 12, 31 ))/ 86400000)
}

// Testing for some dates
console.log( dayOfYear( "12/13/2020" ) );
console.log( dayOfYear( "12/17/2020" ) );
console.log( dayOfYear( "11/16/2020" ) );
console.log( dayOfYear( "1/9/2019" ) );
console.log( dayOfYear( "3/1/2004" ) );
console.log( dayOfYear( "12/31/2000" ) );
