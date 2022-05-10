//Cortar y empalmar
//Se le dan dos matrices y un índice.

//Copie cada elemento de la primera matriz en la segunda matriz, en orden.

//Comience a insertar elementos en el índice de la segunda matriz.

//Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales después de que se ejecute la función.

function frankenSplice(arr1, arr2, n) {
    let result= arr2.slice();
     
      for (let i= 0; i < arr1.length;i++){
        result.splice(n,0,arr1[i]);
        n++;
      
      }
    return result
    }
    
    frankenSplice([1, 2, 3], [4, 5, 6], 1);