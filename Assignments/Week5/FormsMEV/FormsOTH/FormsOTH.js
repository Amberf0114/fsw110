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
