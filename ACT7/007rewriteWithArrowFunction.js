"use strict";

let ask = (question, yes, no) => yes() ? no() : no();

alert(ask());

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);