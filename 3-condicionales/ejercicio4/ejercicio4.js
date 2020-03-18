'use strict';
/*conversor de edad de perros a humanos. Reglas:
El primer año de un perro equivale a 15 años de humano
El segundo año de un perro equivale a nueve años de humano
A partir del tercero, cada año de perro equivale a 5 años de humano. */

var edad = 0;
edad = parseInt(prompt("Ingrese la edad del perro: "));
if (edad === 1) {
    console.log('El perro tiene 15 años humanos');
} else if (edad === 2) {
    console.log('El perro tiene 24 años  humanos');
} else if (edad > 2) {
    edad = (edad * 5) + 15 + 9 - 10;
    console.log("El perro tiene " + edad + " años humanos");
}