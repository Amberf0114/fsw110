let inputs = document.getElementsByClassName("input")
let submitBtn = document.getElementById("submit")

// submit.addEventListener("change", function(e){ 
//     document.getElementById("output").textContent = e.target.value
// })

// //for loop
// function (e) {
//     ft
// }

inputs.addEventListener("change","click",(e)=> {
    var ulList = document.createElement("ul")
    var list = document.createElement("li").innerHTML = e.target.value
    ulList.appendChild(list)
})