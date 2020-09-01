document.body.onload = function ()
 {

   randomDiceChanger();

 }

function randomDiceChanger(){
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomNumber2 = Math.floor(Math.random()*6)+1;

  var imgDice1 = document.querySelector(".img1");
  imgDice1.setAttribute("src","images/dice"+randomNumber1+".png");

  var imgDice2 = document.querySelector(".img2");
  imgDice2.setAttribute("src","images/dice"+randomNumber2+".png");

  changeTitle(randomNumber1,randomNumber2);

}



function changeTitle(randomNumber1,randomNumber2){

      if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML = "🏁Player 1 Wins!";
      }else if (randomNumber1<randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🏁";
      }else{
        document.querySelector("h1").innerHTML = "Draw!";
      }

}
