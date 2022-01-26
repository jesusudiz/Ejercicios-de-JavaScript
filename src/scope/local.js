const helloWorld= ()=>{
  const hello= 'hello World';
  console.log(hello);
}

helloWorld();

var scope= 'I am global';

const functionScope= ()=>{
    var scope= 'i am just a local';
    const func= ()=>{
        return scope
    }
    console.log(func());
}

functionScope();
console.log(scope)