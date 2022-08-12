let nameChange = document.getElementsByClassName("first")[0]
nameChange.innerText = "Sadhna Kumari"
nameChange.style.fontSize = "24px"
// document.querySelector(".first").innerText = "Sadhna Kumari"
document.querySelector(".second").innerHTML = "<p>i am sadhna, i have recently graduated from axis imstitite of technology and management</P"
document.querySelector(".third").style.color = "red"

let divs = document.querySelectorAll(".divs")
// console.log(divs)

for(let i=0; i<divs.length; i++){
    divs[i].style.border = "2px solid black"
    divs[i].style.margin = "5px"
}
divs[0].innerText = "Fourth"
divs[1].innerText = "Fifth"
divs[2].innerText = "Sixth"


let text = document.getElementById("id1")
text.append(" Air Campus")

// let createElement = document.createElement("span");
// let  textnod = document.createTextNode("Aircampus");
// createElement.appendChild(textnod);
// document.getElementById("id1").appendChild(createElement);

let addingHtml = document.querySelectorAll("div")[8]
addingHtml.innerHTML = "<div class='new_htlm'> <p>This is my first assignment</p> </div>"

let divNinth = document.getElementsByTagName("div")[10]
divNinth.innerHTML="<h4>My Experience with AirCampus</h4>"
divNinth.style.textDecoration="underline"
divNinth.style.color="#E3701A"
divNinth.style.fontSize="38px"
divNinth.style.backgroundColor= "#FFF0E5"

let myExp = document.getElementsByTagName("p")[2];
myExp.innerText = " I am very thankful to the whole team of Air Campus for providing us such a wonderful platform to learn"

