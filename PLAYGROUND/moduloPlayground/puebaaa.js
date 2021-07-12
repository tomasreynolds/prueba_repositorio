var autos = require("./autos");
var persona = require("./persona");

let concesionaria = {
   autos: this.autos,
 
   buscarAuto: function buscarAuto(patente){

      let s= null;
      for(let i= 0; i<autos.length; i++){
         if(autos[i].patente==patente){
            return s=autos[i];
    } 
      }
      return s;
   },
    venderAuto: function venderAuto (patente){
         for(let i=0; i<autos.length; i++){
            if(this.buscarAuto(patente)==autos[i]){
               return autos[i].vendido = true;
         } 

      }

    },

    autosParaLaVenta: function autosParaLaVenta(){
         let enVenta = autos.filter(function(auto){
            return auto.vendido == false;
         });
                return enVenta;
   },
      autosNuevos: function autosNuevos(){
      
       let enVenta = this.autosParaLaVenta();

   let autosCeroKmEnVenta = enVenta.filter(function(auto){
         return auto.km < 100;
      });
         return autosCeroKmEnVenta;
      },
   
   listaDeVentas: function listaDeVentas(){

         let autosVendidos = autos.filter(function(elemento){
        return elemento.vendido == true;
         });

      let valores = [];

      for(let i= 0; i<autosVendidos.length; i++){
         valores.unshift(autosVendidos[i].precio);
            }
            return  valores;
},

  totalDeVentas: function totalDeVentas(){

   let valores = this.listaDeVentas();
   let valorFinal = null;

   if(valores == 0){
      return valorFinal = 0;
   } else {
      valorFinal = valores.reduce(function(acumulador, elemento){
         return acumulador + elemento;
      });
   }
         return valorFinal;
},
   puedeComprar: function puedeComprar(auto, person){

      for(let i=0; i<autos.length; i++){
      if((persona.capacidadDePagoTotal >= autos[i].precio) && (persona.capacidadDePagoEnCuotas >= (autos[i].precio / autos[i].cuotas))){
         return true;
      } else {
         return false; 
      }
   }
   },

   autosQuePuedeComprar: function autosQuePuedeComprar(persona){

      let enVenta = this.autosParaLaVenta();
      let comprar1 = this.puedeComprar(enVenta[0], persona);
      let comprar2 = this.puedeComprar(enVenta[1], persona);
      let final = [];
   
            if((comprar1 && comprar2) == true){
               final.push(enVenta[0], enVenta[1]);
            } else if (comprar1 == true){
               final.push(enVenta[0]);
            } else if (comprar2 == true){
               final.push(enVenta[1]);
            }
      return comprar;
   }
   }

console.log(concesionaria.autosQuePuedeComprar());