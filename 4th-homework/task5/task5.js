// Write a function that takes the following data as input:
 
//  [
//   { name: 'shark', likes: 'ocean' },
//   { name: 'turtle', likes: 'pond' },
//   { name: 'otter', likes: 'fish biscuits' }
//  ]
 
//   And returns an array of strings:
 
//   [ 'shark likes ocean', 'turtle likes pond', 'otter likes fish biscuits' ]
 
//   Use: map

const data = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
  ];
  
  const transformData = data => {
    return data.map(item => `${item.name} likes ${item.likes}`);
  };
  
  const transformedData = transformData(data);
  console.log(transformedData);
  