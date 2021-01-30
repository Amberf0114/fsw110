const form = document.form
var fName = form.firstname;
var lName = form.lastname;
var birthday = form.age;
var submit = document.getElementById("submit");

//Prevent Default
submit.addEventListener("click", (event) => {
    event.preventDefault()
    submission()
})

//Function
//---------Tutor: Working, but does not clear after submission? Because of preventDefault?

function submission() {
    if (fName.value == ""){  
        alert("Enter First Name")
        fName.focus();
        return false
    } if (lName.value == "") {
        alert("Enter Last Name")
        lName.focus();
        return false    
    } if (birthday.value == "") {
        alert("Enter Last Name")
        birthday.focus();
        return false    
    }else {
        alert(`
        ${fName.value} ${lName.value}
        ${birthday.value}
        `)
        fName.value = "" 
        lName.value = "" 
        birthday.value = ""
        return true

    }
} 