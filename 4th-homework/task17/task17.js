// Write a function that returns an array of the smallest column values of a two-dimensional array
// [
//  [1,2,3,4],
//  [1,2,3,4],
//  [1,2,30,4],
//  [1,2,3,40],
// ]
//  => [1,2,3,4]

const getSmallestColumn = numbers => {
    const smallestValues = [];
  
    for (let i = 0; i < numbers[0].length; i++) {
      let smallestValue = numbers[0][i];
  
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[j][i] < smallestValue) {
          smallestValue = numbers[j][i];
        }
      }
  
      smallestValues.push(smallestValue);
    }
  
    return smallestValues;
  };
  
  const numbers = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,30,4],
    [1,2,3,40],
   ];
   
   console.log(getSmallestColumn(numbers)); 
   