'use strict'; 
/* Años para jubilarse. NO FUNCIONA*/

const userAge = document.querySelector('.user__age');
const yearsToRetirement = 67 - parseInt(userAge);
function calcularAge() {
    yearsToRetirement= ((24*365)*userAge);
    console.log(`Te has consumido ${yearsToRetirement} horas de oxigeno`);
    //console.log('Su horas vividas son: ' + horas);
}
calcularAge();

//console.log(`Te has consumido ${yearsToRetirement} horas de oxigeno`);