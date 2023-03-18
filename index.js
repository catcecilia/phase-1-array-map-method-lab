const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(tutorial){
    return tutorial.split(' ') //split each word into its own array
    .map(function(word){ //copy all of the words into the tutorial array
      return word.charAt(0).toUpperCase() + word.slice(1); //but makesure the first character of each word is uppercase
    }).join(' '); //make the array into a string by joining each word with a " " in between
  });
}
