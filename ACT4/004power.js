"use strict";

let x = (parseInt(prompt('Introduzca la base de la potencia:'))); // Pedimos el valor de la variable base de la potencia y la convertimos a entero.
let n = (parseInt(prompt('Introduzca el exponente de la potencia:'))); // Pedimos el valor de la variable exponente de la potencia y la convertimos a entero.

while (n < 1) { // Verificamos que el exponente no sea menor a 1.
    n = prompt('Este valor no puede ser menor a 0. Introduzca el exponente de la potencia:');
}

if (isNaN(x) || isNaN(n)) { // Comprobamos que los valores introducidos sean números.
    alert('No se puede realizar una potencia si uno o los dos valores no son números enteros.');
} else {
    alert('La potencia con base ' + x + ' y exponente ' + n +' (' + x + '^' + n + ') tiene como solución: ' + pow(x,n));

    function pow(x,n) {
    return Math.pow(x,n); // Con el método Math.pow() calculamos al instante la potencia entre la base y el exponente introducidos.
    }
}
