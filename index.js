var randomNumber1=Math.floor((Math.random())*6)+1;
var randomNumber2=Math.floor((Math.random())*6)+1;
var randomDiceImage= "dice"+ randomNumber1+".png";
var randomDiceImage1= "dice"+ randomNumber2+".png";
var randomImageSource= "./images/"+ randomDiceImage;
var randomImageSource1= "./images/"+ randomDiceImage1;

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource1);

if(randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML="🏳️ Player 1 Won!";
}else if(randomNumber1< randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Won! 🏳️";
}
else{
    document.querySelector("h1").innerHTML="Draw! 🎌 ";
}