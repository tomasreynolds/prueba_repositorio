//Hacer una función en un módulo que tenga como parámetros de entrada un arreglo.
//Lo que hace el código es que si encuentra el número 11, retorna "verdadero", sino, "falso".

var arreglo = [];

function buscarElOnce(arreglo){

    for(i=0; i<arreglo.length; i++){
        let dato = arreglo[i];

        if(dato==11){
            return "verdadero";
        } 
            
    }
            return "falso";
}

module.exports=buscarElOnce; 