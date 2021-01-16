// repeat Hello World 10x, add style

for (var i = 0; i < 10; i++) {
    var helloWorld = document.createElement("h1")
    helloWorld.textContent = ("Hello World") 
    helloWorld.style.color = "red"
    document.body.append(helloWorld)
}


//Array Created

var constNames = [
    "steve",
    "larry",
    "joe",
    "shirley",
    "steph",
    "nate",
    "rick",
    "emily"
];


// for loop to iterate through array as is

for (var i = 0; i < constNames.length; i ++) {
    console.log(constNames[i])
}
document.body.append(constNames)




