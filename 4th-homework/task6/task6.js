//  Write a function that takes 2 objects as input and returns 1 with  
//  common properties. If properties have the same keys use the latter.

//  [{ name: 'Alice' }, { age: 11 }] => { name: 'Alice', age: 11 }

//  We use: ...

const mergeObjects = objects => {
  return objects.reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {});
};

const objects = [{ name: 'Alice' }, { age: 11 }];
const mergedObject = mergeObjects(objects);
console.log(mergedObject); 

