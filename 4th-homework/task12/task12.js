// Write a function that returns the 2 smallest values of an array
//  [4,3,2,1] => [1,2]

//  Use: .sort()

const get2SmallestValues = numbers => {
    const sorted = numbers.sort((a, b) => a - b);
    return sorted.slice(0, 2);
  };
  
console.log(get2SmallestValues([4, 3, 2, 1])); 
console.log(get2SmallestValues([100, -51, 24, 73, 15, 2001, -2014])); 
