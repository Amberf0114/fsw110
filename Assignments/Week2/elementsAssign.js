var h1Element =document.createElement("h1")
h1Element.textContent = "Welcome to my JS site"
document.body.append(h1Element)

var pElement =document.createElement("p")
pElement.textContent="All of this was created with Javascript”."
document.body.append(pElement)

var olElement=document.createElement("ol")

var liElement=document.createElement("li")
liElement.textContent = "my first list item"
var li2=document.createElement("li")
li2.textContent = "second"
var li3=document.createElement("li")
li3.textContent = "third"

olElement.appendChild(liElement)
olElement.appendChild(li2)
olElement.appendChild(li3)
document.body.append(olElement)