'use strict';

/*Notificaciones arcoiris
Crea un div que contenga un título "NOTIFICACIÓN" y un texto "Mensaje por defecto". Crea también tres clases:
La primera, .success, aplicará un borde verde oscuro, un fondo verde claro y el color de fuente verde oscuro
La segunda, .error, igual pero sustituyendo el verde por rojo
La tercera, .warning, lo mismo pero usando el color amarillo

Usando JavaScript, haremos que:
Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'
Cambia la clase en HTML y comprueba que el código de JavaScript funciona. */

const state = document.querySelector('.sucess');
const content = '<h1>CORRECTO</h1> <p>Los datos son correctos</p>';
state.innerHTML = content;

const state = document.querySelector('.warning');
const content = '<h1>AVISO</h1> <p>Tenga cuidado</p>';
state.innerHTML = content; 

const state = document.querySelector('.error');
const content = '<h1>ERROR</h1> <p>Ha surgido un error</p>';
state.innerHTML = content;