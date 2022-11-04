"use strict";

let a = (parseInt(prompt('Introduzca el primer número:'))); // Convertimos a int el dato que recogemos para que no de problemas en nuestra función.
// Un ejemplo de fallo que podría dar es que el número 12345 sea menor que 3, esto se debe a que no se recoge como int, pero con esta función lo arreglamos.
let b = (parseInt(prompt('Introduzca el segundo número:')));

if (isNaN(a) || isNaN(b)) { // Comprobamos que los valores introducidos sean números.
    alert('No se puede realizar una comparación de números enteros si uno o los dos valores no son números enteros.');
} else {
    alert('El menor entre ' + a + ' y ' + b +' es: ' + min(a,b));

    function min(a,b) {
        return Math.min(a,b); // Con el método Math.min() calculamos al instante el número menor entre los dos números introducidos.
    } 
}