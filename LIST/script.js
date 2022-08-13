let forms = document.querySelector("form");
console.log(forms);

let inputName = document.querySelector(".input_name");
let inputEmail = document.querySelector("..input_email");

let inputNo = document.querySelector(".input_no");

let addBtn = document.querySelector(".add_btn");

let msg = document.querySelector(".message");

let body = document.querySelector("tbody");


// function addfunction() {
//     if(!inputName.value || !inputEmail.value || !inputNo.value){
//         msg.innerText = "Empty Input Field!!";
//         setTimeout(() => {
//             msg.innerText = "";
//             msg.style.color = "red";
//             msg.style.textAlign="center"
//             msg.style.fontSize="20px"
//         },2000);
//     }
// }
// forms.addEventListener("submit",addfunction);


// function addRow(){
//     e.preventDefault();
//     if(inputName.value || inputEmail.value || inputNo.value){
//         body.innerHTML += `<tr>
//     <td>${inputName.value}</td>
//     <td>${inputEmail.value}</td>
//     <td>${inputNo.value}</td>
//     <td><input type="button" id="remove_btn" value="Remove" onclick="removeRow()"></td>
//     </tr>`;
//     }
// }
// forms.addEventListener("submit",onAddrow);

// function removeRow(){
//     document.querySelector("#remove_btn").closest("tr").remove();
//     msg.innerText= "Item deleted successfully"
//   setTimeout(() => {
//     msg.innerText = "";
//     msg.style.color = "red";
//     msg.style.textAlign="center"
//     msg.style.fontSize="20px"
//   }, 2000);
    
//  }


forms.addEventListener("submit", (e) => {
    // console.log(e.target);
  
    e.preventDefault();
    if (!inputName.value || !inputEmail.value || !inputNo.value) {
      msg.innerText = "Empty Input Field(s)";
      msg.style.color="red";
      msg.style.fontSize="20px";
      setTimeout(() => {
        msg.innerText = "";
      }, 2000);
    } else {
      msg.innerText = "Data Inserted Successfully!!";
      msg.style.color = "green";
      msg.style.fontSize="20px";
      setTimeout(() => {
        msg.innerText = "";
      }, 2000);
  
      body.innerHTML += `<tr>
      <td>${inputName.value}</td>
      <td>${inputEmail.value}</td>
      <td>${inputNo.value}</td>
      <td><input type="button" id="remove_btn" value="Remove" onclick="removeRow()"></td>
      </tr>`;
  
    }
  });
  
  
  function removeRow(){
  
    document.querySelector("#remove_btn").closest("tr").remove();
    msg.innerText= "Item deleted successfully"
    msg.style.color = "red";
    msg.style.fontSize="20px";
    setTimeout(() => {
      msg.innerText = "";
    }, 2000);
  }