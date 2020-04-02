const qwerty 		= document.getElementById("qwerty");
const phrase	    = document.getElementById('phrase');
let   score 		= 0;
const startButton   = document.querySelectorAll('.btn__reset')[0];
const buttons 		= document.querySelectorAll('.keyrow button');
let   phrases 	 = [
'this is a phrase',
'another phrase here',
"oh my god another phrase",
"so many phrases",
"the fifth phrase"
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
		if (buttonLetter.innerHTML === listItem.innerHTML) {
		listItem.className = "show";
		console.log('hello');
	}
	}
	
	
}

for(const button of buttons ) {
	button.addEventListener("click", (e) => {

		checkLetter(button);
	});

};



addPhraseToDisplay(phraseArray);

// console.log(getRandomPhrasesAsArray(phrases));

