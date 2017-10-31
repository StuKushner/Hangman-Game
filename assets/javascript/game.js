//Variables

var cities = ['lisbon', 'madrid', 'barcelona', 'paris',
	 'london', 'brussels', 'amsterdam', 'berlin',
	 'prague', 'moscow', 'budapest', 'vienna',
	 'munich', 'venice', 'florence', 'rome',
	 'ljubljana', 'salzburg', 'bucharest', 'milan'];

var cityChosen = cities[Math.floor(Math.random * cities.length)];

var answerArray = [];

var s;
var wrongGuesses = [];
var guessesLeft = 10;
var wins = 0;


//Code

for (var i = 0; i < cityChosen.length; i++) {
	answerArray[i] = "_";
}

s = answerArray.join(" ")
document.getElementById('current-word').innerhtml = s;

var g = document.getElementById('remaining-guesses');
g.innerHTML = guessesLeft;

var w = document.getElementById('wins');
w.innerHTML = wins;

document.onkeyup = function(event) {
	var guess = event.key;

	for (var j = 0; j < cityChosen.length; j++) {
		if (cityChosen[j] === guess) {
			answerArray[j] = guess;
		}
	}

	if (guess !== cityChosen[j]) {
		wrongGuesses.push[guess];
		guessesLeft--;
		var wg = document.getElementById('letters-guessed');
		wg.innerHTML = wrongGuesses;
	}

	if (cityChosen === answerArray) {
		alert("Congratuations! You Win!");
		wins++;
	}

	if (guessesLeft === 0) {
		alert("I'm sorry, the answer was " + cityChosen + ". Please try again.");
	}

	console.log(cityChosen);
}
