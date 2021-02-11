
var input1 =document.getElementById("input1")
var input2 =document.getElementById("input2")
let submitBtn = document.getElementById("submitBtn")
let urgentLi = document.getElementById("urgentli")
let ul = document.getElementById("ul")

input1.addEventListener("change",(e)=> {
  input1.textContent = e.target.value              //turns input1 into text
    
})

input2.addEventListener("change",(e)=> {
    input2.textContent = e.target.value                     //turns input2 into text
})


submitBtn.addEventListener("click",(e)=> {
    e.preventDefault()                            //prevents Submit Default/ Prints Checklist
    print()
})


function print() {

    if (input1.value.length > 0 && input2.value.length > 0) {
        let uList = document.createElement("li")
        uList.textContent = input1.value

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"

        deleteBtn.addEventListener('click', (e) =>{
            urgentLi.removeChild(uList)
        })
        urgentLi.appendChild(uList)
        uList.appendChild(deleteBtn)


        let list = document.createElement("li")
        list.textContent = input2.value
        
        let deleteBtn2 = document.createElement("button")
        deleteBtn2.textContent = "Delete"

        deleteBtn2.addEventListener('click', (e) =>{
            ul.removeChild(list)
        })
        ul.appendChild(list)
        list.appendChild(deleteBtn2)
        

    } else if (input1.value.length == 0 && input2.value.length > 0) {
        
        let list = document.createElement("li")
        list.textContent = input2.value
        
        let deleteBtn2 = document.createElement("button")
        deleteBtn2.textContent = "Delete"
        deleteBtn2.addEventListener('click', (e) =>{
            ul.removeChild(list)
        })
        ul.appendChild(list)
        list.appendChild(deleteBtn2)

    } else if (input1.value.length > 0 && input2.value.length == 0) {
        let uList = document.createElement("li")
        uList.textContent = input1.value

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"

        deleteBtn.addEventListener('click', (e) =>{
            urgentLi.removeChild(uList)
        })
        urgentLi.appendChild(uList)
        uList.appendChild(deleteBtn)

    } else if (input1.value.length == 0 && input2.value.length == 0) {
        alert("Please type inputs before submission. Thank you!")
    }
 clear()
}
   
function clear(){
    input1.value = ""
    input2.value = ""                                        //function to clear input
}
