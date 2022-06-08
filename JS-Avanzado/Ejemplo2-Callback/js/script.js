/*
------------------------------call back------------------------------

Es una función la cual es pasada con unos argumentos a otra función, con la finalidad
de que vuelva a "ser llamada".

Podemos entender dicha función como que acepta otras funciones donde sus argumentos son
aceptados como orden-superior (Hight-order), que sin duda será esa función la que establecerá
la lógica de desarrollo.

¿¿Porqué necesitamos de una función como call back??
    El aumento del uso de aplicaciones, peticiones, etc... de forma asincrona, hace que necesitemos
    que alguna de nuestras operaciones comiencen solo después de que se hayan completado otras funciones.
    Debido a que solicitamos datos desde otras fuentes, ejemplo el API, no siempre nos garantiza un tiempo
    estimado o desconocemos dicho tiempo. Así pues, para estos casos de esperar respuesta, no nos obligue
    a tener que recargar la página.
*/

function solicitudServidor(consulta, callback){
    
    setTimeout(function(){
        var respuesta = consulta + "lleno";
        callback(respuesta);},5000);
}

function obtenerResultado(resultados){

    console.log("Respuesta del servidor: " + resultados);
}
solicitudServidor("El vaso esta medio " , obtenerResultado);

//--------------------------------------------------------------->

const ciudades =['Londres','New York','Madrid','París','Viena'];

ciudades.forEach(ciudad=>{
    console.log(ciudad);
});
console.log('------------------');

function callback(ciudad){
    console.log(ciudad);
}
ciudades.forEach(callback);
console.log('------------------');

function nuevoPais(pais, callback){
    
    setTimeout(function(){
    ciudades.push(pais);
    callback();
},6000)
}

function mostrarPaises(){

    setTimeout(function(){
        let html =""
        ciudades.forEach(function(ciudad){
            html+=`<li>${ciudad}</li>`;
        });
        document.getElementById('resultado').innerHTML = html;
    },4000);
}
nuevoPais('Alemania',mostrarPaises);
mostrarPaises();