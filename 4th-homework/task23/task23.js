// Implement a function that has an array of numbers as input and an array of not unique values as output.
 
//  [1, 2, 2, 4, 5, 5] => [2, 5]

const getNotUniqueValues = numbers => {
    const uniqueValues = new Set(numbers);
    const notUniqueValues = numbers.filter((value, index, array) => {
      return array.indexOf(value) !== index;
    });
    return [...new Set(notUniqueValues)];
  };

  console.log(getNotUniqueValues([1, 2, 2, 4, 5, 5])); 
  