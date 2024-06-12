window.addEventListener('load', init)

// Globals
let time = 5;
let score =  0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'investigate',
    'horrendous',
    'symptom'
]

// Initialize Game
function init() {
    // show word from array
    showWord(words)
}

// Pick & show random word 
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length)
    // Output random word
    currentWord
}