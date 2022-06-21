//Mutaciones

//Retorna truesi la cadena en el primer elemento de la matriz contiene todas las letras de la cadena en el segundo elemento de la matriz.

//Por ejemplo, ["hello", "Hello"]debería regresar trueporque todas las letras en la segunda cadena están presentes en el primer caso, ignorando.

//Los argumentos ["hello", "hey"]deberían regresar falseporque la cadena hellono contiene un y.

//Por último, ["Alien", "line"] trueporque todas las letras de lineestán presentes en Alien.


function mutation(arr) {
  let one=arr[0].toLowerCase().split("")
  let two=arr[1].toLowerCase().split("")
  
  for(let i = 0; i < two.length; i++){
    if(one.indexOf(two[i]) < 0) return false;
    }
  return true
}
 
console.log(mutation(["hello", "hey"]));

console.log(mutation(["Alien", "line"]))//true 
console.log(mutation(["floor", "for"]))// true 
console.log(mutation(["hello", "neo"]))// false 
console.log(mutation(["voodoo", "no"]))//false 
console.log(mutation(["ate", "date"]))//false 
console.log(mutation(["Tiger", "Zebra"]))//false 
console.log(mutation(["Noel", "Ole"]))//true 