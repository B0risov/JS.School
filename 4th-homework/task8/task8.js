// Write a function that returns odd array values.
//    [77,2,30,51] => [77,51]
  
//    Use: reduce
  
const getOddValues2 = numbers => {
    return numbers.reduce((result, number) => {
      if (number % 2 !== 0) {
        result.push(number);
      }
      return result;
    }, []);
  };

  const arr = [77, 2, 30, 51];
  console.log(getOddValues2(arr)); 
  