var player1=Math.floor(Math.random()*6)+1;
var diceImg1="file:///C:/Users/Ragini/Desktop/images/dice"+player1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",diceImg1);


var player2=Math.floor(Math.random()*6)+1;
var diceImg2="file:///C:/Users/Ragini/Desktop/images/dice"+player2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",diceImg2);


if(player1>player2){
document.querySelector("h1").innerHTML = "Player1 wins!";
}else if(player1<player2){
document.querySelector("h1").innerHTML = "Player2 wins!"
}else {
document.querySelector("h1").innerHTML="Draw!";
}
