/**
 * [ No name ]
 * @description [It's un eventlistener to activate the collapsible menu]
 * @param  {[type]} arg1 [no parameters]
 * @param  {[type]} arg2 [no parameters]
 * @return {[type]}      [no value returned]
 */
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { edge: 'right' });
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    let currentDate = new Date();
    //console.log(currentDate);
    let oldDate = new Date((currentDate.getFullYear() - 18) + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getDate());
    var instances = M.Datepicker.init(elems, {
        format: "dd/mm/yyyy",
        setDefaultDate: true,
        defaultDate: oldDate,
        maxDate: oldDate
    })
});

/*
function showAge(inputDateElement){
    var selectedDate = inputDateElement.value;
    alert(selectedDate);
}
*/

/*
var showAge = function (inputDateElement) {
    var selectedDate = inputDateElement.value;
    alert("Desde variable como función: " + selectedDate);
}
*/

const showAge = (inputDateElement) => {
    let selectedDateValue = inputDateElement.value;
    let arrayDate = selectedDateValue.split("/");
    let selectedDate = new Date(arrayDate[2],(parseInt(arrayDate[1]) - 1),arrayDate[0]);
    let yearDifference = (new Date().getFullYear() - selectedDate.getFullYear());
    console.log(yearDifference);
    // calculate the month and day difference
    //document.getElementById("lblAge");
    document.querySelector("#lblAge").innerHTML = yearDifference;
    
}

/*
var a = 5;
const b = -1;
let c = 20;

function changeValues() {
    a = 7;
    let c = 22;
    alert("LET inside function: " + c);
    //b = -33;
}

alert("VAR Before function call: " + a);
alert("CONST Before function call: " + b);
alert("LET Before function call: " + c);
changeValues();
alert("VAR Later function call: " + a);
alert("CONST Later function call: " + b);
alert("LET Later function call: " + c);
*/

/**
options could be...

{
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
}

*/