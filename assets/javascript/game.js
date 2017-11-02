
var cities = ['lisbon', 'madrid', 'barcelona', 'paris',
'london', 'brussels', 'amsterdam', 'berlin',
'prague', 'moscow', 'budapest', 'vienna',
'munich', 'venice', 'florence', 'rome',
'ljubljana', 'salzburg', 'bucharest', 'milan'];

var wins;
var correctGuesses = [];
var lettersInAnswer;
var wrongGuesses = [];
var remainingGuesses;
var cityChosen;
var underscores;

function setUpGame() {
	wrongGuesses = [];
	answerArray = [];
	lettersInAnswer = [];
	remainingGuesses = 10;
	wins = 0;

	cityChosen = cities[Math.floor(Math.random() * cities.length)];
	console.log(cityChosen);
	lettersInAnswer = cityChosen.split("");
	underscores = lettersInAnswer.length;

	for (var i = 0; i < underscores; i++) {
		answerArray.push("_ ");
	}

	document.getElementById("current-word").innerHTML = answerArray.join(" ");
	document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
}

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	if (cityChosen.indexOf(userGuess) > -1) {
		for (var i = 0; i < underscores; i++) {
			if (userGuess === cityChosen[i]) {
				answerArray[i] = userGuess;
				document.getElementById("current-word").innerHTML = answerArray.join(" ");
			}
		}
	} else {
		wrongGuesses.push(userGuess);
		remainingGuesses--;
		document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
		document.getElementById("letters-guessed").innerHTML = wrongGuesses.join(" ");
	}

	if (answerArray.join(" ") === lettersInAnswer.join(" ")) {
		alert("Congratulations! You Win!");
		wins++;
		document.getElementById("wins").innerHTML = wins;
		setUpGame();
	}

	else if (remainingGuesses === 0) {
		alert("The answer was " + cityChosen + ". Please try again.");
		setUpGame();
	}
}

setUpGame();