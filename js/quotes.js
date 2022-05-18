function setQuote() {
    fetch('https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
    .then(response => response.json())
    .then(data => {
        document.getElementById('quote').textContent = 
        data.content
        .toLowerCase();
    });
}

setQuote();