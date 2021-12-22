// Implement following function

function getWeekOfMonth(date){
  const day  = date.getDate()
  return Math.ceil(day/ 7)
}

// Testing for a date
console.log(getWeekOfMonth(new Date(2017, 10, 9))) //Expected 2
