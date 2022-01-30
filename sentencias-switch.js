
// Ejercicio #1

function clasificarValor(valor){
    var respuesta;
    switch (valor){
        case 1:
            respuesta ="alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gama";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}

console.log(clasificarValor(1)); //"alpha"
console.log(clasificarValor(2)); //"beta"
console.log(clasificarValor(3)); //"gama"
console.log(clasificarValor(4)); //"delta"

function seleccionarIdioma(valor){
 var idioma;
 switch (valor){
    case 1:
        idioma = " Español";
        break;
    case 2:
        idioma = "Francés";
        break;
    case 3:
        idioma = "Italiano";
        break;
    default:
        idioma = "Inglés";
 }
  return idioma;
 }
 


 // Ejercicio #2
 console.log(seleccionarIdioma(1));//"Español"
 console.log(seleccionarIdioma(2));//"Francés"
 console.log(seleccionarIdioma(3));// "Italiano"
 console.log(seleccionarIdioma(4));// "Inglés"


 // Ejercicio #3

 function clasificarVolumen(valor){
     var volumen;
     switch (valor){
        case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = " alto";
            break;
     }
     return volumen;
 }

 console.log(clasificarVolumen(1));// "bajo"
 console.log(clasificarVolumen(2));// "intermedio"
 console.log(clasificarVolumen(3));// "intermedio"
 console.log(clasificarVolumen(5));// "alto"
 console.log(clasificarVolumen(6));// "alto"


 // Reemplazar "if...else" por sentencias ""switch"