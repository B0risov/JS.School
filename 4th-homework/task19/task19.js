// Write a function that returns the number of vowels in a string in English
// ( a, e, i, o, u ).

// 'Return the number (count) of vowels in the given string.' => 15

const getNumberOfVowels = string => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        count++;
      }
    }
    return count;
  };
  
  const string = 'Return the number (count) of vowels in the given string.';
  
  console.log(getNumberOfVowels(string)); 
  