//Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúscula. 
//Asegúrate de que el resto de la palabra esté en minúsculas.


function titleCase(str) {
  let palabra = str.split(" ")
  for (var i = 0; i < palabra.length; i++) {
    palabra[i] = palabra[i][0].toUpperCase() + palabra[i].toLowerCase().slice(1)

  }
  return palabra.join(" ")
}
titleCase("I'm a little tea pot");

function upperCase(str) {
  var str = "this is an example.";
  var palabra = str.split(" ");
  for (var i = 0; i < palabra.length; i++) {
    palabra[i] = palabra[i].replace(palabra[i][0], palabra[i][0].toUpperCase());
  }
  return palabra.join(" ");
}