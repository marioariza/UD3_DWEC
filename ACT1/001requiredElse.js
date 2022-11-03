"use strict";

let age = prompt('Introduzca su edad:'); 

checkAge(age);

function checkAge (age) {

    if (age > 18) { // Si la edad es mayor no mostrará nada.
        return true;
    } 
    return confirm('¿Tus padres te permitieron?'); // Si la edad es menor hará una pregunta para permitir autorización.
}

// En este caso la función funciona igual con else o sin él.