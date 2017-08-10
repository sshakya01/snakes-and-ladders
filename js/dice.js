
function rollDice(){
    var die = document.getElementById("die");
    var d1 = Math.floor(Math.random() * 6) + 1;
    console.log(d1);
    die.innerHTML = d1;
return die;
    console.log(die)
    }

// var min = 1;
// var max = 6;
// function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
