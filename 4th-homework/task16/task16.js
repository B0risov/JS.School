// Write a function that returns an array of the smallest row values of a two-dimensional array
// [
//  [10,1,300,4],
//  [20,2,300,400],
//  [30,3,300,4],
//  [40,4,300,4],
// ]
//  => [1,2,3,4]

const getSmallestRow = numbers => {
    const smallestValues = [];

    for (let i = 0; i < numbers.length; i++) {
      let smallestValue = numbers[i][0];

      for (let j = 1; j < numbers[i].length; j++) {
        if (numbers[i][j] < smallestValue) {
          smallestValue = numbers[i][j];
        }
      }
      
      smallestValues.push(smallestValue);
    }
  
    return smallestValues;
  };
  
  const numbers = [
    [10,1,300,4],
    [20,2,300,400],
    [30,3,300,4],
    [40,4,300,4],
   ];
   
   console.log(getSmallestRow(numbers)); 
   