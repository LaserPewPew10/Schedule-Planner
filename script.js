//TODO: as soon as i open my page get document on ready
$(document).ready(function () {
  console.log("ready!");
});

// TO GET THE CURRENT DATE - find a way to display the day of the week
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
//January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
// document.write(today);
currentDay.textContent = today;

// TO GET CURRENT TIME - DONE

// gets the current of the user when are on the website
function myHour() {
  var d = new Date();
  var n = d.getHours();
  return parseInt(n);
}

console.log(myHour());

//TODO: generate the div - create 9 sub divs

//in each sub div display time on the left, input area in the middle, submit button the the right
//depending on the time of the day, it will diplay differently
//array of time objects

var time = [
  00,
  01,
  02,
  03,
  04,
  05,
  06,
  07,
  08,
  09,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];

console.log(time);

// STYLING - for loop that iterates through the time array to generate the div colors
// set attribute colors
// in the for loop use the classes of past present future

// function colorBlock () {
// for (var i = 0; i < time.length; i++) {

//     if (myHour() === time[i]) {
//     //if time.key === myHour, then block is red
//     }
//     if (myHour() < time[i]) {
//     //if time.key < myHour, then block is grey
//     }
//     if (myHour() > time[i]) {
//     // if time.key> if time.key < myHour, then block is green
//     }
//     //     if (myHour < 09 || myHour > 17){
//     // //turn  all the divs to yellow
// }};
//selects all of the time blocks
$(".time-block").each(function (element) {
  console.log(this);
  //targets the timblock saves it to timeRow
  var timeRow = $(this);
  //put in the user time
  var now = myHour();
  //splits the number from the hour which allows it to be parsed so we can compare it to the hour
  var time = parseInt(timeRow.attr("id").split("-")[1]);
  console.log(time);
  if (now === time) {
    $(this).addClass("present");
    //if time.key === myHour, then block is red
  }
  if (now > time) {
    $(this).addClass("past");
    //if time.key < myHour, then block is grey
  }
  if (now < time) {
    $(this).addClass("future");
    // if time.key> if time.key < myHour, then block is green
  }
});

var userInputByHour = [];
//save button with Javascript
// var saveButton = document.querySelectorAll(".saveBtn");
// var descriptionText = document.querySelector(".description");
// for (let i = 0; i < saveButton.length; i++) {
//   saveButton[i].addEventListener("click", function () {
//     console.log("Button was clicked.");
//     var divHour = event.target.parentNode.getAttribute("id");
//     var description = descriptionText.value.trim();
//     console.log(divHour);
//     console.log(description);
//     // storeTasks(divHour, description);
//   });
// }

// jQuery Save button savebutton is targeted, when save button is clicked
$(".saveBtn").on("click", function () {
  //get nearby values.
  console.log(this);
  // this targets the text box, sibling will target the description in the textbox and pull it with value
  var text = $(this).siblings(".description").val();
  //time is set by targeting the text box and getting the id element from the parent
  var time = $(this).parent().attr("id");
  //set items in local storage.
  localStorage.setItem(time, text);
});

// calling value of hour-9 and placing it in the proper hour description value
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

console.log(mrHour());

// function init() {
//   // Write code here to check if there are todos in localStorage
//   // If so, parse the value from localStorage and assign it to the todos variable
//   todos = JSON.parse(localStorage.getItem("todos")) || [];
//   // Render todos to the DOM
//   renderTodos();
// }
