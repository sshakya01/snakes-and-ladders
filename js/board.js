console.log('board.js is connected');

let cells = document.querySelectorAll('.cell');
let rows= document.querySelectorAll('.row');
let reverseRow = document.querySelectorAll('.row');
let input= document.querySelectorAll('input')
let textbox= document.querySelectorAll('.textBox')
//console.log(rows)
//for(let i = 0; i < cells.length; i++){
  //cells[i].innerHTML = cells.length-i;// checking the position of the cell
  //cells[i].setAttribute('class', 'cell text');

let boton=document.querySelector('#bot');// selecting the add a player button
boton.addEventListener('click', function(){
  let player= document.querySelector("#red")
  let inputText = document.querySelector('#name').value;
  player.innerHTML=inputText;
})

// button.addEventListener('click', function(){
// textBox.textContent = 'ROLL DICE!!!'

// })
