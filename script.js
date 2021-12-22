'use strict'

const root = document.getElementById("root");
let reset = document.getElementById("reset");

reset.addEventListener("click", function(){removecharecter(); x=1; y=1;  moveplayer([x]+[y])});

generatemap();
createcherecter()






