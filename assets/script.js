
//variables
let calendarRows = $("#cal-rows") 
let secondsId = setInterval(() => $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a')), 10)
//moment
$("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
let htmlCode = ""
let currentHour = moment().hours()
// loop for rows and hours
for (let i = 7; i < 20; i++) {
    let dailyPlans = localStorage.getItem(i) || "What is your Schedule?";
    let classColor =""
    if(i < currentHour){
        classColor ="bg-secondary"
    } else if (i === currentHour){
        classColor ="bg-danger"
    } else {
        classColor ="bg-success"
    }
    let displayHour = ""
    if (i < 12 ) {
        displayHour = i + ":00 AM"
    } else if (i == 12) {
        displayHour = i + "Noon"
    } else {
        displayHour = (i - 12 ) + ":00 PM"
    }
    htmlCode += `
        <div id="hour-row-${i}" class="row ${classColor}">
            <div id="daytime-${i}" class="col-3">
                ${displayHour}
            </div>
            <textarea id="cal-imput-${i}" class="col-6">
              ${dailyPlans}
             </textarea>

            <button id="icon-select-${i}" class="col-3 select-icon">
                📝  
            </button>
        </div>
    `
}
$("#cal-rows").html(htmlCode)

//event bubbling
$("#cal-rows").on("click",".select-icon",function(){
    console.log("On click")
    let planSelect = $(this).siblings("textarea").val();
    let hourRep = $(this).siblings("textarea").attr("id").split("-")[2]
    console.log(planSelect, hourRep)
    localStorage.setItem(hourRep, planSelect);
});
//date picker
$(function() {
    $("#datepicker").datepicker();
  } );
