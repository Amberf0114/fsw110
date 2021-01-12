var navBar =document.createElement("nav")
document.body.append(navBar)

//link to nav
var navHome = document.createElement('a')
navHome.textContent = 'Home'
navBar.appendChild(navHome)

var navAbout = document.createElement('a')
navAbout.textContent = ' About'
navBar.appendChild(navAbout)

var navContact = document.createElement('a')
navContact.textContent = ' Contact'
navBar.appendChild(navContact)



var h1Element =document.createElement("h1")
h1Element.textContent = "Starline Bookkeeping LLC"
document.body.append(h1Element)

var pElement =document.createElement("p")
pElement.textContent="Starline Bookkeeping LLC is a sole proprietorship bookkeeping business. The goal of Starline Bookkeeping LLC is to relieve small business owners from the time burden of maintaining and cleaning financial records."
document.body.append(pElement)

var h2Element =document.createElement("h2")
h2Element.textContent = "How it Works:"
document.body.append(h2Element)

var olElement=document.createElement("ol")

var liElement=document.createElement("li")
liElement.textContent = "Book a free consultation with Starline Bookkeeping LLC owner: Amber Freeman, via zoom, phone call, or email"
var li2=document.createElement("li")
li2.textContent = "If it is evaluated that Starline's services would benefit your business, Amber will assit with filling out an onboarding application and discuss current situation and future business outlook in order to create a 'Growth Action-Plan.' "
var li3=document.createElement("li")
li3.textContent = "Depending on where you would like your business to be and the services you decide, Amber will discuss options for packages, and possible discounted services depending on your business's needs."

olElement.appendChild(liElement)
olElement.appendChild(li2)
olElement.appendChild(li3)
document.body.append(olElement)

var footerElement =document.createElement("footer")
footerElement.textContent = "Starline Bookkeeping LLC"
document.body.append(footerElement)