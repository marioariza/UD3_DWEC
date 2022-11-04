"use strict";

// Pedimos los minutos que desea tener en el temporizador y los convertimos a enteros.
let minute = (parseInt(prompt('Escriba los minutos que quieres que dure tu temporizador:'))); 

// Comprobamos que el valor introducido no sea menor a 0.
while (minute < 0) {
    minute = (parseInt(prompt('VALOR INVÁLIDO. Escriba los minutos que quieres que dure tu temporizador:')));
}

// Pedimos los segundos que desea tener en el temporizador y los convertimos a enteros.
let second = (parseInt(prompt('Escriba los segundos que quieres que dure tu temporizador:')));

// Comprobamos que el valor introducido no sea menor a 0.
while (second < 0) {
    second = (parseInt(prompt('VALOR INVÁLIDO. Escriba los segundos que quieres que dure tu temporizador:')));
}

/* En el caso de los minutos y segundos permitiremos que el usuario no introduzca ningún valor en su campo, pero si eso ocurre
le asignaremos valor 0 para que nuestro temporizador funcione correctamente, aunque acabe al instante */
if (isNaN(minute) || isNaN(second)){
    minute = 0;
    second = 0;
}

/* En el caso de que tanto minutos como segundos sean igual a 0, se mostrará un 
alert advirtiendo que no es posible realizar un temporizador con los dos valores a 0. */
if (minute == 0 && second == 0) { 
    alert('No se puede hacer un temporizador sin minutos ni segundos asignados.');
} else {
    let temporizador = setInterval(function() {
    
        /* En el caso de que minute == 0 y second > 60, realizaremos la conversión de segundos a 
        minutos y segundos y a partir de ahí hacemos el temporizador */
        if (second > 60) {
            minute = minute + Math.floor((second / 60) % 60);
            second = second % 60;
        }

        // Si minute < 0, el temporizador finaliza.
        if (minute < 0) {
            clearInterval(temporizador);
        } else {
            second--;
            if (second == -1) { 
                /* Resta de minutos y adjudicación de valor a los segundos de cara a la visualización 
                (Ejemplo: De 01:00 pasará a 00:59) y no ocurrirá el caso de (De 1:00 a 1:59 o 1:01 a 0:59) */
                minute--;
                second = 59;
                if (minute < 0) { // Dentro del else si minute < 0, mostramos un alert final.
                    alert('¡¡PI-PI-PIIIII SE ACABO LA CUENTA ATRÁS!!!!');
                } else { // Añadimos cero con string de cara a la visualización y estilo del temporizador.
                    if (second < 10 && minute > 9) {
                        document.write(minute + ':' + '0' + second);
                        document.write('<br>');
                    } else if (minute < 10 && second > 9) {
                        document.write('0' + minute + ':' + second);
                        document.write('<br>');
                    } else if (minute < 10 && second < 10) {
                        document.write('0' + minute + ':' + '0' + second);
                        document.write('<br>');
                    } else {
                        document.write(minute + ':' + second);
                        document.write('<br>');
                    }
                }
            } else { // Añadimos cero con string de cara a la visualización y estilo del temporizador.
                if (second < 10 && minute > 9) {
                    document.write(minute + ':' + '0' + second);
                    document.write('<br>');
                } else if (minute < 10 && second > 9) {
                    document.write('0' + minute + ':' + second);
                    document.write('<br>');
                } else if (minute < 10 && second < 10) {
                    document.write('0' + minute + ':' + '0' + second);
                    document.write('<br>');
                } else {
                    document.write(minute + ':' + second);
                    document.write('<br>');
                }
            }
        }
    },1000, minute, second); // Declaramos que se produzca cada 1000 milisegundos (1 seg) e introducimos los valores minute y second.
}