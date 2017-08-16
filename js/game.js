console.log("game.js loaded");

let player1turn = true;
const $player1=$('#red');
const $player2=$("#blue");
const $die=$("#die");
var playerPosition1 = 0;
var playerPosition2 = 0;

function move(dieroll){
  // first remove the X from the current one where you are
  if(player1turn==true){// p1 turn
  if(playerPosition1=== 100){alert ('Player1 won')};
  playerPosition1 += dieroll;//  add the dice roll to the player position
  console.log('added the dice roll -> ',playerPosition1);
  // change the corresponding div to the new player holder
  let whereToGo = document.getElementById(playerPosition1);
  //let id=playerPosition1.toString();

  // let p1 = document.querySelector("#red");
  $player1.appendTo(whereToGo);// move the player to the new location
logic(playerPosition1);
  player1turn=false;
}else{
  playerPosition2 += dieroll;
  console.log('added the dice roll -> ',playerPosition2);
  // change the corresponding div to the new player holder
let whereToGo2 = document.getElementById(playerPosition2);
  $player2.appendTo(whereToGo2);
if(playerPosition2=== 100){alert ('Player2 won')};
logic(playerPosition2);
player1turn=true;
}
}

