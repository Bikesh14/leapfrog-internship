//Width and height of the game board
const boardWidth = 560;
const boardHeight = 560;

//Width and height of the doodler character 
const doodlerWidth = 40;
const doodlerHeight = 40;

//Initial horizontal and vertical position of the doodler character 
let doodlerX = boardWidth / 2 - doodlerWidth / 2;
let doodlerY = (boardHeight * 7) / 8 - doodlerHeight;

//Horizontal and vertical velocity of the doodler character 
let velocityX = 0;

//doodler jump speed
let velocityY = 0;

//Starting vertical velocity of the doodler character 
const initialVelocityY = -8;
//Gravity affecting the doodler character 
const gravity = 0.4;

//Width and height of the platforms
const platformWidth = 80;
const platformHeight = 20;
