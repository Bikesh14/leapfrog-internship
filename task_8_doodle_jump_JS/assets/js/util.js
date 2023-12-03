/**
 * Detects collision between two objects
 * @param {Object} a - First object
 * @param {Object} b - Second object
 * @returns {boolean} - True if collision detected, false otherwise
 */
function detectCollision(a, b) {
  return (
    a.x < b.x + b.width && //a's top left corner doesn't reach b's top right corner
    a.x + a.width > b.x && //a's top right corner passes b's top left corner
    a.y < b.y + b.height && //a's top left corner doesn't reach b's bottom left corner
    a.y + a.height > b.y
  ); //a's bottom left corner passes b's top left corner
}


/**
 * Updates the game score based on the doodler's vertical velocity
 */
function updateScore() {
  const points = Math.floor(10 * Math.random()); //(0-1) *50 --> (0-50)
  if (velocityY < 0) {
    // doddle going up
    maxScore += points;
    if (score < maxScore) {
      score = maxScore;
    }
  } 
}
