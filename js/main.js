let url = "https://api.kanye.rest/";
let dadUrl = "https://icanhazdadjoke.com/";
let quote = document.getElementById("quote");
let dadQuoteBtn = document.getElementById("dad-quote");
let kanyeQuoteBtn = document.getElementById("new-quote");

// -------- EVENT LISTENERS -----------
kanyeQuoteBtn.addEventListener("click", getKanyeQuote);
dadQuoteBtn.addEventListener("click", getDadQuote);

function getKanyeQuote() {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // console.log(data);
      // clear current quote before requesting new one
      quote.innerText = "";
      // display incoming quote in the DOM
      quote.textContent = `"${data.quote}" - Kanye West`;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getDadQuote() {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // console.log(data);
      // clear current quote before requesting new one
      quote.innerText = "";
      // display incoming quote in the DOM
      quote.innerText = `"${data.quote}" - Random Ass Dad`;
    })
    .catch(function (err) {
      console.log(err);
    });
}
