"use strict";

let x = prompt('Introduzca la base de la potencia:');
let n = prompt('Introduzca el exponente de la potencia:');

while (n < 1) {
    n = prompt('Este valor no puede ser menor a 0. Introduzca el exponente de la potencia:');
}




alert('La potencia con base ' + x + ' y exponente ' + n +' (' + x + '^' + n + ') tiene como solución: ' + pow(x,n));

function pow(x,n) {
    return Math.pow(x,n);
}