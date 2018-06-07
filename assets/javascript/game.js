

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var userGuess = null;
var letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];


document.onkeyup = function(event) {


    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;
        guessesLeft--;
    }


    if (letterToBeGuessed == userGuess) {
        wins++;
        console.log("You won!");
        guessesLeft = 10;
        guessesSoFar = [];
        letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];

    }


    if (guessesLeft == 0) {
        losses++;
        console.log("You lost!");
        guessesLeft = 10;
        guessesSoFar = [];
        letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];

    }

    var html = "<p><h1>The Psychic Game</h1></p>" + "<p>Guess what letter I'm thinking of?</h4></p>" + "<p>Wins: " +
        wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Your guesses so far: " + guessesSoFar + "</p>";

    document.querySelector("#Game").innerHTML = html;

}