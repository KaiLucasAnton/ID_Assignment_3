// const var to store the url
const quote_gen_url = 'http://api.quotable.io/random'
// quoteDisplay element
const quoteDisplayELement = document.getElementById('quoteDisplay')
// quoteInput element
const quoteInputElement = document.getElementById('quoteInput')

// comparing each char
quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayELement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        // to make sure only the entered characters are colored
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
        }
        // to make sure its only one class value
        else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } 
        else {
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
        }
    })
})

// getting the api
function getRandomQuote() {
    return fetch(quote_gen_url)
        .then(response => response.json())
        .then(data => data.content)
}

async function NewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayELement.innerHTML = '' //clears inner html
    // splitting the characters
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        
        characterSpan.innerText = character//creates a span for each character
        quoteDisplayELement.appendChild(characterSpan)
    })
    // to clear inside box
    quoteInputElement.value = null
}

NewQuote()