
function calcular(){

    var capital=parseFloat(window.prompt("Introduce el importe del crédito que solicitas"));
    var tiempo=parseInt(window.prompt("Introduce los meses para abonar comodamente tus cuotas"));
    var redito=0;

    /*
    CRT, CREDITO-RENTA-TIEMPO

    */

    if(tiempo<=24){
        redito=0.05;
    }else if(tiempo<=60){
        redito=0.08;
    }else{
        redito=0.10;
    }

    var interes=(capital*redito/tiempo);
    document.getElementById('resultado1').innerText="Crédito solicitado: "+
    capital+"€"+"\n Tipo de interés: "+redito*100+"%"+
    "\n tiempo: "+tiempo+"meses"+"\n intereses a debengar: "+interes.toFixed(2)+"€";
    
    var cuota=((interes+capital)/tiempo);
    document.getElementById('resultado2').innerText="El total de su cuota al mes será de: "
    +cuota.toFixed(2)+"€";
}