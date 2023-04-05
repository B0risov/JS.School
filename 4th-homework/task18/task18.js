// Write a function that returns the 2 biggest value of an array
//  [4,3,2,1] => [4,3]

const get2BiggestValues = numbers => {
    const sortedNumbers = numbers.sort((a, b) => b - a);
    return [sortedNumbers[0], sortedNumbers[1]];
  };
  
const numbers = [4, 3, 2, 1];
console.log(get2BiggestValues(numbers)); 
