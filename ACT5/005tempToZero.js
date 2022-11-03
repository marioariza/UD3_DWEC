"use strict";

let minute = (parseInt(prompt('Escriba los minutos que quieres que dure tu temporizador:')));
while (minute < 0) {
    minute = (parseInt(prompt('VALOR INVÁLIDO. Escriba los minutos que quieres que dure tu temporizador:')));
}

let second = (parseInt(prompt('Escriba los segundos que quieres que dure tu temporizador:')));
while (second < 0) {
    second = (parseInt(prompt('VALOR INVÁLIDO. Escriba los segundos que quieres que dure tu temporizador:')));
}


let temporizador = setInterval(function() {
    
    if (second > 60) {
        minute = minute + Math.floor((second / 60) % 60);
        second = second % 60;
    }

    if (minute < 0) {
        clearInterval(temporizador);
    } else {
        second--;
        if (second == -1) {
            minute--;
            second = 59;
            if (minute < 0) {
                let audio = new Audio('alarma.wav');
                audio.play();
                alert('¡¡PI-PI-PIIIII SE ACABO LA CUENTA ATRÁS!!!!');
            } else {
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
        } else {
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

},1000, minute, second); 