"use strict";

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

        if (age > 18) { // Si la edad es mayor no mostrará nada.
            return true;
        } 
        return confirm('¿Tus padres te permitieron?'); // Si la edad es menor hará una pregunta para permitir autorización.
    }
}

// En este caso la función funciona igual con else o sin él.