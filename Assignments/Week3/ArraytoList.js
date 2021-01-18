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


// for loop to iterate through array
var namesList = document.createElement("ul")
for (var i = 0; i < constNames.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = constNames[i]
   namesList.append(newName)
}
document.body.append(namesList)
