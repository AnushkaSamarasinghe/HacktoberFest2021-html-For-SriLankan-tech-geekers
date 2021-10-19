
//detecting button press

    var count = 0;
    var allButtons = document.querySelectorAll(".piano").length;
    

    
 function handleClick(){
  
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
                  
};
     while(count < allButtons){
         document.querySelectorAll(".piano")[count].addEventListener("click", handleClick);
         count++;
    }

//detecting keyboard press
document.addEventListener("keypress",function(event){

 makeSound(event.key);

 buttonAnimation(event.key);

});
   


function makeSound(key){

 switch (key) {

case "q":
var  A0= new Audio("sounds/A0.mp3");
    A0.play();
break;
case "w":
var B0 = new Audio("sounds/B0.mp3");
   B0.play();
break;
case "e":
var A1 = new Audio("sounds/A1.mp3");
    A1.play();
break;
case "r":
var B1 = new Audio("sounds/B1.mp3");
    B1.play();
break;
case "a":
var C1 = new Audio("sounds/C1.mp3");
    C1.play();
break;
case "s":
var D1 = new Audio("sounds/D1.mp3");
    D1.play();
break;
case "d":
var E1 = new Audio("sounds/E1.mp3");
    E1.play();
break;
case "f":
var F1 = new Audio("sounds/F1.mp3");
    F1.play();
break;
case "z":
var G1 = new Audio("sounds/G1.mp3");
    G1.play();
break;
case "x":
var A2 = new Audio("sounds/A2.mp3");
    A2.play();
break;
case "c":
var B2 = new Audio("sounds/B2.mp3");
    B2.play();
break;
case "u":
var C2 = new Audio("sounds/C2.mp3");
    C2.play();
break;
case "i":
var D2 = new Audio("sounds/D2.mp3");
    D2.play();
break;
case "o":
var E2 = new Audio("sounds/E2.mp3");
    E2.play();
break;

case "p":
var F2 = new Audio("sounds/F2.mp3");
F2.play();
break;

case "h":
var G2 = new Audio("sounds/G2.mp3");
G2.play();
break;

case "j":
var E5 = new Audio("sounds/E5.mp3");
E5.play();
break;

case "k":
    var F5 = new Audio("sounds/F5.mp3");
    F5.play();
     break;
    
    case "l":
        var A6 = new Audio("sounds/A6.mp3");
        A6.play();
    break;

case "b":
    var B6 = new Audio("sounds/B6.mp3");
    B6.play();
break;
case "n":
    var F6 = new Audio("sounds/F6.mp3");
    F6.play();
break;
case "m":
    var G6 = new Audio("sounds/G6.mp3");
    G6.play();
break;

default:console.log(buttonInnerHTML);
}

        }

  
//Flashing of buttons when pressed

function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+ currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
    activeButton.classList.remove("pressed");
 } ,100);
}

// this.style.color = "white";

//   document.querySelector("button").addEventListener("click", function(){
//   alert("I get clicked");
//   });
//   we can write an anonymous function and add it to the same line itself ,here the anonymous function is function(){alert("I get clicked");};

//var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//
//    for(var count = 0;count<numberOfDrumButtons;count++){
//        
//        document.querySelectorAll(".drum")[count].addEventListener("click", handleClick);
//        function handleClick(){
//          alert("I get clicked");
//      };
//    };
//
