//  Implement a function that takes 2 arguments as input: an array and a franchise,
//  and returns a string with the names of the heroes separated by a comma:

// [
//  {name: "Batman", franchise: "DC"},
//  {name: "Ironman", franchise: "Marvel"},
//  {name: "Thor", franchise: "Marvel"},
//  {name: "Superman", franchise: "DC"}
// ],
//  Marvel
//  => Ironman, Thor

//  Use: filter, map, join

const getCharacterNames = (characters, franchise) => {
    const filteredCharacters = characters.filter(character => character.franchise === franchise);
    
    const characterNames = filteredCharacters.map(character => character.name);

    return characterNames.join(', ');
  };

  const characters = [
    {name: "Batman", franchise: "DC"},
    {name: "Ironman", franchise: "Marvel"},
    {name: "Thor", franchise: "Marvel"},
    {name: "Superman", franchise: "DC"}
  ];
  
  console.log(getCharacterNames(characters, "Marvel")); 
  