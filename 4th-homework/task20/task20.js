//  Write a function that returns an array of two strings where the first element
//  is the original string with uppercase even letters, and the second
//  with capital odd.
//  'abcdef' => ['AbCdEf', 'aBcDeF']

const getCapitalizedStrings = str => {
    let evenStr = '';
    let oddStr = '';
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        evenStr += str[i].toUpperCase();
        oddStr += str[i];
      } else {
        evenStr += str[i];
        oddStr += str[i].toUpperCase();
      }
    }
    return [evenStr, oddStr];
  };
  
const str = 'abcdef';
console.log(getCapitalizedStrings(str)); 
