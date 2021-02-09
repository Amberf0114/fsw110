let firstName = document.getElementById("firstName")
let submit = document.getElementById("submit")
let age = document.getElementById("age")

submit.addEventListener("click", (event) => {
    event.preventDefault()
    displayAlert()
})
function displayAlert() {
    alert(`
    First Name: ${firstName.value} 
    Age: ${age.value}
    `)
}
