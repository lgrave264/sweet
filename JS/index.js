var list = document.getElementsByTagName("p")[1];
list.innerHTML="Hello darkness my old friend";
var looks = document.getElementById("look");
looks.style.borderStyle = ("double");

var title2 =document.createElement("h1");
var titleText = document.createTextNode("THEY ARE WATCHING YOU");
title2.appendChild(titleText);
document.body.appendChild(title2);

var p2 =document.createElement("p");
var pText = document.createTextNode("Not The EYE'S");
p2.appendChild(pText);
document.body.appendChild(p2);

var img2 =document.createElement("img");
img2.setAttribute("src","../images/dedsec.gif");
document.body.appendChild(img2);