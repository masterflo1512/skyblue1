let elem = document.getElementById("elem");
let position = 0;
let direction = 1;

function move() {
  elem.style.marginLeft = position + "px";
  if (position === window.innerWidth) direction = -1;
  position += direction;
  if (position === window.innerWidth) direction = 1;
  position += direction;
}

setInterval(move, 10);
