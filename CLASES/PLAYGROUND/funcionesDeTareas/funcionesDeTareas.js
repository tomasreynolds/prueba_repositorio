let tareas = require("./../24.5/tareas.json");

function imprimirTareas(){
    tareas.forEach(function(elemento){
        console.log(elemento);
    });

}


function agregarTareas(){
    
}

module.exports = imprimirTareas;

