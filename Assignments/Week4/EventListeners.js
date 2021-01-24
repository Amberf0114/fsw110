//hover
function blue () {
    box.style.backgroundColor="blue"
}
function unBlue () {
    box.style.backgroundColor="white"
}

var box = document.getElementById("box")

box.addEventListener('mouseover',blue)
box.addEventListener('mouseout',unBlue)



//mouse button held down
function red () {
    box.style.backgroundColor= "red"
}
box.addEventListener("mousedown",red)


//mouse button let go
function yellow () {
    box.style.backgroundColor= "yellow"
}
box.addEventListener("mouseup",yellow)


//mouse double click
function green () {
    box.style.backgroundColor= "green"
}
box.addEventListener("dblclick",green)
    

//mouse scroll somewhere(not just over square)
function orange () {
    box.style.backgroundColor= "orange"
}
document.body.addEventListener("wheel",orange)


//Keypress function
document.addEventListener("keypress",function(event) {
    console.log(event.which)
    var varName = event.which
    if (varName == 98) {
    box.style.backgroundColor="blue"
    } else if (varName == 114) {
        box.style.backgroundColor="red"
    } else if (varName == 121) {
        box.style.backgroundColor="yellow"
    } else if (varName == 103) {
        box.style.backgroundColor="green"
    } else if (varName == 111) {
        box.style.backgroundColor="orange"
    }
   
})