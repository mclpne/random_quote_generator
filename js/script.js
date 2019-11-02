/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "The man who passes the sentence should swing the sword.",
    source: "Ned Stark",
    citation: "A Game of Thrones"
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

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let listHTML = '';
  listHTML += '<p class="quote">' + randomQuote.quote + '</p>';
  listHTML += '<p class="source">' + randomQuote.source;
    if (randomQuote.citation === true) {
      listHTML += '<span class=citation>' + randomQuote.citation + '</span>';
    }
  listHTML += '</p>';
  console.log(listHTML);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);