
var cities = ['lisbon', 'madrid', 'barcelona', 'paris',
'london', 'brussels', 'amsterdam', 'berlin',
'prague', 'moscow', 'budapest', 'vienna',
'munich', 'venice', 'florence', 'rome',
'ljubljana', 'salzburg', 'bucharest', 'milan'];

var wins;
var answerArray = [];
var wrongGuesses = [];
var remainingGuesses;
var cityChosen;

document.onkeyup = function(event) {
	setUpGame();
	logic();
	winOrLose();
}
	
function setUpGame() {
	wrongGuesses = [];
	answerArray = [];
	remainingGuesses = 10;
	wins = 0;

	cityChosen = cities[Math.floor(Math.random() * cities.length)];
	cityLength = cityChosen.length;

	for (var i = 0; i < cityLength; i++) {
		answerArray.push("_ ");
	}

	document.getElementById("current-word").innerHTML = answerArray.join("");
}

function logic() {
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	for (var i = 0; i < cityChosen.length; i++) {
		if (userGuess === cityChosen[i]) {
			answerArray[i] = userGuess;
			remainingGuesses--;
			document.getElementById("current-word").innerHTML = answerArray.join("");
			document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
		} else {
			wrongGuesses.push(", ");
			remainingGuesses--;
			document.getElementById("letters-guessed").innerHTML = wrongGuesses.join("");
			document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
		}
	}
}

function winOrLose() {
	if (answerArray[i] === cityChosen) {
		alert("Congratulations! You Win!");
		wins++;
		document.getElementById("wins").innerHTML = wins;
		startGame();
	}

	if (remainingGuesses === 0) {
		alert("The answer was " + cityChosen = ". Please try again.");
		startGame();
	}
}

