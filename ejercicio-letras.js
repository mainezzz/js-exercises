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

//FASE 2  (con función para mirar si es vocal o no) + función isNaN

var nom = ["e", "l", "i", "s", "a", "b", "e", "t", "3"];
var vocals = ["a", "e", "i", "o", "u"];

function letras(letter){
 if(esNumeroOque(letter)) return;
  if(vocals.indexOf(letter) !== -1){
    console.log(letter + " es una vocal");
  }
  else {
    console.log(letter + " es una consonante");
  }
}

for(var i = 0; i < nom.length; i++){
  letras(nom[i]);
}


function esNumeroOque(numero){
                if(isNaN(numero)){
                  console.log("Has introducido una letra");
                  return false;
                }else{
                  alert("Los nombres no contienen números!");
                  return true;
                }
            }

/*for(var i = 0; i < nom.length; i++){
  esNumeroOque(nom[i]);
}
*/

//FASE 3
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
