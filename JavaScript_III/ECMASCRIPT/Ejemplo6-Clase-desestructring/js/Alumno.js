/*
------------------------CLASES-----------------------

EcmaScript nos permitirá utilizar las clases y así poder implementar ciertos objetos, que vayan a ser
utilizados en nuestras interacciones (aplicaciones). Nos ofrece ventaja en la implementación de las
herencias dentro de los componentes de nuestro código.

Sintaxis:

class Nombre(Las clases siempre empieza en Mayusculas){

    constructor()
}
    metodo(){

}

Ejemplo metafórico:

class Persona{

    constructor(){
        elementos que definen la persona
    }
    hablar(){

    }
    acciones(){
        llamariamos al método hablar, como elemento que define a la persona, 
        asi como una de sus caracteristicas definidas en el método.

        this.hablar()
    }
}

*/

var alumnos = [
  [1, "Juan", "Sanchez", 8.3],
  [2, "Maria", "Lopez", 5.3],
  [3, "Pedro", "Alvarez", 4.3],
  [4, "Luisa", "DelCarmen", 7.2],
];

class Alumno {
  /*
Caracteristicas del Objeto
Propiedades
Variables Globales    
*/
  id;
  nombre;
  apellidos;
  nota;

  //Constructor
  constructor(idAlumno, nombreAlumno, apellidosAlumno, notaAlumno) {
    this.id = idAlumno;
    this.nombre = nombreAlumno;
    this.apellidos = apellidosAlumno;
    this.nota = notaAlumno;
    //El puntero 'this' aclara su uso para diferenciar las propiedades que tiene la clase a los
    //argumentos recibidos por el constructor
  }

  mostrarInformacion() {
    document.write(`Datos del alumno: id ${this.id}, nombre: ${this.nombre}, 
    apellido: ${this.apellidos} y su nota es: ${this.nota}` + "<br>");
  }
}
for(let i in alumnos){
    let[id, nombre, apellidos, nota] = alumnos[i];
    let listaAlumnos = new Alumno(id,nombre,apellidos,nota); //Llama al constructor
    listaAlumnos.mostrarInformacion();
    //Reflexión: Los objetos se muestran, recogidos en el document.write y seguidamente se destruyen.
}
