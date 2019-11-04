/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Array containing a series of quotes & other properties.
const quotes = [
  {
    quote: "The man who passes the sentence should swing the sword.",
    source: "Ned Stark",
    citation: "A Game of Thrones",
    chapter: "Chapter 1",
    year: "297 AC"
  },
  {
    quote: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.",
    source: "Tyrion Lannister",
    citation: "A Game of Thrones",
    chapter: "Chapter 5"
  },
  {
    quote: "Power resides where men believe it resides... It’s a trick... A shadow on the wall... And ofttimes a very small man can cast a very large shadow.",
    source: "Varys",
    citation: "A Clash of Kings",
    chapter: "Chapter 8"
  },
  {
    quote: "There’s no shame in fear, my father told me, what matters is how we face it.",
    source: "Jon Snow",
    citation: "A Clash of Kings",
    chapter: "Chapter 5"
  },
  {
    quote: "Give me sweet lies, and keep your bitter truths.",
    source: "Tyrion Lannister",
    citation: "A Storm of Swords",
    chapter: "Chapter 66"
  },
  {
    quote: "The more you give a king, the more he wants.",
    source: "Jon Snow",
    citation: "A Feast for Crows",
    chapter: "Chapter 7"
  },
  {
    quote: "A ruler who hides behind paid executioners soon forgets what death is.",
    source: "Eddard Stark",
    citation: "A Game of Thrones",
    chapter: "Chapter 9"
  }
];


// Array that stores the different background colors in hexidecimel values.
const backgroundColors = [
  "#0099cc",
  "#3366ff",
  "#009933",
  "#33cc33",
  "#99cc00",
  "#cc9900",
  "#ff9900",
  "#ff9966",
  "#ff5050",
  "#cc0000",
  "#ff66cc",
  "#ff00ff",
  "#999966",
  "#000000"
];

// Generates a random index number in the quotes array.
function getRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

// Generates a random hexidecimal value from the backgroundColors array.
function randomBackground() {
  let randomIndex = Math.floor(Math.random() * backgroundColors.length) + 1;
  let randomColor = backgroundColors[randomIndex];
  return randomColor;
}

// Takes the quotes array and random index number and prints an HTML string with the corresponding quote.
function printQuote() {
  let randomQuote = getRandomQuote();
  let listHTML = '';
  listHTML += '<p class="quote">' + randomQuote.quote + '</p>';
  listHTML += '<p class="source">' + randomQuote.source;

  // Checks if the object contains a citation, chapter, and year property - then adds them to the HTML string if they do.
    if (randomQuote.citation) {
      listHTML += '<span class=citation>' + randomQuote.citation + '</span>';
    }
    if (randomQuote.chapter) {
      listHTML += '<span class=chapter>' + randomQuote.chapter + '</span>';
    }
    if (randomQuote.year) {
      listHTML += '<span class="year">' + randomQuote.year + '</span>';
    }
  listHTML += '</p>';

  // Injects the generated HTML string into the DOM.
  let quoteboxDiv = document.getElementById('quote-box');
  quoteboxDiv.innerHTML = listHTML;

  // Produces a random background color.
  document.body.style.backgroundColor = randomBackground();
}

// Generates a random quote every 7 seconds.
setInterval(printQuote, 7000);

// Click event listener for the print quote button.
document.getElementById('load-quote').addEventListener("click", printQuote, false);