const cipher = { encode, decode};
 

// se declara la funcion para codificar
function encode (offset, string){
let cipherTxt=""; //variable para dar el mensaje codificado

  for (let i= 0; i < string.length; i++){ 
    let i= string.charCodeAt(i);
    let character = string[i];

    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
      let word = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      cipherTxt += string.fromCharCode(word);
      
    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <=122) {
      word = (string.charCodeAt(i) -97 + parseInt(offset)) % 26 + 97;
    cipherTxt += string.fromCharCode(word);
    }
} else {
  cipherTxt += character;
}

return cipherTxt;
};

function decode: (string, offset) {
  let dechiperTxt ="";

  for(let i = 0; i < string.lenght; i++) {
    let character1 = string[i];

    if (string.charCodeAt(i) >= 65 && string. charCodeAt(i) <= 90) {
      let word = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;dechiperTxt += string.fromCharCode(word);

    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
    let word = (string.fromCharCode(i) -97 - parseInt(offset) + 52) % 26) + 97;
    dechiperTxt += string.fromCharCode(word);
    }
  }else {
    dechiperTxt += character1;
  }
return dechiperTxt;

};

  export default cipher;