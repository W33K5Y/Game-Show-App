const qwerty 		= document.getElementById("qwerty");
const phrase	    = document.getElementById('phrase');
let   score 		= 0;
const startButton   = document.querySelectorAll('.btn__reset')[0];
const buttons 		= document.querySelectorAll('.keyrow button');
let   phrases 	 = [
'This is a phrase',
'Another phrase here',
"Oh my god another phrase",
"So many phrases",
"The fifth phrase"
];





startButton.addEventListener("click", () => document.getElementById('overlay').style.display = "none");


function getRandomPhrasesAsArray(arr) {
	let randomArray = Math.floor(Math.random( ) * arr.length);
	let newSplit =  arr[randomArray].split('');
	return newSplit;
}

const phraseArray = getRandomPhrasesAsArray(phrases);

function addPhraseToDisplay (arr) {

	arr.forEach( letter => {
		let li = document.createElement("li");
		li.innerHTML = letter;		
		if (letter === ' ') {
			li.className = ('blank');
			li.style.padding  = "10px";
		} else {
			li.className = ('letter');
			li.style.marginTop  = "10px";
		}
		phrase.firstElementChild.appendChild(li);
	});


}

function checkLetter (buttonLetter) {
	let li = document.querySelectorAll(".letter");
	for (listItem of li) {
		if (buttonLetter.innerHTML === listItem.innerHTML.toLowerCase()) {
			listItem.className = "show";

		}
	}	
}

for(const button of buttons ) {
	button.addEventListener("click", (e) => {
		button.className = "chosen";
		let li = document.querySelectorAll(".letter");
		checkLetter(button);
		for(listItem of li) {			  
			if(e.target.innerHTML !== listItem.innerHTML) {
				// No idea whats going on 
				console.log('you guessed wrong try again');
			}

		}

	});
};



addPhraseToDisplay(phraseArray);

// console.log(getRandomPhrasesAsArray(phrases));

