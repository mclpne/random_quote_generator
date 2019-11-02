/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Array containing a series of quotes with their source & citation.
const quotes = [
  {
    quote: "The man who passes the sentence should swing the sword.",
    source: "Ned Stark",
    citation: "A Game of Thrones",
  },
  {
    quote: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.",
    source: "Tyrion Lannister",
    citation: "A Game of Thrones"
  },
  {
    quote: "Power resides where men believe it resides... It’s a trick... A shadow on the wall... And ofttimes a very small man can cast a very large shadow.",
    source: "Varys",
    citation: "A Clash of Kings"
  },
  {
    quote: "There’s no shame in fear, my father told me, what matters is how we face it.",
    source: "Jon Snow",
    citation: "A Clash of Kings"
  },
  {
    quote: "Give me sweet lies, and keep your bitter truths.",
    source: "Tyrion Lannister",
    citation: "A Storm of Swords"
  }
];

let backgroundColors = [
  '255, 0, 0',
  '234, 2, 14',
];

// Generates a random index number in the quotes array.
function getRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

// Takes the quotes array and random index number and prints an HTML string with the corresponding quote.
// Utilizes two 'for' loops to check if the object contains a citation and year property, then adds them to the HTML string if they do.
function printQuote() {
  let randomQuote = getRandomQuote();
  let listHTML = '';
  listHTML += '<p class="quote">' + randomQuote.quote + '</p>';
  listHTML += '<p class="source">' + randomQuote.source;
    if (randomQuote.citation) {
      listHTML += '<span class=citation>' + randomQuote.citation + '</span>';
    }
    if (randomQuote.year) {
      listHTML += '<span class="year">' + randomQuote.year + '</span>';
    }
  listHTML += '</p>';
  let quoteboxDiv = document.getElementById('quote-box');
  quoteboxDiv.innerHTML = listHTML;
}

// A function to print the generated HTML from the printQuote function to the screen.
function print(quote) {
  let quoteboxDiv = document.getElementById('quote-box');
  quoteboxDiv.innerHTML = listHTML;
}

printQuote();

// Click event listener for the print quote button.
document.getElementById('load-quote').addEventListener("click", printQuote, false);