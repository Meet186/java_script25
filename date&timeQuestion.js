// Q1 -> validate  that a user's selected date range is no longer than 30 days .
let nowDate = new Date('2025-04-23'); // formate - YYYY-MM-DDTHH-MM-SS-SSSZ
let userDate = new Date('2025-05-18');

let differance = userDate - nowDate;
let compareDate = Math.floor(differance / 1000 / 60 / 60 / 24);
// if(compareDate > 30){
//     console.log("validate is over !"); 
// } else {
//     console.log("validate till now");
// }
// Q2 -> calculate difference between two dates in the format "_year_months_days_hours_minutes_sec"
let datefirst = '2024-03-18T12:12:53Z';
let dateSecond = '2026-04-18T05:18:40Z';
function differanceDate(start, end) {
    start = new Date(start);
    end = new Date(end);
    let differanceINsec = (end - start) / 1000;
    let year = Math.floor(differanceINsec / (60 * 60 * 24 * 365));
    differanceINsec % (60 * 60 * 24 * 365);
    let months = Math.floor(differanceINsec / (60 * 60 * 24 * 30));
    differanceINsec % (60 * 60 * 24 * 30);
    let days = Math.floor(differanceINsec / (60 * 60 * 24));
    differanceINsec % (60 * 60 * 24);
    let hours = Math.floor(differanceINsec / (60 * 60));
    differanceINsec % (60 * 60);
    let minutes = Math.floor(differanceINsec / (60));
    let second = differanceINsec % (60);;
    console.log(`The DATE in format YY:MM:DD:THH-MM-SS : ${year}:${months}:${days}T${hours}-${minutes}-${second}`);
}5
// with using luxon libarary.
let  {DateTime}= require('luxon');
function differanceDate2(start, end) {
    let startDate = DateTime.fromISO(start);
    let endDate = DateTime.fromISO(end);
    let diff = endDate.diff(startDate,['years', 'months', 'days' , 'hours', 'minutes', 'seconds']);
    return `${diff.years}:${diff.months}:${diff.days}:${diff.hours}:${diff.minutes}:${diff.seconds}`;
}
console.log(differanceDate2(datefirst, dateSecond));
