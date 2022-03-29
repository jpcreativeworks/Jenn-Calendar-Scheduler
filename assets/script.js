// this repeating the calendar rows



let calendarRows = $("#cal-rows") 
let secondsId = setInterval(() => $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a')), 10)
// console.log("calendarRows", calendarRows)
//current time
$("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
let htmlCode = ""
let currentHour = moment().hours()

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
                Select Icon
            </button>
        </div>
    `
}
$("#cal-rows").html(htmlCode)

//Event Bubbling
$("#cal-rows").on("click",".select-icon",function(){
    console.log("On click")
    let planSelect = $(this).siblings("textarea").val();
    let hourRep = $(this).siblings("textarea").attr("id").split("-")[2]
    console.log(planSelect, hourRep)
    localStorage.setItem(hourRep, planSelect);
});


//date picker 
// Data Picker Initialization
// $('.datepicker').datepicker({
//     inline: true
//   });

//date picker default values
// Strings and translations
//monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
// 'November', 'December'],
// monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
// weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
// weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
// showMonthsShort: undefined,
// showWeekdaysFull: undefined,

// // Buttons
// today: 'Today',
// clear: 'Clear',
// close: 'Close',

// // Accessibility labels
// labelMonthNext: 'Next month',
// labelMonthPrev: 'Previous month',
// labelMonthSelect: 'Select a month',
// labelYearSelect: 'Select a year',

// // Formats
// format: 'd mmmm, yyyy',
// formatSubmit: undefined,
// hiddenPrefix: undefined,
// hiddenSuffix: '_submit',
// hiddenName: undefined,

// // Editable input
// editable: undefined,

// // Dropdown selectors
// selectYears: undefined,
// selectMonths: undefined,

// // First day of the week
// firstDay: undefined,

// // Date limits
// min: undefined,
// max: undefined,

// // Disable dates
// disable: undefined,

// // Root picker container
// container: undefined,

// // Hidden input container
// containerHidden: undefined,

// // Close on a user action
// closeOnSelect: true,
// closeOnClear: true,

// // Events
// onStart: undefined,
// onRender: undefined,
// onOpen: undefined,
// onClose: undefined,
// onSet: undefined,
// onStop: undefined,

// // Classes
// klass: {

//   // The element states
//   input: 'picker__input',
//   active: 'picker__input--active',

//   // The root picker and states *
//   picker: 'picker',
//   opened: 'picker--opened',
//   focused: 'picker--focused',

//   // The picker holder
//   holder: 'picker__holder',

//   // The picker frame, wrapper, and box
//   frame: 'picker__frame',
//   wrap: 'picker__wrap',
//   box: 'picker__box',

//   // The picker header
//   header: 'picker__header',

//   // Month navigation
//   navPrev: 'picker__nav--prev',
//   navNext: 'picker__nav--next',
//   navDisabled: 'picker__nav--disabled',

//   // Month & year labels
//   month: 'picker__month',
//   year: 'picker__year',

//   // Month & year dropdowns
//   selectMonth: 'picker__select--month',
//   selectYear: 'picker__select--year',

//   // Table of dates
//   table: 'picker__table',

//   // Weekday labels
//   weekdays: 'picker__weekday',

//   // Day states
//   day: 'picker__day',
//   disabled: 'picker__day--disabled',
//   selected: 'picker__day--selected',
//   highlighted: 'picker__day--highlighted',
//   now: 'picker__day--today',
//   infocus: 'picker__day--infocus',
//   outfocus: 'picker__day--outfocus',

//   // The picker footer
//   footer: 'picker__footer',

//   // Today, clear, & close buttons
//   buttonClear: 'picker__button--clear',
//   buttonClose: 'picker__button--close',
//   buttonToday: 'picker__button--today'
// }