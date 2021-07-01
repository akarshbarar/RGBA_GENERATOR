

function getValue(){

let red  =document.getElementById("red").value;
let green=document.getElementById("green").value;
let blue =document.getElementById("blue").value;
let alpha =document.getElementById("alpha").value;

document.body.style.background=`rgba(${red},${green},${blue},${alpha})`;
document.querySelector(".output").innerHTML=`rgba(${red},${green},${blue},${alpha})`


}

function copy(){
    let ele=document.createElement("textarea");
    ele.value=document.querySelector(".output").textContent;
    document.body.appendChild(ele);
    ele.select();
    document.execCommand("copy");
    document.body.removeChild(ele);
    alert("Copied");
}
