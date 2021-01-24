//Containers
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");

//Entry Boxes
var add1 = document.getElementById("add1st");
var add2 = document.getElementById("add2nd");

var sub1 = document.getElementById("sub1st");
var sub2 = document.getElementById("sub2nd");

var mul1 = document.getElementById("mul1st");
var mul2 = document.getElementById("mul2nd");


//Result Boxes
var sumOf = document.getElementById("addEquals");

var diffOf = document.getElementById("subEquals");

var prodOf = document.getElementById("mulEquals");


//Equals Buttons
var addClick = document.getElementById("addButton")

var subClick = document.getElementById("subButton");

var mulClick = document.getElementById("mulButton");


//Event Listeners
addClick.addEventListener('click',sum);
subClick.addEventListener('click',difference);
mulClick.addEventListener('click',product);


//Functions
function sum() {
    sumOf.textContent = (parseInt(add1.value) + parseInt(add2.value))
};

function difference() {
    diffOf.textContent = (parseInt(sub1.value) - parseInt(sub2.value))
};

function product() {
    prodOf.textContent = (parseInt(mul1.value) * parseInt(mul2.value))
};



S