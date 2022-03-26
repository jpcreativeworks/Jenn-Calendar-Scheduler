// this repeating the calendar rows

let calendarRows = $("#cal-rows") 
let secondsId = setInterval(() => $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a')), 10)
// console.log("calendarRows", calendarRows)
//current time
$("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));

