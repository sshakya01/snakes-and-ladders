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

  whereIwas.innerHTML = "";

    // then add the dice roll to the player postition
}
  playerPosition1 += dieroll;
  console.log('added the dice roll -> ',playerPosition1);
  // change the corresponding div to the new player holder
  let whereToGo = document.getElementById(playerPosition1);
 //let id=playerPosition1.toString();
  whereToGo.innerHTML = 'P1';
  whereToGo.style.color ="red";
 //$('#red').appendTo('#id');
player1turn=false;
 switch(playerPosition1){
    case 1:
      return playerPosition1=38
    break;
    case 4:
      return playerPosition1=14
    break;
    case 9:
      return playerPosition1=31
    break;
      }

}

else{
let whereIwas2 = document.getElementById(playerPosition2);
if(playerPosition2 !== 0) {

  whereIwas2.innerHTML = "";
    // then add the dice roll to the player postition
}
  playerPosition2 += dieroll;
  console.log('added the dice roll -> ',playerPosition2);
  // change the corresponding div to the new player holder
  let whereToGo2 = document.getElementById(playerPosition2);
  whereToGo2.innerHTML = 'P2';
  whereToGo2.style.color="blue";
  //cells[playerPosition].innerHTML= player1;
player1turn=true;
}
}

