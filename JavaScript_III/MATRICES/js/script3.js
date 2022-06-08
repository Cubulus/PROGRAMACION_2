function contador() {
    var frase = document.getElementById("frase").value.split(" ");
    console.log(frase);
  
    var primera=frase[0];
    var ultima=frase[frase.length-1];
    var npalabras=frase.length;
    var textoinv=[frase.reverse()];
  
  //Resultado:
  document.getElementById("resultado").innerHTML =
    "La primera palabra es : " + primera + "\n" +
    "La ultima palabra es : " + ultima + "\n>" +
    "El numero de palabras es : " + npalabras + "\n" +
    "El texto invertido sería : " + textoinv;
  }
  function reiniciar() {
    location.reload();
  }
