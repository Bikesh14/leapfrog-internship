let canvas;
/** Context for drawing on the game canvas */
let context;

/** Image for the doodler character facing right and left */
let doodlerRightImg;
let doodlerLeftImg;

/** Doodler character*/
let doodler = {
  img: null,
  x: doodlerX,
  y: doodlerY,
  width: doodlerWidth,
  height: doodlerHeight,
};

window.onload = function () {
  canvas = document.getElementById("canvas");
  canvas.height = boardHeight;
  canvas.width = boardWidth;
  context = canvas.getContext("2d"); //for drawing on the canvas

  //load images
  doodlerRightImg = new Image();
  doodlerRightImg.src = "./assets/images/doodler-right.png";
  doodler.img = doodlerRightImg;
  doodlerRightImg.onload = function () {
    context.drawImage(
      doodler.img,
      doodler.x,
      doodler.y,
      doodler.width,
      doodler.height
    );
  };

  doodlerLeftImg = new Image();
  doodlerLeftImg.src = "./assets/images/doodler-left.png";

  platformImg = new Image();
  platformImg.src = "./assets/images/platform.png";

  velocityY = initialVelocityY;
  placePlatforms();
  requestAnimationFrame(update);
  document.addEventListener("keydown", moveDoodler);
};
