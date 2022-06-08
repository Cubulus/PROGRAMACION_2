function reiniciar() {
  location.reload();
}
function calcular() {
  var array = document.getElementById("notas").value.split(/,/);
  //split, dividirá la cadena de tipo string a array.

  var mayor = 0;
  var suma = 0;
  var media = 0;

  for (i = 0; i < array.length; i++) {
    //suma
    //suma = parseInt(array[i])+ suma
    suma += parseInt(array[i]);
  }
  //media
  media = suma / array.length;

  //mayor
  for (j = 0; j < array.length; j++) {
    if (parseInt(array[j]) > mayor) {
      mayor = parseInt(array[j]);
    }
  }
  //Resultado:
  document.getElementById("resultado").innerHTML =
    "El sumatorio es : " +
    suma +
    "\n" +
    "La nota media es: " +
    media +
    "\n" +
    "La nota mayor es: " +
    mayor;
}
