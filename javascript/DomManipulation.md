document.title = "Test Page"
'Test Page'
document.body.style = "black"
'black'
document.body.style.backgroundColor = "black"
'black'
document.body.style.color = "red"
'red'
h1Elmt = document.createElement("h1")
<h1>​</h1>​
h1Elmt.style.textAlign = "center"
'center'
h1Elmt.textContent = "This is my Web page"
'This is my Web page'
document.body.appendChile(h1Elmt)
VM1010:1 Uncaught TypeError: document.body.appendChile is not a function
    at <anonymous>:1:15
(anonymous) @ VM1010:1
document.body.appendChild(h1Elmt)
<h1 style=​"text-align:​ center;​">​This is my Web page​</h1>​