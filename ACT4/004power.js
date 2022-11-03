"use strict";

let x = prompt('Introduzca la base de la potencia:');
let n = prompt('Introduzca el exponente de la potencia:');

while (n < 1) { // Verificamos que el exponente no sea menor a 1.
    n = prompt('Este valor no puede ser menor a 0. Introduzca el exponente de la potencia:');
}

alert('La potencia con base ' + x + ' y exponente ' + n +' (' + x + '^' + n + ') tiene como solución: ' + pow(x,n));

function pow(x,n) {
    return Math.pow(x,n); // Con el método Math.pow() calculamos al instante la potencia entre la base y el exponente introducidos.
}