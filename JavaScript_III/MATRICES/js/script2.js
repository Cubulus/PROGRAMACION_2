
var indice=0;
/*
A través de la función setInterval, podremos generar intervalos medidos por medida de tiempo establecida.

Sintaxis:

    setInterval(function,tiempo-milisengundos-);
*/
var item=["Peinado desenfadado 18€","Corte Cromático cosmopolita 32€",
"Retoques de barba, pelo, coloración y decoloración 22€",
"Cambio de look!: Corte, color y tratamiento capilar 55€",
"Renovación de mirada!: Pestañas, cejas y lobulos de ojo y tratamiento facial 49€",
"Tu mundo lleno de alegría y color..."];

setInterval(muestraOfertas,3000);
function muestraOfertas(){
    document.getElementById('salida').innerHTML=item[indice];
    indice++

    if(indice >= item.length){
        indice=0;
    }
}