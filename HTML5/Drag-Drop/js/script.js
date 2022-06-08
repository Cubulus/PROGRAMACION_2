/*
Dragable, elemento a arrastrar, flase o true.
Ondragstar: Se produce cuando el usuario comienza a arrastrar el elemento.
Ondragend: Se produce cuando el usuario ha terminado de arrastrar el elemento.
*/

function start(){
    event.target.style.opacity="0,5";
}

function end(){
    event.target.style.opacity="1";
}

function over(){
    event.target.style.border="5px solid #aaa";
    event.preventDefault();
}

function leave(){
    event.target.style.border="none";
}

/*
appendChild(), es un método de la interfaz, utilizado para anexionar, nodo,
que principalmente los elementos están unidos a nodo padre.
*/

function drop(){
    event.target.appendChild(document.getElementById("arrastra"));
    event.target.style.border="none";
}