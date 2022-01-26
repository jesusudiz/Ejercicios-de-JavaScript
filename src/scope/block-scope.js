const fruits= ()=>{   //Vamos a probar como se comporta el scope de las variables "var" y comporar lo que sucede cuando declaramos con "let" y "const".
    if(true) {
        var fruits1 = 'appel';
        var fruits2 = 'banana';
        var fruits3 = 'kiwi';
    }
    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
}
 
fruits();


/* const fruits= ()=>{   //Vamos a probar como se comporta el scope de las variables "var" y comporar lo que sucede cuando declaramos con "let" y "const".
    if(true) {
        var fruits1 = 'appel';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2) // para poder mostrar los resultados de 'let'y 'const' se deben realizar dentro del bloque de codigo.
        console.log(fruits3)
    }
    console.log(fruits1)
    
}
 
fruits(); */


const anotherFunction2= ()=>{
    for(var i= 1;i < 10;i++){
      setTimeout(()=>{
        console.log(i)
      },1000) ; 
        
    }
}

anotherFunction2();

const anotherFunction3= ()=>{
    for(let i= 1;i < 10;i++){
      setTimeout(()=>{
        console.log(i)
      },1000) ; 
        
    }
}

anotherFunction3();