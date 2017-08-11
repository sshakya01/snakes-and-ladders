console.log("gamejs loaded");


//let player1turn = true;
const player1=document.querySelector("#red");
//const player2=document.querySelector("#blue");
const die=document.getElementById("die");
//let cells = document.querySelectorAll('.cell')
var playerPosition1 = 0;
// var playerPosition2 = 0;
document.addEventListener("click",function(){
//   turns +=1
move(die);
});

function move(dieroll){
  // first remove the X from the current one where you are
let whereIwas = document.getElementById(playerPosition1);
if(playerPosition1 !== 0) {

  whereIwas.innerHTML = playerPosition1;
    // then add the dice roll to the player postition
}
  playerPosition1 += dieroll;
  console.log('added the dice roll -> ',playerPosition1);
  // change the corresponding div to the new player holder
  let whereToGo = document.getElementById(playerPosition1);
  whereToGo.innerHTML = 'X';
  //cells[playerPosition].innerHTML= player1;

}
