console.log("game.js loaded");


let player1turn = true;
const player1=document.querySelector("#red");
const player2=document.querySelector("#blue");
const die=document.getElementById("die");
//let cells = document.querySelectorAll('.cell')
var playerPosition1 = 0;
var playerPosition2 = 0;
//document.addEventListener("click",function(){
//move(die);
//});

function move(dieroll){
  // first remove the X from the current one where you are
if(player1turn==true){
let whereIwas = document.getElementById(playerPosition1);
if(playerPosition1 !== 0) {

  whereIwas.innerHTML = playerPosition1;

    // then add the dice roll to the player postition
}
  playerPosition1 += dieroll;
  console.log('added the dice roll -> ',playerPosition1);
  // change the corresponding div to the new player holder
  let whereToGo = document.getElementById(playerPosition1);
 //let id=playerPosition1.toString();
  whereToGo.innerHTML = 'X';
 //$('#red').appendTo('#id');
player1turn=false;
}

else{
let whereIwas2 = document.getElementById(playerPosition2);
if(playerPosition2 !== 0) {

  whereIwas2.innerHTML = playerPosition2;
    // then add the dice roll to the player postition
}
  playerPosition2 += dieroll;
  console.log('added the dice roll -> ',playerPosition2);
  // change the corresponding div to the new player holder
  let whereToGo2 = document.getElementById(playerPosition2);
  whereToGo2.innerHTML = 'P2';
  //cells[playerPosition].innerHTML= player1;
player1turn=true;
}
}
