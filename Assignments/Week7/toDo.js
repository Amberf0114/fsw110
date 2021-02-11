let inputs = document.getElementsByClassName("input")
let submitBtn = document.getElementById("submitBtn")
let submitBtn2 = document.getElementById("submitBtn2")
var deleteMe = document.createElement("button")


// submit.addEventListener("change", function(e){ 
//     document.getElementById("output").textContent = e.target.value
// })

// //for loop
// function (e) {
//     ft
// }
var inputValue1 = ""
var inputValue2 = ""
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")


input1.addEventListener("change",(e)=> {
    input1 = e.target.value
})

input2.addEventListener("change",(e)=> {
    input2 = e.target.value
})

// var deleteBtn = document.createElement("button")
// deleteBtn.setAttribute("deleteMe")
// var deleteMe = document.getElementById("deleteMe")
// deleteMe.textContent = "Delete"

// submitBtn.addEventListener("click",(e)=> {
//     e.preventDefault()
//     var ulList = document.getElementById("list")
//     var header = document.createElement("h1")//.innerText = inputValue1 + inputValue2
//     header.textContent = input1
//     ulList.appendChild(header)

   
// })

// deleteMe.addEventListener("click",(e)=>{
//     e.target.removeChild()
// })
function deleteBox() {
    deleteMe.textContent="Delete"
    return deleteMe
}
deleteMe.addEventListener('click',deleteBox())

submitBtn2.addEventListener("click",(e)=> {
    e.preventDefault()
    
    var ulList = document.getElementById("list")
    var first = document.getElementById("first")
    var list = document.createElement("li")
    var firstList = document.createElement("h2")
    firstList.textContent = input1
    list.textContent = input2
    ulList.appendChild(list)
    first.append(firstList)
    
  
})


// deleteBtn.setAttribute("deleteMe")
// var deleteMe = document.getElementById("deleteMe")


// var deleteBtn = document.createElement("button")
// deleteBtn.textContent="Delete"
// deleteBtn.addEventListener("click", function(e) {
//     list.removeChild(e)
// })