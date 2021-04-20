import { allNoises } from './background.js';

let curNoise = allNoises[0];

// FIRST POPUP

// let refresh = getByID('refresh');
// if (refresh) {
//     refresh.addEventListener('click', (e)=>{
//         setActive(allNoises.length);
//     });
// }

let firstNoise = getByID('firstnoise');
firstNoise.addEventListener('click', (e)=>{
    setActive(allNoises.length);
    curNoise.part1.play();
    secondPopupSetup();
});

// SECOND POPUP

function secondPopupSetup() {
    // getByID('refresh').remove();
    getByID('firstnoise').remove();
    elemGenerator('button', 'replayfirstnoise', 'replay', 'Click me to replay the noise.');
    elemGenerator('div', 'popup2text', null, 'Guess the correct season for part two!');
    elemGenerator('button', 'season1', 'seasonbutton', '1');
    elemGenerator('button', 'season2', 'seasonbutton', '2');
    elemGenerator('button', 'season3', 'seasonbutton', '3');
    elemGenerator('button', 'season4', 'seasonbutton', '4');
    elemGenerator('button', 'season5', 'seasonbutton', '5');
    elemGenerator('button', 'season6', 'seasonbutton', '6');
    elemGenerator('button', 'season7', 'seasonbutton', '7');
    elemGenerator('button', 'season8', 'seasonbutton', '8');
    elemGenerator('button', 'season9', 'seasonbutton', '9');
    secondPopupAction();
}

function secondPopupAction() {
    let replayFirstNoise = getByID('replayfirstnoise')
    replayFirstNoise.addEventListener('click', (e)=>{
        curNoise.part1.play();
    });

    let seasonGuesses = document.getElementsByClassName('seasonbutton');
    for (var i = 0; i < seasonGuesses.length; i++) {
        seasonGuesses[i].addEventListener('click', (e)=>{
            if (e.target.id === curNoise['season']) {
                curNoise.part2.play();
                thirdPopupSetup();
            }
        });
    }
}

// THIRD POPUP

function thirdPopupSetup() {
    getByID('replayfirstnoise').remove();
    getByID('popup2text').remove();
    getByID('season1').remove();
    getByID('season2').remove();
    getByID('season3').remove();
    getByID('season4').remove();
    getByID('season5').remove();
    getByID('season6').remove();
    getByID('season7').remove();
    getByID('season8').remove();
    getByID('season9').remove();
    elemGenerator('button', 'replaysecondnoise', 'replay', 'Click me to replay part two.');
    elemGenerator('div', 'popup3text', null, 'Congratulations resourceful salesperson. You advance to the next round! What is the next line?');
    elemGenerator('button', 'guess1', 'quotebutton', curNoise['quoteGuesses']['guess1']);
    elemGenerator('button', 'guess2', 'quotebutton', curNoise['quoteGuesses']['guess2']);
    elemGenerator('button', 'guess3', 'quotebutton', curNoise['quoteGuesses']['guess3']);
    elemGenerator('button', 'guess4', 'quotebutton', curNoise['quoteGuesses']['guess4']);
    thirdPopupAction();
}

function thirdPopupAction() {
    let replaySecondNoise = getByID('replaysecondnoise')
    replaySecondNoise.addEventListener('click', (e)=>{
        curNoise.part2.play();
    });

    let quoteGuesses = document.getElementsByClassName('quotebutton');
    for (var i = 0; i < quoteGuesses.length; i++) {
        quoteGuesses[i].addEventListener('click', (e)=>{
            console.log(e.target.innerHTML);
            console.log(typeof e.target.innerHTML);
            console.log("Answer:");
            console.log(curNoise['quoteAnswer']);
            console.log(typeof curNoise['quoteAnswer']);
            if (e.target.innerHTML === curNoise['quoteAnswer']) {
                chrome.tabs.create({ url: curNoise['vid'] });
            }
        });
    }
}

// HELPERS

function setActive(numNoises) {
    let randomNum = Math.floor(Math.random() * numNoises);
    curNoise = allNoises[randomNum];
};

function getByID(id) {
   return document.getElementById(id);
}

function elemGenerator(elemType, elemID, elemClass, elemInnerHTML) {
    let element = document.createElement(elemType);
    element.id = elemID;
    element.className = elemClass;
    element.innerHTML = elemInnerHTML;
    document.body.appendChild(element);
}
