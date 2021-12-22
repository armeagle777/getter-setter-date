//Implement following function

const formatDate = (date) => {
  const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
  return `${date.getDate()} ${months[date.getUTCMonth()]} ${date.getFullYear()}`
};

console.log(formatDate(new Date("2020-05-14")));//"Expected output", "14 May 2020"
