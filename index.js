//manipulate dice 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");

//manipulate dice 2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");

//manipute h1 result
var heading = document.querySelector("h1");
if (randomNum1 > randomNum2) {
    heading.textContent = "Player 1 Wins";
}
else if (randomNum2 > randomNum1) {
    heading.textContent = "Player 2 Wins";
}
else {
    heading.textContent = "Tie";
}