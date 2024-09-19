function handleKeyboardButtonPress(event){
    const playerPressed = event.key
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()
    
    if(playerPressed === expectedAlphabet){
        removeBackgroundColorById(expectedAlphabet)
        continueGame(expectedAlphabet)
    }
    else{
        console.log("wrrong key press")
    }


}

document.addEventListener('keyup',handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

