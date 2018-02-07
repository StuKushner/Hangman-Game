// VARIABLES

var cities = ['lisbon', 'madrid', 'barcelona', 'paris',
'london', 'brussels', 'amsterdam', 'berlin',
'prague', 'moscow', 'budapest', 'vienna',
'munich', 'venice', 'florence', 'rome',
'ljubljana', 'salzburg', 'bucharest', 'milan'];

//Holds Solution
var cityChosen = "";
// Breaks the letters in the solution to be stored into the array
var lettersInAnswer = [];
// Depending on the solution, this variable will give us the number of blanks
var underscores = 0;
// Holds a mixture of blank and solved letters
var correctGuesses = [];
// Holds the wrong guesses
var wrongGuesses = [];

//Game Counters
var wins = 0;
var losses = 0;
var remainingGuesses = 10;

// FUNCTIONS

// Starts and restarts the game
function setUpGame() {
	//Resets the guesses back to 0
	remainingGuesses = 10;
	//Choose a random city from the wordlist
	cityChosen = cities[Math.floor(Math.random() * cities.length)];
	//Splits the city chosen into individual letters
	lettersInAnswer = cityChosen.split("");
	//Count the number of letters in the word
	underscores = lettersInAnswer.length;

	// Reset both the correct and wrong guesses arrays
	correctGuesses = [];
	wrongGuesses = [];

	// For each letter, put an underscore
	for (var i = 0; i < underscores; i++) {
		correctGuesses.push("_ ");
	}

	// Join the correct in the answer array together
	document.getElementById("current-word").innerHTML = correctGuesses.join(" ");
	// Join all of the wrong guesses together
	document.getElementById("letters-guessed").innerHTML = wrongGuesses.join(" ");
	// Reprints the number of remaining guesses
	document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
}

// This function compares the person's guess with what's in the answer
function checkLetter(letter) {
	// If a letter is found anywhere in the word, this will be triggered
	var letterInWord = false;

	// Go through the word and see if the letter is in the array
	for (var i = 0; i < underscores; i++) {
		if (cityChosen[i] === letter) {
			// If it is, the boolean becomes true, and when that happens...
			letterInWord = true;
		}
	}

	// ...figure out where it is...
	if (letterInWord) {
		// ... go through the word
		for (var j = 0; j < underscores; j++) {
			// ...and populate the correct guesses with every instance of the letter 
			if (cityChosen[j] === letter) {
				correctGuesses[j] = letter;
			}
		}
		// For testing
		console.log(correctGuesses);

	// If the letter doesn't exist at all...
	} else {
		// ...then we add the letter to the wrong guesses array and give the player one less guess
		wrongGuesses.push(letter);
		remainingGuesses--;
	}
}

// This function has all the code that needs to be run after the guess is made
function roundComplete() {
	console.log("Wins: " + wins + " | Losses: " + losses + " | Guesses: " + remainingGuesses);

	// Join the correct in the answer array together
	document.getElementById("current-word").innerHTML = correctGuesses.join(" ");
	// Join all of the wrong guesses together
	document.getElementById("letters-guessed").innerHTML = wrongGuesses.join(" ");
	// Reprints the number of remaining guesses
	document.getElementById("remaining-guesses").innerHTML = remainingGuesses;

	// If we got every answer correct...
	if (lettersInAnswer.toString() === correctGuesses.toString()) {
		// ... alert the player that they won and increase the win counter by 1
		wins++;
		alert("Congratulations! You Win!");

		// Update the win counter in the HTML and restart the game
		document.getElementById("wins").innerHTML = wins;
		setUpGame();
	}
	// If the player didn't guess the word before running out of guesses...
	else if (remainingGuesses === 0) {
		// ... alert the person of the answer and increase the losses counter by 1
		losses++;
		alert("The answer was " + cityChosen + ". Please try again.");
		
		// Update the losses counter in the HTML and restart the game
		document.getElementById("losses").innerHTML.losses;
		setUpGame();
	}
}

// Main Process - this controls what is actually run

// Sets the game up
setUpGame();

// Initiate the function for capturing key clicks
document.onkeyup = function(event) {
	// Convert the person's key click to lower case
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// Runs the code to check for correctness
	checkLetter(userGuess);
	// Runs the code after each round is done
	roundComplete();
};