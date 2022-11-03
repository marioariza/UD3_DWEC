"use strict";

let cadena = prompt('Escribe una frase para convertir a Cani:');

alert(leterCani(cadena));

function leterCani (cadena) {
    
    let dividir_cadena = cadena.split('');
    let mayuscula = 1;
    let resultado = '';

    for (let i = 0; i < dividir_cadena.length + 3; i++) {
        if(i < dividir_cadena.length) {
            if (mayuscula == 1 && dividir_cadena[i] != ' ') {
                if (dividir_cadena[i] == 'c') {
                    dividir_cadena[i] = 'k';
                    resultado = resultado + dividir_cadena[i].toUpperCase();
                    mayuscula = 0;
                } else {
                    resultado = resultado + dividir_cadena[i].toUpperCase();
                    mayuscula = 0;
                }
            } else if (dividir_cadena[i] != ' '){
                if (dividir_cadena[i] == 'c') {
                    dividir_cadena[i] = 'k';
                    resultado = resultado + dividir_cadena[i].toLowerCase();
                    mayuscula = 1;
                } else {
                    resultado = resultado + dividir_cadena[i].toLowerCase();
                    mayuscula = 1;
                } 
            } else {
                resultado = resultado + ' ';
            }
        } else {
            if (mayuscula == 1) {
                resultado = resultado + 'H';
                mayuscula = 0;
            } else {
                resultado = resultado + 'h';
                mayuscula = 1;
            }
        }    
    }
    return resultado;
}