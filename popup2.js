import { bearIsBest, grilledFoot } from './background.js';
import { choice as stringChoice } from './popup.js';

var allNoises = [bearIsBest, grilledFoot];

var choice = null;

console.log("String choice: " + stringChoice.name);

console.log(".name: " + bearIsBest.name);

function getChoice() {
	for (var i = 0; i < allNoises.length; i++) {
		if (allNoises[i].name === stringChoice) {
			console.log("HERERE~");
			choice = allNoises[i];
		}
	}
};

let firstNoise = document.getElementById('firstnoise');
firstNoise.addEventListener('click', (e)=>{
	getChoice();
	choice.part1.play();
});

// bearIsBestPt1.play();

// let myAudio1 = document.getElementById('bearisbestpt1');
// myAudio1.addEventListener('canplaythrough', null);

// let myAudio2 = document.getElementById('bearisbestpt2');
// myAudio2.addEventListener('canplaythrough', null);

// let firstNoise = document.getElementById('firstnoise');
// firstNoise.addEventListener('click', (e)=>{
// 	myAudio1.play();
// });

//by class name template

// let firstNoise = document.getElementsByClassName('seasonbutton');
// for (var i = 0; i < firstNoise.length; i++) {
//     firstNoise[i].addEventListener('click', (e)=>{
//   		myAudio1.play();
// 	});
// }

// let guesses = document.getElementsByClassName('seasonbutton');
// for (var i = 0; i < guesses.length; i++) {
//     guesses[i].addEventListener('click', (e)=>{
//     	if (e.target.id === 'season3') {
//     		bearIsBest.part2.play();
//     		bearIsBest.part2.onended = function() {
//     			window.location.href="popup2.html";    			
//     		}

//     	}
// 	});
// }

// guess.addEventListener('click', (e)=>{
//     myAudio2.play();

// });
// inputGuess.onclick = function(element) {
//     myAudio2.play();
// };