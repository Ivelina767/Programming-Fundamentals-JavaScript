function requiredReading(pagesNumber, pagesOneHour, days){
let totalTimePagesInOneHour = pagesNumber / pagesOneHour;
let hoursPerDay = totalTimePagesInOneHour / days;

console.log(hoursPerDay);
}
requiredReading(432,
    15 ,
    4);