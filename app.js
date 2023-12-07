var pc = 0;
var you = 0;

function choose() {
    var yourPick = document.getElementsByClassName("btn");
    for (var i = 0; i < yourPick.length; i++){
        var button = yourPick[i];
        button.addEventListener('click', result)
        }
}


function result(event){
    var clicked = event.target;
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var myImage = document.getElementById('image2');
    myImage.src = "images/" + randomNumber + '.jpg';

    var pc2 = document.querySelector(".pc__counter");
    var you2 = document.querySelector(".your__counter");
    var result1 = document.querySelector(".result");

    /*TIE*/ 

    if(randomNumber==1 && clicked.value==1){
        result1.innerText = "It's a Tie";
    }
    if(randomNumber==2 && clicked.value==2){
        result1.innerText = "It's a Tie";
    }
    if(randomNumber==3 && clicked.value==3){
        result1.innerText = "It's a Tie";
    }

    /*WIN*/

    if(randomNumber==3 && clicked.value==1){
        result1.innerText = "You Win!";
        you++;
    }
    if(randomNumber==1 && clicked.value==2){
        result1.innerText = "You Win!";
        you++;
    }
    if(randomNumber==2 && clicked.value==3){
        result1.innerText = "You Win!";
        you++;
    }

     /*LOSE*/

    if(randomNumber==1 && clicked.value==3){
        result1.innerText = "You Lose";
        pc++;
    }
    if(randomNumber==2 && clicked.value==1){
        result1.innerText = "You Lose";
        pc++;
    } 
    if(randomNumber==3 && clicked.value==2){
        result1.innerText = "You Lose";
        pc++;
    }

    you2.innerText = "Your score: " + you;
    pc2.innerText = "Opponent's score: " + pc;
}
