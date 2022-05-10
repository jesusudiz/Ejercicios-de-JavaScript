

//Elimina todos los valores falsos de una matriz.

//Los valores falsos en JavaScript son false, null, 0, "", undefinedy NaN.

//Sugerencia: Intente convertir cada valor a un valor booleano.


function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }
  
  bouncer([7, "ate", "", false, 9]);