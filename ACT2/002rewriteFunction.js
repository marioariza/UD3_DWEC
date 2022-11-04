"use strict";
// Creo dos variables y dos funciones para que puedas ver que funcionan las dos en la ejecución.

let age = prompt('Introduzca su edad:'); // Pedimos que introduzca la edad.

while(age < 0) {
    age = prompt('Introduzca su edad:'); // Comprobamos que la edad no sea un número negativo.
}

if (isNaN(age)) { // Comprobamos que los valores introducidos sean números.
    alert('La edad tiene que ser un número entero.');
} else {
    // Función 1.
    checkAge(age);

    function checkAge (age) {
        return (age > 18) ? true : confirm('¿Tus padres te permitieron?'); // En esta función utilizamos el operador ? para crear un ternario.
    }
}

// ---------------------------------------------------

let age2 = prompt('Introduzca su edad:');

while(age2 < 0) {
    age2 = prompt('Introduzca su edad:'); // Comprobamos que la edad no sea un número negativo.
}

if (isNaN(age2)) { // Comprobamos que los valores introducidos sean números.
    alert('La edad tiene que ser un número entero.');
} else {
    // Función 2.
    checkAge2(age2);

    function checkAge2 (age2) {
        if (age2 > 18 || confirm('¿Tus padres te permitieron?')); // En esta función utilizamos OR || lógico para crearlo.
    }
}


