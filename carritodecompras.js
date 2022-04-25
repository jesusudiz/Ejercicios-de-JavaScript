const frutas = [];

const fruta = prompt('que fruta deseas comprar?');
frutas.push(fruta);

while ( confirm("desea agregar otro elemento")){
  const fruta = prompt("que fruta desea agregar?")
  frutas,push(fruta);
}
console.log("Compraste :")
for (const fruta of frutas){
  console.log(fruta);
}
