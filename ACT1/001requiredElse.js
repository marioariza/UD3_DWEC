"use strict";

let age = prompt('Introduzca su edad:');

checkAge(age);

function checkAge (age) {

    if (age > 18) {
        return true;
    } 
    return confirm('¿Tus padres te permitieron?');
}

// En este caso la función funciona igual con else o sin él.