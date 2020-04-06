
const qwerty 		= document.getElementById("qwerty");
const phrase	    = document.getElementById('phrase');
let   missed 		= 0;
const startButton   = document.querySelectorAll('.btn__reset')[0];
const buttons 		= document.querySelectorAll('.keyrow button');
let   hearts        = document.querySelectorAll(".tries");


let   phrases 	 = [
'Back in Black',
"Highway To Hell",
"Jailbrake",
"Up Around The Bend",
"If You Want Blood",
"Proud Mary",
"My Baby Left Me",
"Thunderstruck",
"Born On The Bayou"
];




// get rid of overlay
startButton.addEventListener("click", () => document.getElementById('overlay').style.display = "none");


function getRandomPhrasesAsArray(arr) {
			let randomArray = Math.floor(Math.random( ) * arr.length);
			let newSplit =  arr[randomArray].split('');
			return newSplit;
}

function addPhraseToDisplay (arr) {

	arr.forEach( letter => {
			let li = document.createElement("li");
			li.innerHTML = letter;		
			if (letter === ' ') {
				li.className = ('blank');
				li.style.padding  = "10px";
				li.style.display = 'flex';
			} else {
				li.className = ('letter');
				li.style.marginTop  = "10px";
			}
			phrase.firstElementChild.appendChild(li);
		});


}


function checkLetter (buttonLetter) {
		let guessValid = false;
		let li = document.querySelectorAll(".letter");
		for (const listItem of li) {
			if (buttonLetter.innerHTML.toLowerCase() === listItem.innerHTML.toLowerCase()) {
				listItem.className = "letter show";
				guessValid = true;
			}
		} 
		if(guessValid === false) {
			let heartLives = document.querySelectorAll('img');
			heartLives[missed].setAttribute("src", "images/lostHeart.png");
			missed = missed + 1;
			event.preventDefault();
		} 
		checkWin(missed);

}

function checkWin (score) {
		const letterShowing  = document.querySelectorAll(".show");
		const numOfLetter    = document.querySelectorAll(".letter");
		const overlay        = document.getElementById("overlay");
		const heading 		 = document.querySelector(".title");
			if(letterShowing.length === numOfLetter.length) {
				overlay.setAttribute("class", "start win");
				overlay.style.display = "flex";
				heading.innerHTML = "CongratuWelldone";
				restartButton();
			} else if (score === 5){
				console.log('Sorry better luck next time');
				overlay.setAttribute("class", "start lose");
				overlay.style.display = "flex";
				heading.innerHTML = "Better luck next time";
				restartButton();
			}

	}

	for(const button of buttons ) {
		button.addEventListener("click", (e) => {
			button.className = "chosen";
			let li = document.querySelectorAll(".letter");
			checkLetter(button);
		});
	};

let phraseArray = getRandomPhrasesAsArray(phrases);
addPhraseToDisplay(phraseArray);


	function restartButton() {
		startButton.innerHTML   = "Restart Game";
		startButton.classList.add("restart");
		let restart = document.querySelectorAll(".restart");
		for (const button of restart){
			button.addEventListener("click", () => {
				// location.reload(); == function I want to replace

				//reset hearts to play again 
				let heartLives = document.querySelectorAll('img');
				[].forEach.call(heartLives, function (lives) {
					lives.setAttribute('src', 'images/liveHeart.png');
				});
				// reset the ul and generate new phrase to play 
				document.getElementById('phrasesList').innerHTML = " ";
				const phraseArray = getRandomPhrasesAsArray(phrases);
				addPhraseToDisplay(phraseArray);
				missed = 0;
				// reset keyboard buttons
				let keyPress = document.querySelectorAll('#qwerty button');
				[].forEach.call(keyPress, function (letters) {
					letters.removeAttribute("class", ".chosen");
				});


});
		}
	}


// // function gameOver() {
// // 	for (const button of buttons) {
// // 	button.removeAttribute("class", ".show");		
// // 	}
// // 	let heartLives = document.querySelectorAll('img');
// // 	for(let i = 0; i< heartLives.length; i++){
// // 	heartLives[i].setAttribute("src", "images/liveHeart.png");		
// // 	}

// // 	let deleteOld = () => {
// // 	const ul = document.getElementById("phrasesList");
// // 	const deleteUl = document.querySelectorAll(".phrasesList li");
// // 	for (const listItem of deleteUl) {
// // 	ul.removeChild(listItem);
// // 	}
// // 	return deleteUl;
// // }
// // deleteOld()

// 	// startGame();


// }











