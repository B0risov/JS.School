//  Write a function that takes an array of strings as input
//  and returns only those shorter than 20 characters

// [
//  'I am a short string',
//  'I seem to be short too',
//  'And I am a long string'
// ] => [
//  'I am a short string',
// ]

//  Use: filter

const strings = [
    'I am a short string',
    'I seem to be short too',
    'And I am a long string'
  ];

function getShorterStrings(strings, characters = 20) {
    return strings.filter(str => str.length < characters);
  }
  
  console.log(getShorterStrings(strings)); 
