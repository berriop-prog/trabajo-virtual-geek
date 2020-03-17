'use strict'; 
/* En este caso vamos a crear un código que nos diga cuantas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería de mostrar un mensaje con el número "525600".*/

var edad = 0;
var horas = 0;
function vida() {
    edad = (prompt('Ingrese de su edad'));
    horas = ((24*365)*edad);
    console.log('Su horas vividas son: ' + horas);
}
vida();