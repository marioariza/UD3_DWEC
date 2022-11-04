"use strict";

let cadena = prompt('Escribe una frase para convertir a Cani:'); // Pedimos una cadena para convertirla a cani.

alert(leterCani(cadena));

function leterCani (cadena) {
    
    let dividir_cadena = cadena.split(''); // Array en el que dividimos la cadena en caracteres.
    let mayuscula = 1; // Controlador mayúscula y minúscula.
    let resultado = ''; // Cadena en la que iremos concatenando el resultado con los cambios.


    // Recorremos el array en su tamaño y 3 posiciones más para las H.
    for (let i = 0; i < dividir_cadena.length + 3; i++) {

        // Comprobamos si la posición se encuentra dentro del tamaño del array. 
        if(i < dividir_cadena.length) {
            if (mayuscula == 1 && dividir_cadena[i] != ' ') { // Comprobamos si es mayúscula y no es un espacio.
                if (dividir_cadena[i] == 'c') { // Comprobamos si es la letra c
                    dividir_cadena[i] = 'k'; // Si es la letra c, la cambiamos por una k.
                    resultado = resultado + dividir_cadena[i].toUpperCase(); // Convertimos la letra a mayúscula y concatenamos en la cadena resultado.
                    mayuscula = 0; // Cambiamos el controlador a minúscula.
                } else {
                    resultado = resultado + dividir_cadena[i].toUpperCase();
                    mayuscula = 0;
                }
            } else if (dividir_cadena[i] != ' '){ // Comprobamos si no es mayúscula y no es un espacio.
                if (dividir_cadena[i] == 'c') {
                    dividir_cadena[i] = 'k';
                    resultado = resultado + dividir_cadena[i].toLowerCase(); // Convertimos la letra a minúscula y concatenamos en la cadena resultado.
                    mayuscula = 1; // Cambiamos el controlador a mayúscula.
                } else {
                    resultado = resultado + dividir_cadena[i].toLowerCase();
                    mayuscula = 1;
                } 
            } else {
                resultado = resultado + ' '; // Si el carácter es un espacio lo dejamos tal cual
            }
        } else { // Si la posición se encuentra fuera del array de carácteres, es decir, en las 3 posiciones de las H.
            if (mayuscula == 1) {
                resultado = resultado + 'H'; // Si el anterior carácter es minúscula, la H sera mayúscula y concatenamos en la cadena resultado.
                mayuscula = 0;
            } else {
                resultado = resultado + 'h'; // Si el anterior carácter es mayúscula, la h sera minúscula y concatenamos en la cadena resultado.
                mayuscula = 1;
            }
        }    
    }
    return resultado; // Por último devolvemos la cadena resultado ya convertida a cani.
}