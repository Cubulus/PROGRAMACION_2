
var mapa;

function mostrar_mapa(){
//Comprobar si nuestro cliente y el dispositivo soporta la geolocalizacion
//o traslada algun error
if(navigator.geolocation){
    //Obtener la posicion
    navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejaError);
}else{
    alert("Tu dispositivo o navegador, no accede a la Geolocalizacion")
}
var opciones={
    zoom:12,
    mapTypeId: google.maps.mapTypeId.ROADMAP
};

mapa = new google.maps.Map(document.getElementById("resultado"), opciones);
}

function mostrarLocalizacion(posicion){

    //Obtener o trasladar las coordenadas
    var pos = new google.maps.LatLng((40.4348589, -3.6519818));
    //Mostrar texto
    var info = new google.maps.infoWindow({map:mapa,position:pos,content:"Se encuentra aqui!"});
    //Pedir centrado de mapa
    mapa.setCenter(pos);
}

function manejaError(error){
    
    switch(error.code){
        
        case error.PERMISSION_DENIED:
            alert("Permiso Denegado");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Ubicación no detectada");
            break;
        case error.TIMEOUT:
            alert("Tiempo de espera agotado");
            break;
        case error.UNKNOWN_ERROR:
            alert("Error desconocido #202#");
            break;
    }
}