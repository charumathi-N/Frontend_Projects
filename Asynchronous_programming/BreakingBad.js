url = "https://api.breakingbadquotes.xyz/v1/quotes/5"

async function getQuotes() {
    // const data = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    //fetching data
    const data = await fetch(url);
    const quotes = await data.json();
    const number = parseInt(document.getElementById('num').value);
    for (let i = 0; i < quotes.length; i++) {
        if (number == i + 1) {
            document.getElementById('quote').innerHTML =
                `The quote is : ${quotes[i].quote}<br>
                 The author is : ${quotes[i].author}`;
        }
    }
}