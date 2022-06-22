let randomNumber1 = Math.floor(6 * Math.random()) + 1;
let randomNumber2 = Math.floor(6 * Math.random()) + 1;

let diceImage1 = document.querySelector(".img1");
let diceImage2 = document.querySelector(".img2");

diceImage1.setAttribute("src", `images/dice${randomNumber1}.png`);
diceImage2.setAttribute("src", `images/dice${randomNumber2}.png`);

let heading = document.querySelector(".container h1");

if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins!";
} else {
    heading.textContent = "Draw!";
}