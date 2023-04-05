// Implement a function that takes 2 arguments as input: an array of numbers and a multiplier,
//  a returns an array of the original array, each element of which has been multiplied by a factor:

//  [1,2,3,4], 5 => [5,10,15,20]

//  Use: map

const multiplyTo = (numbers, multiplier) => {
    return numbers.map(number => number * multiplier);
  };

console.log(multiplyTo([1,2,3,4], 5)); 
