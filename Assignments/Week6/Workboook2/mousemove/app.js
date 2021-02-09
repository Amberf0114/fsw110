let hovering = document.querySelector(".red-box")
hovering.addEventListener('mousemove',(e)=>{
    var x = e.clientX
    var y = e.clientY

    hovering.innerHTML = `X axis = ${x} Y axis = ${y}`
})