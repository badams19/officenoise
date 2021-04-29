let basketballPt1 = new Audio(chrome.runtime.getURL("noises/basketballpt1.ogg"));
let basketballPt2 = new Audio(chrome.runtime.getURL("noises/basketballpt2.ogg"));
let basketballVid = "https://youtu.be/IS2Ozgx-ih8?t=267";

let grilledFootPt1 = new Audio(chrome.runtime.getURL("noises/grilledfootpt1.ogg"));
let grilledFootPt2 = new Audio(chrome.runtime.getURL("noises/grilledfootpt2.ogg"));
let grilledFootVid = "https://youtu.be/L6Cqt6kQsas?t=186";

let bearIsBestPt1 = new Audio(chrome.runtime.getURL("noises/bearisbestpt1.ogg"));
let bearIsBestPt2 = new Audio(chrome.runtime.getURL("noises/bearisbestpt2.ogg"));
let bearIsBestVid = "https://youtu.be/WaaANll8h18?t=33";

let imPregnantPt1 = new Audio(chrome.runtime.getURL("noises/impregnantpt1.ogg"));
let imPregnantPt2 = new Audio(chrome.runtime.getURL("noises/impregnantpt2.ogg"));
let imPregnantVid = "https://youtu.be/bBsh6iztmJI?t=190";

let moroccanXmasPt1 = new Audio(chrome.runtime.getURL("noises/moroccanxmaspt1.ogg"));
let moroccanXmasPt2 = new Audio(chrome.runtime.getURL("noises/moroccanxmaspt2.ogg"));
let moroccanXmasVid = "https://youtu.be/s3I8RRjSqTI?t=525";

let dogsBarkingPt1 = new Audio(chrome.runtime.getURL("noises/dogsbarkingpt1.ogg"));
let dogsBarkingPt2 = new Audio(chrome.runtime.getURL("noises/dogsbarkingpt2.ogg"));
let dogsBarkingVid = "https://youtu.be/w4jI97DiHF8?t=554";

let boboddyPt1 = new Audio(chrome.runtime.getURL("noises/boboddypt1.ogg"));
let boboddyPt2 = new Audio(chrome.runtime.getURL("noises/boboddypt2.ogg"));
let boboddyVid = "https://youtu.be/gW2LtX1217s?t=93";

let triviacalypsePt1 = new Audio(chrome.runtime.getURL("noises/triviacalypsept1.ogg"));
let triviacalypsePt2 = new Audio(chrome.runtime.getURL("noises/triviacalypsept2.ogg"));
let triviacalypseVid = "https://youtu.be/-UBsAGlpQZI?t=27";

let goodbyeGabePt1 = new Audio(chrome.runtime.getURL("noises/goodbyegabept1.ogg"));
let goodbyeGabePt2 = new Audio(chrome.runtime.getURL("noises/goodbyegabept2.ogg"));
let goodbyeGabeVid = "https://youtu.be/7dgqhKxH3jg?t=217";

let dwightFalse = new Audio(chrome.runtime.getURL("noises/dwightfalse.ogg"));
let dwightIdiot = new Audio(chrome.runtime.getURL("noises/dwightidiot.ogg"));


let basketball = {
	name: "basketball",
	season: "season1",
	part1: basketballPt1,
	part2: basketballPt2,
	quoteGuesses: {
		guess1: "...pop.",
		guess2: "...disco.",
		guess3: "...jazz.",
		guess4: "...R&B."
	},
	quoteAnswer: "...jazz.",
	vid: basketballVid
};

let grilledFoot = {
	name: "grilledFoot",
	season: "season2",
	part1: grilledFootPt1,
	part2: grilledFootPt2,
	quoteGuesses: {
		guess1: "...Earth Balance.",
		guess2: "...Land O'Lakes.",
		guess3: "...Kerrygold.",
		guess4: "...Country Crock."
	},
	quoteAnswer: "...Country Crock.",
	vid: grilledFootVid
};

let bearIsBest = {
	name: "bearIsBest",
	season: "season3",
	part1: bearIsBestPt1,
	part2: bearIsBestPt2,
	quoteGuesses: {
		guess1: "Well, that's debatable.",
		guess2: "What are you doing?",
		guess3: "Fact, bears eat beets.",
		guess4: "Michael!"
	},
	quoteAnswer: "Well, that's debatable.",
	vid: bearIsBestVid
};

let imPregnant = {
	name: "imPregnant",
	season: "season4",
	part1: imPregnantPt1,
	part2: imPregnantPt2,
	quoteGuesses: {
		guess1: "...I love you.",
		guess2: "...I'm pregnant.",
		guess3: "...[*Kelly starts crying*].",
		guess4: "...I'm suing you for emotional damage."
	},
	quoteAnswer: "...I'm pregnant.",
	vid: imPregnantVid
};

let moroccanXmas = {
	name: "moroccanXmas",
	season: "season5",
	part1: moroccanXmasPt1,
	part2: moroccanXmasPt2,
	quoteGuesses: {
		guess1: "If you don't move the tree, I will ruin your reputation.",
		guess2: "[*Phyllis slaps her*].",
		guess3: "Okay.",
		guess4: "I'm getting Bob."
	},
	quoteAnswer: "Okay.",
	vid: moroccanXmasVid
};

let dogsBarking = {
	name: "dogsBarking",
	season: "season6",
	part1: dogsBarkingPt1,
	part2: dogsBarkingPt2,
	quoteGuesses: {
		guess1: "...I need a bath.",
		guess2: "...these blisters are on fire.",
		guess3: "...I need a beer.",
		guess4: "...my dogs are barking."
	},
	quoteAnswer: "...my dogs are barking.",
	vid: dogsBarkingVid
};

let boboddy = {
	name: "boboddy",
	season: "season7",
	part1: boboddyPt1,
	part2: boboddyPt2,
	quoteGuesses: {
		guess1: "I...like it!",
		guess2: "No proper nouns, Kevin.",
		guess3: "Enough screwing around, Roy, back to the warehouse.",
		guess4: "Wonderful! Though it's pronounced \"Bratton\"."
	},
	quoteAnswer: "I...like it!",
	vid: boboddyVid
};

let triviacalypse = {
	name: "triviacalypse",
	season: "season8",
	part1: triviacalypsePt1,
	part2: triviacalypsePt2,
	quoteGuesses: {
		guess1: "...maybe he was the original \"Tampa Bay Ray\"!",
		guess2: "...what do blind people think about?",
		guess3: "...what is Stanley writing?",
		guess4: "...maybe it's a trick question. What did Ray Charles have on his feet?"
	},
	quoteAnswer: "...what do blind people think about?",
	vid: triviacalypseVid
};

let goodbyeGabe = {
	name: "goodbyeGabe",
	season: "season9",
	part1: goodbyeGabePt1,
	part2: goodbyeGabePt2,
	quoteGuesses: {
		guess1: "Kelly, you really need to work on your hugs.",
		guess2: "Gabe, why do you smell like Lady Gaga's \"Fame\"?",
		guess3: "Ugh!",
		guess4: "I'm really going to miss you, Kelly."
	},
	quoteAnswer: "Ugh!",
	vid: goodbyeGabeVid
};

// might add more noises for wrong answers
let incorrectNoises = [dwightFalse, dwightIdiot];


let allNoises = [basketball, grilledFoot, bearIsBest, imPregnant, moroccanXmas, dogsBarking, boboddy, triviacalypse, goodbyeGabe];

export { allNoises, incorrectNoises };

// chrome.commands.onCommand.addListener(function(command) {
// 	if (command === "play-noise") {
// 		console.log("here!");
// 		bearIsBestPt1.play();
// 	}
// });

