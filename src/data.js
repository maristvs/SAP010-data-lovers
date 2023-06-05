const dataHandler = {
  //Função para filtrar os personagens por família
  filterCharactersByFamily : function (characters, family) {
    return characters.filter(character => character.family === family);
  },
  
  //Função para calcular a porcentagem por família
  calculateFamilyPercentage : function (totalCharacters, filteredCharacters) {
    return ((filteredCharacters.length / totalCharacters.length) * 100).toFixed(2);
  },

  sortCharacters : function (characters,sortType){
    if(sortType === 'ASC'){
      return characters.sort((a, b) => a.fullName.localeCompare(b.fullName))
    }
    return characters.sort((a, b) => b.fullName.localeCompare(a.fullName));
  }
}

export default dataHandler;

