//FASE 1 (con for)

var nom = ["E", "l", "i", "s", "a", "b", "e", "t"];

  for(var i = 0; i < nom.length; i++){
    console.log(nom[i]);
  }

//FASE 1 - Respuesta más DRY (con forEach y function anónima)
var nom = ["E", "l", "i", "s", "a", "b", "e", "t"];

  nom.forEach(function(letter){
    console.log(letter);
  });

//FASE 2

var nom = ["E", "l", "i", "s", "a", "b", "e", "t"];
var vocals = ["a", "e", "i", "o", "u"];

for(var i = 0; i < nom.length; i++){
  if(vocals.indexOf(nom[i].toLowerCase()) !== -1){
    console.log(nom[i] + " es una vocal");
  }
  else {
    console.log(nom[i] + " es una consonante");
  }
}

//FASE 2 (extra) - isNaN


//FASE 3 (con for)

var nom = ["E", "l", "i", "s", "a", "b", "e", "t"];
var comptadorMap = new Map();

function lletraRepetida(a) {

var comptador = 0;
    for(var i=0; i<nom.length; i++) {
     if(nom[i]/*.toLowerCase()*/ === a) {
        comptador++;
     } else {
   }
     }
     return ("La lletra " + a + " està repetida " + comptador + " cop/s");
 }

var newArray = nom.map(lletraRepetida);
  console.log(newArray.join("\n"));


//FASE 3 (opción 2)
var nom = ["E", "l", "i", "s", "a", "b", "e", "t"];
var comptadorMap = new Map();


function crearMapa(array){
  for(var i = 0; i < array.length; i++){
    if(!comptadorMap.has(array[i].toLowerCase())) {
    comptadorMap.set(array[i].toLowerCase(), 1);
    } else {
  var increment = (comptadorMap.get(array[i].toLowerCase())) + 1;
  comptadorMap.set(array[i].toLowerCase(),increment);
     }
     }
 }

 crearMapa(nom);
  console.log(comptadorMap);

//FASE 4  (con push)

var nom = ["E", "l", "i", "s", "a", "b", "e", "t"];
var cognom = ["M", "a", "i", "n", "e", "z"];

var myFullName = [];
myFullName.push(nom + "  " + cognom);

console.log(myFullName);

//FASE 4 - alternativa 2 (más DRY) (con concat)

    var nom = ["E", "l", "i", "s", "a", "b", "e", "t"];
    var cognom = ["M", "a", "i", "n", "e", "z"];
    var myFullName = nom.concat(" ").concat(cognom);

    console.log(myFullName);
