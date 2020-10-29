var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2;
var car1_image, car2_image;
var track, ground;

function preload(){
  
  car1_image=loadImage("images/mario2.jpg");
  car2_image=loadImage("images/mario2.jpg");
  track=loadImage("images/track.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState==2){
    game.end();
  }
}
