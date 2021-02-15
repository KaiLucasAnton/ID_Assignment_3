// const var to store the url
const quote_gen_url = 'http://api.quotable.io/random'
// 
const quoteDisplayELement = document.getElementById('quoteDisplay')

// getting the api
function getRandomQuote() {
    return fetch(quote_gen_url)
        .then(response => response.json())
        .then(data => data.content)
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayELement.innerText = quote
}

renderNewQuote()