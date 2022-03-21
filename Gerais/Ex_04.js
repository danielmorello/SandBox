const dateOfToday = new Date();

//const arrayDate = dateOfToday.split(' ');

//const concatDate = arrayDate[2].concat('-', arrayDate[1], '-',arrayDate[3]);

const dayOfDate = dateOfToday.getDate() + 1;
const monthOfDate = dateOfToday.getMonth() + 1;
const yearOfDate = dateOfToday.getFullYear();

//console.log(concatDate);
console.log(dateOfToday);
console.log(dayOfDate);
console.log(monthOfDate);
console.log(yearOfDate);