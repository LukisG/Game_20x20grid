let x;
let y;


window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `Last key pressed: ${e.key}`;
    //console.log(e.key);

    if(e.key == "ArrowUp" || e.key == "w" || e.key == "W") moveup(x, y), console.log("Up");
    else if(e.key == "ArrowDown" || e.key == "s" || e.key == "S") movedown(x, y), console.log("Down");
    else if(e.key == "ArrowLeft" || e.key == "a" || e.key == "A") moveleft(x, y), console.log("Left");
    else if(e.key == "ArrowRight" || e.key == "d" || e.key == "D") moveright(x, y), console.log("Right");
  }, false);