//Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".



function getDay ( dateString ) {
  const wekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  return wekDays[new Date( dateString ).getDay()]
}

// Testing for some dates
console.log( getDay( "12/07/2016" ) );
console.log( getDay( "09/04/2016" ) );
console.log( getDay( "12/08/2011" ) );
