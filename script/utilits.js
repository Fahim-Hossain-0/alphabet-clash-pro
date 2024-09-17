function hideElementsById(element) {
    const hideElement = document.getElementById(element)
    hideElement.classList.add('hidden')
}

function showElementById(element) {
    const showElement = document.getElementById(element)
    showElement.classList.remove('hidden')
}

function getRandomAlphabets() {
    const alphabetString = "ABCDEFGHIRJKLMNOPQSTUVWXYZ"
    const alphabets = alphabetString.split('')
    const randomNumber = Math.random() * 25
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    return alphabet
}
