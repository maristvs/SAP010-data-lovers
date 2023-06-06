const dataHandler = {
  //Função para filtrar os personagens por família
  filterCharactersByFamily: function (characters, family) {
    return characters.filter(character => character.family === family);
  },

  //Função para calcular a porcentagem por família
  calculateFamilyPercentage: function (totalCharacters, filteredCharacters) {
    return ((filteredCharacters.length / totalCharacters.length) * 100).toFixed(2);
  },
  //Função para ordenar de AZ e ZA
  sortCharacters: function (characters, sortType) {
    if (sortType === 'ASC') {
      return characters.sort((a, b) => a.fullName.localeCompare(b.fullName))
    }
    return characters.sort((a, b) => b.fullName.localeCompare(a.fullName));
  },
  //Função para pesquisar por nome
  searchName: function (charactersArray, searchValue) {
    const filteredNames = charactersArray.filter(character => {
      const lastName = character.lastName.toLowerCase();
      const firstName = character.firstName.toLowerCase();
      const fullName = character.fullName.toLowerCase();

      return (
        lastName.includes(searchValue.toLowerCase()) ||
        firstName.includes(searchValue.toLowerCase()) ||
        fullName.includes(searchValue.toLowerCase())
      );
    });

    return filteredNames;
  }
};

export default dataHandler;

