import cipher from './cipher.js';

console.log(cipher);


let submitButton = document.querySelector('#primerBoton')

function myFunction () {
  document.getElementById("primerBoton").addEventListener('click,myFunction');

  document.getElementById("second-page").style.display="block";
  document.getElementById("first-page").style.display="none";
}

submitButton.addEventListener('click,myFynction')

let finalButton = document.querySelector('#segundoBoton')

function myFunction2 () {
  document.getElementById("segundoBoton").addEventListener('click,myFunction2');

document.getElementById("third-page").style.display="block";
document.getElementById("second-page").style.display="none";
}

submitButton.addEventListener('click,myFunction2')


let word = document.getElementById("string");
let offset = document.getElementById("offset");

function encode(){

let nombre = cipher.encode(offset.value, word.value);
 document.getElementById("finaltext").innerText=nombre;
third-page.style="display:block";
}

function decode(){

let nombre = cipher.decode(offset.value, word.value);
document.getElementById("finaltxt").innerText=nombre;
third-page.style="display:block";
}

function back(){
  document.location.reload(true);
}

document.getElementById("encode").addEventListener("click", encode);
document.getElementById("decode").addEventListener("click",decode);
