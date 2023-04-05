//  Write a function that returns the smallest value of an array
//  [5,200,-5,41] => -5

//  Use: operator ... and Math.min

const getSmallestValue2 = numbers => {
    return Math.min(...numbers);
  };
  
  const arr = [5, 200, -5, 41];
  console.log(getSmallestValue2(arr)); 
  