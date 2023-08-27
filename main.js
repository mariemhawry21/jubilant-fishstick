
let cardname=document.querySelector(".card-name");
let cardnum=document.querySelector(".card-num");

let inputs=document.querySelector(".date");

let btn=document.querySelector(".btn");

btn.onclick=function (){
    let na=document.getElementById("name").value;
   if(na==""){
    if(cardname.children.length==3){
        cardname.lastElementChild.remove();
    }else{
    let b=document.createElement("p");
    let text=document.createTextNode("this field is required");
    b.appendChild(text);
    cardname.appendChild(b);
    }
   }else {
    if(cardname.children.length==3){
        cardname.lastElementChild.remove();
    }
   }
   let num=document.getElementById("number").value;
   let exp=/^(\d)/ig;
   if(!num.match(exp)){
    if(cardnum.children.length==3){
        cardnum.lastElementChild.remove();
    }else{
    let b=document.createElement("p");
    let text=document.createTextNode("Wrong format , numbers only");
    b.appendChild(text);
    cardnum.appendChild(b);
    }
   }else {
    if(cardnum.children.length==3){
        cardnum.lastElementChild.remove();
    }
   }
   let month=document.getElementById("m").value;
let year=document.getElementById("y").value;
   if(month=="" || year==""){
if(inputs.children.length==3){
    inputs.lastElementChild.remove();
}else {
    let b=document.createElement("p");
    let text=document.createTextNode("can't be blank");
    b.appendChild(text);
    inputs.appendChild(b);
}
   }else {
    if(inputs.children.length==3){
        inputs.lastElementChild.remove();
    }
   }
   let cvc_inp=document.getElementById("c").value;
   let cvc=document.querySelector(".cvc");
   if(cvc_inp==""){
    if(cvc.children.length==3){
        cvc.lastElementChild.remove();
    }else {
        let b=document.createElement("p");
        let text=document.createTextNode("can't be blank");
        b.appendChild(text);
        cvc.appendChild(b);
    }
   }else {
    if(cvc.children.length==3){
        cvc.lastElementChild.remove();
    }
   }
   if(cvc_inp!="" && month!="" && year!="" && na!="")
   {
    success();
   }
}
function success(){
    let comp=document.querySelector(".complete");
    let form=document.querySelector("form");
    form.style.display="none";
    comp.style.display="flex";
}
let btn2=document.querySelector(".complete .btn");
btn2.onclick =function(){
    let comp=document.querySelector(".complete");
    let form=document.querySelector("form");
    form.style.display="block";
    comp.style.display="none";
}