
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case KEY_LEFT:
      console.log("left key hit by a finger");
      break;
    case KEY_UP:
      console.log("up key hit by a finger");
      break;
    case KEY_RIGHT:
      console.log("right key hit by a finger");
      break;
    case KEY_DOWN:
      console.log("down key hit by a finger");
      break;
    default:
      console.log("this key doesnt matter", e.keyCode);
  }
});

const position = { x: 0, y: 0 };

init();
setInterval(loop, 1000);

// initilize the game
function init() {
  clear();
  drawBackground();
}

// the main loop
function loop() {
  clear();
  drawBackground();
  drawIndigoRect(position.x, position.y);
  position.x += 50;
}

// clear the screen before next draw
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// draw background
function drawBackground() {
  ctx.fillStyle = "salmon";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// draw rectangle
function drawIndigoRect(x = 0, y = 0) {
  ctx.fillStyle = "indigo";
  ctx.fillRect(x, y, 50, 50);
}