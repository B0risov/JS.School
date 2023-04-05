//  Write a function that satisfies the following conditions:

//  the function takes a string S, consisting of N letters of the English alphabet in lowercase [a-z]
//  the function returns a string that does not contain three identical letters in a row
//  the function removes the minimum number of letters from the string S

//  Examples:
//  S = "eedaaad", the function returns "eedaad". One "a" has been removed.
//  S = "xxxtxxx", the function returns "xxtxx". The same letters can occur more than three times in a string, but not in a row.
//  S = "uuuuxaaaaxuuu", the function returns "uuxaaxuu".

//  Assumptions:
//  N is an integer in the range [1..200,000]
//  S consists only of lowercase letters [a-z]

const getCorrectString = string => {
    let result = "";
    let count = 1;
    for (let i = 1; i < string.length; i++) {
      if (string[i] === string[i - 1]) {
        count++;
        if (count < 3) {
          result += string[i];
        }
      } else {
        count = 1;
        result += string[i - 1];
      }
    }
    result += string[string.length - 1];
    return result;
  }

  console.log(getCorrectString("eedaaad")); 
  console.log(getCorrectString("xxxtxxx")); 
  console.log(getCorrectString("uuuuxaaaaxuuu")); 
  
