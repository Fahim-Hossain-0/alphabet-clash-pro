function handleKeyboardButtonPress(event) {
    const playerPressed = event.key
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()

    if (playerPressed === expectedAlphabet) {
        const currentScoreElement = document.getElementById('current-score')
        const currentScoreText = currentScoreElement.innerText
        const currentScore = parseInt(currentScoreText)
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else {
        const currentLifeElement = document.getElementById('curren-life')
        const currentLifeText = currentLifeElement.innerText
        const currentText = parseInt(currentLifeText)
        const newLife = currentText - 1
        currentLifeElement.innerText = newLife
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

