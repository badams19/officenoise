import { allNoises, incorrectNoises } from './background.js';

let curNoise = allNoises[0];

let wrongNoise = incorrectNoises[0];

let numLives;

// INTIALIZE

firstPopupAction();

// FIRST POPUP
function firstPopupAction() {
    elemGenerator('button', 'firstnoise', 'replaybutton', 'Play the first noise!');
    resetLives();
    getByID('firstnoise').addEventListener('click', (e)=>{
        curNoise = allNoises[randomNumGenerator(allNoises.length)];
        curNoise.part1.play();
        secondPopupSetup();
    });
}

// SECOND POPUP

function secondPopupSetup() {
    document.body.innerHTML = "";
    elemGenerator('button', 'replayfirstnoise', 'replaybutton', 'Click me to replay the noise.', true);
    elemGenerator('div', 'popup2text', 'textdiv', 'Guess the correct season for part two!');
    elemGenerator('button', 'season1', 'seasonbutton', '1', true);
    elemGenerator('button', 'season2', 'seasonbutton', '2', true);
    elemGenerator('button', 'season3', 'seasonbutton', '3', true);
    elemGenerator('button', 'season4', 'seasonbutton', '4', true);
    elemGenerator('button', 'season5', 'seasonbutton', '5', true);
    elemGenerator('button', 'season6', 'seasonbutton', '6', true);
    elemGenerator('button', 'season7', 'seasonbutton', '7', true);
    elemGenerator('button', 'season8', 'seasonbutton', '8', true);
    elemGenerator('button', 'season9', 'seasonbutton', '9', true);
    elemGenerator('div', 'liveslefttext', 'textdiv', 'Lives Left');
    livesToBeets(getLives());

    secondPopupAction();
}

function secondPopupAction() {
    getByID('replayfirstnoise').addEventListener('click', (e)=>{
        curNoise.part1.play();
        buttonEnabler(true);
    });

    curNoise.part1.addEventListener('ended', (e)=>{
        buttonEnabler(false);
    });

    let seasonGuesses = document.getElementsByClassName('seasonbutton');
    for (var i = 0; i < seasonGuesses.length; i++) {
        seasonGuesses[i].addEventListener('click', (e)=>{
            if (e.target.id === curNoise['season']) {
                curNoise.part2.play();
                thirdPopupSetup();
            } else {
                wrongNoise = incorrectNoises[randomNumGenerator(incorrectNoises.length)];
                wrongNoise.play();
                decrementLives();
            }
        });
    }
}

// THIRD POPUP

function thirdPopupSetup() {
    document.body.innerHTML = "";
    elemGenerator('button', 'replaysecondnoise', 'replaybutton', 'Click me to replay part two.', true);
    elemGenerator('div', 'popup3text', 'textdiv', 'Congratulations resourceful salesperson. You advance to the next round! What is the next line?');
    elemGenerator('button', 'guess1', 'quotebutton', curNoise['quoteGuesses']['guess1'], true);
    elemGenerator('button', 'guess2', 'quotebutton', curNoise['quoteGuesses']['guess2'], true);
    elemGenerator('button', 'guess3', 'quotebutton', curNoise['quoteGuesses']['guess3'], true);
    elemGenerator('button', 'guess4', 'quotebutton', curNoise['quoteGuesses']['guess4'], true);
    elemGenerator('div', 'liveslefttext', 'textdiv', 'Lives Left');
    livesToBeets(getLives());

    thirdPopupAction();
}

function thirdPopupAction() {
    getByID('replaysecondnoise').addEventListener('click', (e)=>{
        curNoise.part2.play();
        buttonEnabler(true);
    });

    curNoise.part2.addEventListener('ended', (e)=>{
        buttonEnabler(false);
    });

    let quoteGuesses = document.getElementsByClassName('quotebutton');
    for (var i = 0; i < quoteGuesses.length; i++) {
        quoteGuesses[i].addEventListener('click', (e)=>{
            if (e.target.innerHTML === curNoise['quoteAnswer']) {
                chrome.tabs.create({ url: curNoise['vid'] });
            } else {
                wrongNoise = incorrectNoises[randomNumGenerator(incorrectNoises.length)];
                wrongNoise.play();
                decrementLives();
            }
        });
    }
}

// GAME OVER POPUP

function gameOverPopupSetup() {
    document.body.innerHTML = "";
    elemGenerator('div', 'gameovertext', 'textdiv', 'GAME OVER');
    elemGenerator('button', 'retrybutton', 'replaybutton', 'Try again?');
    gameOverPopupAction();
}

function gameOverPopupAction() {
    resetLives();
    getByID('retrybutton').addEventListener('click', (e)=>{
        curNoise = allNoises[randomNumGenerator(allNoises.length)];
        curNoise.part1.play();
        secondPopupSetup();
    });
}

// HELPERS

function randomNumGenerator(numNoises) {
    return Math.floor(Math.random() * numNoises);
};

function getByID(id) {
   return document.getElementById(id);
}

function elemGenerator(elemType, elemID, elemClass, elemInnerHTML, disabled=false) {
    let element = document.createElement(elemType);
    element.id = elemID;
    element.className = elemClass;
    if (elemType !== "img") {
        element.innerHTML = elemInnerHTML;
    } else {
        element.src = elemInnerHTML;
    }
    element.disabled = disabled;
    document.body.appendChild(element);
}

function resetLives() {
    numLives = 2;
}

function decrementLives() {
    numLives--;
    getByID('beeticon' + (numLives+1)).remove();
    if (numLives === 0) {
        gameOverPopupSetup();
    }
}

function getLives() {
    return numLives;
}

function livesToBeets(num) {
    switch (num) {
        case 2: 
            return elemGenerator('img', 'beeticon1', 'icons', "beeticon48.png") + elemGenerator('img', 'beeticon2', 'icons', "beeticon48.png");
        case 1:
            return elemGenerator('img', 'beeticon1', 'icons', "beeticon48.png");
        default:
            return;
    }
}

function buttonEnabler(disabled) {
    Array.from(document.getElementsByTagName('button')).forEach((elem) => {
        elem.disabled = disabled;
    });
}
