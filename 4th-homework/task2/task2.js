//  Write a function that returns the smallest value of an array
//  [4,2,10,27] => 2

const getSmallestValue = numbers => {
    return Math.min(...numbers);
  };
  
  console.log(getSmallestValue([4,2,10,27]));

