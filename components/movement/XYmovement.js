'use strict'

function moveup(){
    if (x == 1){console.clear(); x = x;console.log("end")}
    
    else if (x != 1){
    
   
    removecharecter();
    x = x -1;
    let xy = [x]+[y];
    console.log(xy);
   // console.log(y);
    moveplayer(xy);
    }
}
function movedown(){
    if (x == 10){console.clear(); x = x; console.log("end");}
    
    else if (x != 10){
        
    removecharecter();
    x = x +1;
    let xy = [x]+[y];
    console.log(xy);
    //console.log(y);
    moveplayer(xy);
    }
}
function moveleft(){
    if (y == 1){console.clear(); y = y; console.log("end")}
    
    else if (y != 1){
        
    removecharecter();
    y = y -1;
    let xy = [x]+[y];
    console.log(xy);
   // console.log(x);
    moveplayer(xy);
   }
}
function moveright(){
   if (y == 10){console.clear(); y = y; console.log("end")}
   
   else if (y != 10){ 
    removecharecter();
    y = y + 1;
    let xy = [x]+[y];
    console.log(xy);
    //console.log(x);
    moveplayer(xy);
}
}



function createcherecter(){
x = 1;
y = 1;
let playerdiv = document.getElementById("11");
console.log(playerdiv);
let playerdivcharecter = document.createElement("div"); 

playerdivcharecter.id = "player";
//playerdivcharecter.innerText = "Me";
playerdiv.appendChild(playerdivcharecter);
}
function removecharecter (){
    if(x == null && y == null)
    {
        x = 1;
        y = 1;
        let playerdiv = document.getElementById([x]+[y]);
        playerdiv.innerText = "";
    }
    else{
    let playerdiv = document.getElementById([x]+[y]);
    playerdiv.innerText = "";}
    
}

function moveplayer(xy){
    console.clear();
    console.log(xy);
    let playerdiv = document.getElementById(xy);
    let playerdivcharecter = document.createElement("div"); 

    playerdivcharecter.id = "player";
    //playerdivcharecter.innerText = "Me";
    playerdiv.appendChild(playerdivcharecter);
}
   