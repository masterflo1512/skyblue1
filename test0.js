let elem = document.getElementById("elem");
let position = 0;

function move() {
  elem.style.marginLeft = position + "px";
  position++;
}

setInterval(move, 10);
