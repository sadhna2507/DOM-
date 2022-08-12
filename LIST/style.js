function addfunction(){
    let x = document.forms["myform"]["name"].value
let y = document.forms["myform"]["emailid"].value
let z = document.forms["myform"]["mobilenumber"].value
if(x=="" || y=="" || z==""){
    document.querySelector(".alert").innerText="Empty Input Field(s)"
    
    document.querySelector(".alert").style.color="red"
    document.querySelector(".alert").style.textAlign="center"
    document.querySelector(".alert").style.fontSize="20px"
    document.querySelector(".alert").style.fontWeight="bold"
    document.querySelector(".alert").style.hight="20px"
    setTimeout(()=>(document.querySelector(".alert").innerText=""),2000)
    