"use strict";

let a = prompt('Introduzca el primer número:');
let b = prompt('Introduzca el segundo número:');

alert('El menor entre ' + a + ' y ' + b +' es: ' + min(a,b));

function min(a,b) {
    return Math.min(a,b); // Con el método Math.main() calculamos al instante el número menor entre los dos números introducidos.
}