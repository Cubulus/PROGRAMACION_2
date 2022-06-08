/**
 * 
 * TRY CATCH
 * 
 * La Sentencia Try, consistirá en un bloque que contiene una o mas sentencias, definidas y de ejecución-
 * Las llaves, que recoge tal sentencia, entendido como un bloque, necesitaremos al menos una de estas
 * dos sentencias, tales como catch o finally.
 * 
 * Sintaxis posibles:
 * 
 * try...catch
 * try...finally
 * try...catch...finally
 * 
 * => El bloque catch, serán sentencias que especifican que hacer si una excepcion es lanzada en el bloque try;
 *    Cualquier sentencia dentro del bloque try, lanza una excepción, el control cambiaría inmediatamente al bloque catch.
 * 
 * => El bloque finally, se ejecuta después del bloque try y catch, cuando ambos hayan finalizado. Este siempre
 *    se va a ejecutar.
*/

try{
    alert('Inicio de intentos de prueba');     ///(1)
    alert('Fin de la ejecución try');          ///(2)

}catch{
    alert("-------------------------------");  ///(3)?
}

try{
    alert('Inicios de ejecución try');
    Todo_perfecto(); //Ocurre un error, ya que no tenemos definida la función
    alert('Fin del try');

}catch(error){
    alert('Ha ocurrido un error');

}

try{
    algo(); //Función que no existe, no está definida y evidentemente referencia un error

}catch(error){
    console.log(error);

}finally{
    console.log('No importa, ejecuta de todos modos');

}