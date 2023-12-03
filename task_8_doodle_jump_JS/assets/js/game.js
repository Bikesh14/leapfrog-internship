/** Current game score */
let score = 0;
/** Maximum game score */
let maxScore = 0;
/** Game over flag */
let gameOver = false;

/**
 * Updates the game state
 */
function update() {
  requestAnimationFrame(update);
  if (gameOver) {
    return;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);

  //doodler
  doodler.x += velocityX;
  if (doodler.x > boardWidth) {
    doodler.x = 0;
  } else if (doodler.x + doodler.width < 0) {
    doodler.x = boardWidth;
  }

  velocityY += gravity;
  doodler.y += velocityY;
  if (doodler.y > canvas.height) {
    gameOver = true;
  }
  context.drawImage(
    doodler.img,
    doodler.x,
    doodler.y,
    doodler.width,
    doodler.height
  );

  //platforms
  for (let i = 0; i < platformArray.length; i++) {
    let platform = platformArray[i];
    if (velocityY < 0 && doodler.y < (boardHeight * 3) / 4) {
      platform.y -= initialVelocityY; //slide platform down
    }
    if (detectCollision(doodler, platform) && velocityY >= 0) {
      velocityY = initialVelocityY; //jump
    }
    context.drawImage(
      platform.img,
      platform.x,
      platform.y,
      platform.width,
      platform.height
    );
  }

  // clear platforms and add new platform
  while (platformArray.length > 0 && platformArray[0].y >= boardHeight) {
    platformArray.shift(); //removes first element from the array
    newPlatform(); //replace with new platform on top
  }

  //score
  updateScore();
  context.fillStyle = "black";
  context.font = "24px sans-serif";
  context.fillText('Your Score: '+score, 10, 40);

  if (gameOver) {
    context.fillStyle="red"
    context.font = "24px sans-serif";
    context.fillText(
      "Game Over: Press 'Space' to Restart",
      boardWidth / 6,
      boardHeight/2
    );
  }
}

/**
 * Moves the doodler character based on keyboard input
 * @param {Object} e - Keyboard event
 */
function moveDoodler(e) {
  if (e.code == "ArrowRight" || e.code == "KeyD") {
    //move right
    velocityX = 4;
    doodler.img = doodlerRightImg;
  } else if (e.code == "ArrowLeft" || e.code == "KeyA") {
    //move left
    velocityX = -4;
    doodler.img = doodlerLeftImg;
  } else if (e.code == "Space" && gameOver) {
    //reset
    doodler = {
      img: doodlerRightImg,
      x: doodlerX,
      y: doodlerY,
      width: doodlerWidth,
      height: doodlerHeight,
    };

    velocityX = 0;
    velocityY = initialVelocityY;
    score = 0;
    maxScore = 0;
    gameOver = false;
    placePlatforms();
  }
}
