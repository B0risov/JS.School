//  Write a function that returns odd array values.
//  [1,2,3,4] => [1,3]
 
const getOddValues = numbers => {
    return numbers.filter(num => num % 2 !== 0);
  };

const inputArray = [1, 2, 3, 4];
const oddValues = getOddValues(inputArray);

console.log(oddValues);


