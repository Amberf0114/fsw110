//Containers
var section1 = document.getElementsByID("section1");
var section2 = document.getElementsByID("section2");
var section3 = document.getElementsByID("section3");

//Entry Boxes
var add1 = document.getElementsById("add1st");
var add2 = document.getElementsById("add2nd");

var sub1 = document.getElementsById("sub1st");
var sub2 = document.getElementsById("sub2nd");

var mul1 = document.getElementsById("mul1st");
var mul2 = document.getElementsById("mul2nd");


//Result Boxes
var sumOf = document.getElementById("addEquals");

var diffOf = document.getElementById("subEquals");

var prodOf = document.getElementById("mulEquals");


//Equals Buttons
var addClick = document.getElementById("addButton");

var subClick = document.getElementById("subButton");

var mulClick = document.getElementById("mulButton");

//Functions
function sum() {
    prodOf = parseInt(add1.value) + parseInt(add2.value0)
};
document.addReturn.addEventListener('click',sum);