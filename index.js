

  var score1 = Math.floor(Math.random()*6) + 1;
  var score2 = Math.floor(Math.random()*6) + 1;

  document.querySelector(".dice .img1").setAttribute("src" , "images/dice"+score1+".png");
  document.querySelector(".dice .img2").setAttribute("src" , "images/dice"+score2+".png");

  if(score1 === score2){
    document.querySelector(".container h1").innerHTML = "Draw!";
  }
  else if(score1 > score2){
    document.querySelector(".container h1").innerHTML = "Player 1 Wins";
  }
  else{
    document.querySelector(".container h1").innerHTML = "Player 2 Wins";
  }
