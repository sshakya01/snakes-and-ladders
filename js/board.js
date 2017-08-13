console.log('board.js is connected');

let cells = document.querySelectorAll('.cell');
let rows= document.querySelectorAll('.row');
let reverseRow = document.querySelectorAll('.row');
let input= document.querySelectorAll('input')
console.log(rows)
for(let i = 0; i < cells.length; i++){
  //cells[i].innerHTML = cells.length-i;// checking the position of the cell
  //cells[i].setAttribute('class', 'cell text');
  // changes the color of cell 7
  // cells[6].style.background = '#f3f3f3';
  // cells[16].style.background = '#f3f3f3';

  // change background image of cell
//   cells[26].style.backgroundImage = "url('https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/model/iphone7-model-select-201703?wid=1200&hei=630&fmt=jpeg')";
}
function outputname(){
  var x = document.getElementById('form1');
  var y = x.elements["name"].value;
  document.getElementById('#red').innerHTML= y;
}
