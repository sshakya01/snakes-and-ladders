
function rollDice(){
    var $die = $("#die");
    var d1 = Math.floor(Math.random() * 6) + 1;// generating random no. from 1-6
    console.log(d1);
    die.innerHTML = d1;
    // return die;
    console.log('what we rolled --> ', d1);
    move(d1);
}
