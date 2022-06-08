

var hora= new Date();

function relojON(){
    document.getElementById('reloj').innerHTML=
    hora.toLocaleTimeString();
}

function relojOFF(){
    document.getElementById('reloj').innerHTML=
    "";
}

function relojON2(){
    document.getElementById('reloj2').innerHTML=
    hora.toLocaleTimeString();
}

function relojOFF2(){
    document.getElementById('reloj2').innerHTML=
    "";
}
