//  Write a function that accepts data from the basket as input in the following form:

// [
//  {price: 10, count: 2},
//  {price: 100, count: 1},
//  {price: 2, count: 5},
//  {price: 15, count: 6},
// ]
//  where price is the price of the item and count is the quantity.

//  The function should return the total price for this order.

//  Use: reduce

const calculateTotal = products => {
    return products.reduce((total, product) => {
      return total + product.price * product.count;
    }, 0);
  };

  const basket = [
    { price: 10, count: 2 },
    { price: 100, count: 1 },
    { price: 2, count: 5 },
    { price: 15, count: 6 },
  ];
  
  const totalPrice = calculateTotal(basket);
  console.log(totalPrice); 
  