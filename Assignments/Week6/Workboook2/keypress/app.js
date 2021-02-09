var output = document.getElementById("output")
document.addEventListener('keypress',(e) => {
    output.textContent=`I pressed: ${e.key} This keycode is: ${e.which}`
})
