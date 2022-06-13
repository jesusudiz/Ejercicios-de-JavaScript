 function clasificarValores(valor) {
     if (valor < 5) {
         console.log("Menor que 5");
     } else if (valor < 10) {
         console.log("Menor que 10.");
     } else {
         console.log("Mayor o igual a 10");
     }
 }

 clasificarValores(1); //"Menor que 5"
 clasificarValores(9); //"Menor que 10"
 clasificarValores(12); //"Mayor o igual a 10"




 function interpretarIMC(indiceDeMasaCorporal) {
     if (indiceDeMasaCorporal < 18.5) {
         console.log("Bajo Peso");
     } else if (indiceDeMasaCorporal <= 24.9) {
         console.log("Rango Normal");
     } else if (indiceDeMasaCorporal <= 29.9) {
         console.log("SobrePeso");
     } else {
         console.log("Obeso")
     }
 }
 interpretarIMC(21.6); // "Rango normal"
 interpretarIMC(30); // "Obeso"
 interpretarIMC(10); //"Bajo Peso"
 interpretarIMC(26); //"Soprepeso"

 /*En el juego de golf cada hoyo tiene un par que representa el numero promediode golpes
 que se espera que haga un golfista para introducir la pelota en el hoyo.

 Hay un nombre diferente dependiendo que tan por encima o por debajo del par estén tus golpes.

 tu función tomará los argumentos par y golpes.Retorna la cadena correcta según esta tabla que muestra
 tus golpes en orden de mayor a menor prioridad. 

 Golpes          Retornar 
 ------------------------
 1            "Hole-inOne!"
 <= par -2      "Eagle"
 par -1        "Birdie"
 par            "Par"
 par +1         "Bogey"
 par +2        "Double Bogey"
 >= par +3      "Go Home"
 par y golpes simpre númericos y positivos.*/

 function puntajeDeGolf(par, golpes) {
     if (golpes == 1) {
         return "Hole-inOne!";
     } else if (golpes <= par - 2) {
         return "Eagle";
     } else if (golpes == par - 1) {
         return "Birdie";
     } else if (golpes == par) {
         return "Par";
     } else if (golpes == par + 1) {
         return "Bogey";
     } else if (golpes == par + 2) {
         return "Double Bogey";
     } else if (golpes >= par + 3) {
         return "Go Home";
     }

 }

 console.log(puntajeDeGolf(4, 1)); // "Hole-inOne!"
 console.log(puntajeDeGolf(4, 2)); //  "Eagle"
 console.log(puntajeDeGolf(4, 3)), // "Birdie"
 console.log(puntajeDeGolf(4, 4)); // "Par"
 console.log(puntajeDeGolf(4, 5)); // "Bogey"
 console.log(puntajeDeGolf(4, 6)); //"Double Bogey"
 console.log(puntajeDeGolf(4, 7)); // "Go Home"