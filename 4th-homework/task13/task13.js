// Implement a function, at the input of which an object of the following form:
//  {
//  firstName: 'Peter',
//  secondName: 'Vasiliev',
//  patronymic: 'Ivanovich'
// }
//  output line with the message 'Name: Petr Ivanovich Vasiliev'

const getFullName = user => {
    const { firstName, secondName, patronymic } = user;
    return `Name: ${firstName} ${patronymic} ${secondName}`;
  }
  
  const user = {
    firstName: 'Anna',
    secondName: 'Ivanova',
    patronymic: 'Sergeevna'
  }
  
  const fullName = getFullName(user);
  console.log(fullName); 
  