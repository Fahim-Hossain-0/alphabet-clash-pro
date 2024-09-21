function handleKeyboardButtonPress(event) {
    const playerPressed = event.key
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()

    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score')
        const updateScore = currentScore + 1
        setTextElementValueById('current-score',updateScore)
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else {
        const currentLife = getTextElementValueById('current-life')
        const updateLife = currentLife - 1
        setTextElementValueById('current-life',updateLife)
        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText
        // const currentText = parseInt(currentLifeText)
        // const newLife = currentText - 1
        // currentLifeElement.innerText = newLife
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

