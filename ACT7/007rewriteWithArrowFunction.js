"use strict";

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

/* Sustituimos la función por funciones de flecha y en este caso no 
las metemos entre { } ya que solo devolvemos un argumento, en caso de escribir
varios lo pondríamos */