/*Escriba una función que divida una matriz (primer argumento) en grupos de la longitud de size(segundo argumento) y los devuelva como una matriz bidimensional.*/

//chunkArrayInGroups(["a", "b", "c", "d"], 2)//[["a", "b"], ["c", "d"]]
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)//[[0, 1, 2], [3, 4, 5]]
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)//[[0, 1], [2, 3], [4, 5]]
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)//[[0, 1, 2, 3], [4, 5]]
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)//[[0, 1, 2], [3, 4, 5], [6]]


function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
  }
    
    
  
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);//[["a", "b"], ["c", "d"]]
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);//[[0, 1, 2], [3, 4, 5]]
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);//[[0, 1], [2, 3], [4, 5]]
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);//[[0, 1, 2, 3], [4, 5]]
  