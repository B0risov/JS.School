// Implement a function that has an array of numbers as input and an array of unique values as output
//  [1, 2, 2, 4, 5, 5] => [1, 2, 4, 5]

//  Use: reduce and indexOf

// const getUniqueValues = numbers => {
// };

const getUniqueValues = numbers => {
    return numbers.reduce((unique, num) => {
      if (unique.indexOf(num) === -1) {
        unique.push(num);
      }
      return unique;
    }, []);
  };
  
const input = [1, 2, 2, 4, 5, 5];
const output = getUniqueValues(input);
console.log(output); 
