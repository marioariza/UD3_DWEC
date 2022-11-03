"use strict";

let age = prompt('Introduzca su edad:');
checkAge(age);

function checkAge (age) {
    return (age > 18) ? true : confirm('¿Tus padres te permitieron?'); // En esta función utilizamos el operador ? para crear un ternario.
}

let age2 = prompt('Introduzca su edad:');
checkAge2(age2);

function checkAge2 (age2) {
    if (age2 > 18 || confirm('¿Tus padres te permitieron?')); // En esta función utilizamos OR || lógico para crearlo.
}

