var submit = document.getElementById("submitButton")
const airlineForm = document.form


submit.addEventListener("click", (event) => {
    event.preventDefault()
    let checkedPlaces = "";
    let checkedDiets = "";

var fName = form.firstname;
var lName = form.lastname;
var dob = form.age;
var gender = form.gender;
var place = document.getElementsByClassName("location");
var diet = document.getElementsByClassName("diet");
/*var checkMale = form.getElementById("mGender");
var checkFemale = form.getElementById("fGender");
var noneCheck = form.getElementById("noGender");
var checkFlorida = form.getElementById("florida");
var checkHawii = form.getElementById("hawii");
var checkColorado = form.getElementById("colorado");
var noRestrct = form.getElementById("none");
var restrctVeget = form.getElementById("veget");
var restrctVega = form.getElementById("vegan");

*/

//--------Tutor: Not understanding how to combine all functions needed
//--------Need to: Check all values are present(radios/checks require?)
//--------Need to: Display all info vertically in alert


//checkbox function; How to do radio and others comined? 
// Do I use multiple functions? Should for loop be rearranged?
function afterSubmit(){

     for (let i = 0; i < place.length; i++) {
        if (place[i].checked) {
            checkedPlaces += (place[i].value) +" "
        }
    }
    for (let i = 0; i < diet.length; i++) {
        if (diet[i].checked) {
            checkedDiets += (diet[i].value) +" "
        }
    }
}
afterSubmit() 
console.log(checkedPlaces, checkedDiets)

alert(`
First Name: ${fName.value}
Last Name: ${lName.value}
DOB: ${dob.value}
Gender: ${gender.value}
Traveling To: ${checkedPlaces}
Diet Restrictions: ${checkedDiets}
`)
})
