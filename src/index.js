import cipher from './cipher.js';

const primerBoton = document.getElementById("primerBoton");
primerBoton.addEventListener("click", function(){

  document.getElementById("second-page").style.display="block";
  document.getElementById("first-page").style.display="none";

});

primerBoton.onclick = function() {
  document.getElementById('block1').style.display="block";
  document.getElementById('block2').classList.add('esconder');
} 


 myFunction () 
{
  document.getElementById("primerBoton").addEventListener('click, myFunction');

  document.getElementById("second-page").style.display="block";
  document.getElementById("first-page").style.display="none";
}

submitButton.addEventListener('click, myFunction')


myFunction2 () 
{
  document.getElementById("segundoBoton").addEventListener('click, myFunction2');

document.getElementById("third-page").style.display="block";
document.getElementById("second-page").style.display="none";
}

submitButton.addEventListener('click, myFunction2')

function enviar1 () 
{
  document.querySelector('#second-page').style.display = 'block';
}

let name = document.querySelector('#lastName')
let number = document.querySelector('#offset')
let encodeButton = document.querySelector('#encode')
let decodeButton = document.querySelector('#decode')

function convertirTexto (){
  let offset = number.value
  let lastName = name.value
  let result = cipher.encode(offset, lastName)

  lastName.value = result
}

function revertirTexto(){
  let offset = number.value
  let lastName = name.value
  let result = cipher.decode(offset, lastName)
}

encode.addEventListener('click, convertirTexto')
decode.addEventListener('click, revetirTexto')




console.log(cipher);