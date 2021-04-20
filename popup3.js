let myAudio2 = document.getElementById('bearisbestpt2');
myAudio2.addEventListener('canplaythrough', null);

let secondNoise = document.getElementById('secondnoise');
secondNoise.addEventListener('click', (e)=>{
	myAudio2.play();
});

let guesses = document.getElementsByClassName('multiplechoice');
for (var i = 0; i < guesses.length; i++) {
    guesses[i].addEventListener('click', (e)=>{
    	if (e.target.id === 'correctanswer') {
    		let newURL = "https://youtu.be/WaaANll8h18?t=33";
    		chrome.tabs.create({ url: newURL });
    	}
	});
}
