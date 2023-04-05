// Write a function that returns the biggest value of an array
// [5,22,9,43] => 43

const getBiggestValue2 = numbers => {
    return Math.max(...numbers);
  }
  
  console.log(getBiggestValue2([5,22,9,43])); 
