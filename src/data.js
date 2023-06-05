
//Função para filtrar os personagens por família
export function filterCharactersByFamily(characters, family) {
  return characters.filter(character => character.family === family);
}

//Função para calcular a porcentagem por família
export function calculateFamilyPercentage(filteredCharacters, totalCharacters) {
  return ((filteredCharacters.length / totalCharacters.length) * 100).toFixed(2);
}

