//  Implement a flatten function that takes an array of arbitrary nesting arrays as input
//  and returns an array of all their elements without nesting.
//  [1, 2, [3, 4], 5, [[6, 7], 8], 9] => [1, 2, 3, 4, 5, 6, 7, 8, 9]

const getFlattenedArray = numbers => {
    const flattened = [];
  
    numbers.forEach(number => {
      if (Array.isArray(number)) {
        flattened.push(...getFlattenedArray(number));
      } else {
        flattened.push(number);
      }
    });
  
    return flattened;
  };
  
const nestedArray = [1, 2, [3, 4], 5, [[6, 7], 8], 9];
const flattenedArray = getFlattenedArray(nestedArray);

console.log(flattenedArray); 
