



function monthsInterval(start, end){
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let [startMonth,endMonth] = [Math.min(start.getMonth(), end.getMonth()),  Math.max(start.getMonth(), end.getMonth())];
  let result = [];
  for(let i = (startMonth + 1); i <= endMonth; i++ ){
    result.push(months[new Date(2017, i, 1).getMonth()])
  }
  return result;
}





let jan = new Date(2017, 0, 1);
let dec = new Date(2017, 11, 1);
