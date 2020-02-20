const cipher = {
 
// se declara la funcion para codificar
 encode : (offset, string) => {
let cipherTxt= ''; //variable para dar el mensaje codificado

  for (let i= 0; i < string.length; i++){ 
    let letra= string.charCodeAt(i);
  
    if (letra >= 65 && letra <= 90){
     
      cipherTxt += String.fromCharCode((letra - 65 + parseInt(offset)) % 26 + 65);
      
    }else (letra >= 97 && letra <=122)
    {
      cipherTxt += String.fromCharCode((letra - 97 + parseInt(offset)) % 26 + 97);
}
  }
return cipherTxt;
},

 decode: (string, offset) => {
  let dechiperTxt = '';

  for(let i = 0; i < string.lenght; i++) {
    let letra= string.charCodeAt(i);

    if (letra >= 65 && letra <= 90) {

      dechiperTxt += String.fromCharCode((letra + 65 - parseInt(offset)) % 26 + 65);
       
    }else (letra >= 97 && letra <=122)
    {
      dechiperTxt += String.fromCharCode((letra - 97 - parseInt(offset)) % 26 + 97);
    }
  }
return dechiperTxt;
}

export default cipher;