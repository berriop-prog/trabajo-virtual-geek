'use strict';
/*Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para calcularlo. El resultado debe mostrarse en la consola del navegador.*/

var total = 126;

function dividir(){  
    total= 126/9; 
    console.log('La cada uno debe pagar: ' + total + '  y Ana : '+ (total+2));
  }
  
  dividir();
  