let display = document.getElementById("display");
// console.log(display.innerText)

let buttons = Array.from(document.getElementsByClassName("btn"));
// console.log(buttons, typeof buttons)

buttons.map((btn) => {
    btn.addEventListener('click', (event) => {
    //    console.log(event.target.innerText);
    let key = event.target.innerText;

    if(key == "A/C"){
        display.innerText = ""
    }
    if(key == "Del"){
            display.innerText = display.innerText.slice(0,-1)
        }
      
    else if(key == '='){
            display.innerText = eval(display.innerText);
        }
     else{
        display.innerText += key;
    }
    });
});