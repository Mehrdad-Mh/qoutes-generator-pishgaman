const quote = document.getElementById("text");
const author = document.getElementById("author");
const new_quote = document.getElementById("new-quote");


function fetchQuote() {
  const url = "https://api.api-ninjas.com/v1/quotes"
  
  try {
    fetch(url, { headers: { "X-Api-Key": "PJQo0lfJb8mO5BgvpFSbRg==0eGR5R0uYhAYUe28" } })
    .then((response) => response.json())
    .then((data) => {
      const apiQuote = data[0].quote;
      const apiQuoteAuthor = data[0].author;
      quote.innerHTML = apiQuote;
      author.innerHTML = apiQuoteAuthor;

    })
  } catch (error) {
    console.error(error);
  }
}


fetchQuote();
new_quote.addEventListener("click", () => fetchQuote());