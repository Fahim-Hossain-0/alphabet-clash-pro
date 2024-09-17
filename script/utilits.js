function hideElementsById(element){
    const hideElement = document.getElementById(element)
    hideElement.classList.add('hidden')
}

function showElementById(element){
    const showElement = document.getElementById(element)
    showElement.classList.remove('hidden')
}