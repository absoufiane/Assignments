// Function the game 
function game(){
    var num = parseInt(Math.random() * 10 + 1);
    var inputNumber = prompt("input a guess number between 1 to 10");
    if(isNaN(inputNumber)) {
      alert("Please, write a Number");
      
    } else {
        if(num == inputNumber){
            alert("Good Work");
        } else {
            alert("Not matched Number is = " + num);
        }
    }
}