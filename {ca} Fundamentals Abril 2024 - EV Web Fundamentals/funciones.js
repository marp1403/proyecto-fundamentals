function interactuarCadenas(cadena1, cadena2) {

  let nuevaCadena = '';
      
      
      /* Se recorre una de las cadenas Y
        se comprueba si los valores son 
         "+" y "+" ,   "-" y "-"  o 
         son diferentes para ejecutarse
         alguna de las condiciones  */
     for (let i = 0; i < cadena1.length; i++) {
        if(cadena1.charAt(i) === cadena2.charAt(i)){
            nuevaCadena+= cadena1.charAt(i);
        }else{
            nuevaCadena+= "0";
        }
        
     }

     return nuevaCadena;

}

function generarApodo(nombre) {

//Expresión regular para encontrar solo consonantes
const regExp = /[^aeiou]/i;

let apodo = '';


 
 
  if(nombre.length < 4){
    throw new TypeError("Nombre muy corto");
  }
/* Si el tercer valor del nombres es consonante
  entonces se extrae los 3 primeros caracteres */
 else if(regExp.test(nombre.charAt(2))){  
    apodo = nombre.slice(0, 3);
    return apodo;
 
/* Si el tercer valor del nombres es consonante
  entonces se extrae los 3 primeros caracteres */
}else if (regExp.test(nombre.charAt(3))){
     
     apodo = nombre.slice(0, 4);
     
     return apodo;

}



}




function obtenerMarcador(text) {

const numbers = {
    "cero":0,
    "uno": 1,
    "dos": 2,
    "tres":3,
    "cuatro": 4,
    "cinco": 5,
    "seis": 6,
    "siete":7,
    "ocho": 8,
    "nueve": 9
}

// Separamos las palabras del texto y las guardamos en un array
const arrText = text.split(' ');


let marcador = [];

 //recorremos el arreglo "arrText"
 arrText.forEach(word => {

      
      /* Comprobamos SI en el objeto hay una coincidencia
       entre el valor del arreglo y una de las propiedades
       del objeto. Cuando exista se pondra el valor
       de la propiedad dentro del arreglo "marcador"  */
      if(numbers.hasOwnProperty(word)){
         marcador.push(numbers[word]);
         return marcador;
      }

     

 });

  

 if(marcador.length === 0){
    return marcador = [0,0];
 }
  
 

 return marcador ;

}







class Barco {
constructor(calado, tripulacion){
    this.calado = calado ;
    this.tripulacion = tripulacion;
    console.log(calado);
}


valeLaPena(){
   
    let calodoTotal = this.calado - (this.tripulacion * 1.5);

   return calodoTotal > 20 ? true : false;

  

}
}

const perlaNegra = new Barco(18,5);

perlaNegra.valeLaPena();