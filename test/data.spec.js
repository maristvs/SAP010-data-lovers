
import dataHandler from '../src/data.js';
import charactersMock from './charactersgotmock.js';

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */

describe('filterCharactersByFamily', () => {
  it('filterCharactersByFamily is a function', () => {
    expect(typeof dataHandler.filterCharactersByFamily === 'function').toEqual(true);
  });


  it('When I filter by the Bronn family, I expect to get 1 result from the Bronn family', () => {
    //chamar a funcao filterByFamily passando family = 'Bronn'
    const filteredChars = dataHandler.filterCharactersByFamily(charactersMock, 'Bronn');
    //Tamanho da array deve ser 1
    expect(filteredChars.length).toBe(1);
    //Elemento do array deve ser da familia Bronn
    expect(filteredChars[0].family).toBe('Bronn');
  });

  it('When I filter by the Stark family, I expect to get 10 results from the Stark family', () => {
    //chamar a funcao filterByFamily passando family = 'House Stark'
    const filteredChars = dataHandler.filterCharactersByFamily(charactersMock, 'House Stark');
    //Tamanho da array deve ser 10
    expect(filteredChars.length).toBe(10);
    for (let i = 0; i < filteredChars.length; i++) {
      const element = filteredChars[i];
      //Elemento do array deve ser da familia Stark
      expect(element.family).toBe('House Stark');
    }
  });

  it('When I filter by an invalid family, I expect to get no results', () => {
    const filteredChars = dataHandler.filterCharactersByFamily(charactersMock, 'QWERTY');
    //Tamanho da array deve ser 0
    expect(filteredChars.length).toBe(0);
  });

});


describe('calculateFamilyPercentage', () => {
  it('calculateFamilyPercentage is a function', () => {
    expect(typeof dataHandler.calculateFamilyPercentage === 'function').toEqual(true);
  });

  it('When I filter by the Bronn family, I expect to get 5.56%', () => {
    const filteredChars = dataHandler.filterCharactersByFamily(charactersMock, 'Bronn');
    const percentage = dataHandler.calculateFamilyPercentage(charactersMock, filteredChars);
    expect(percentage).toBe('5.56');
  });

  it('When I filter by the Stark family, I expect to get 55.56%', () => {
    const filteredChars = dataHandler.filterCharactersByFamily(charactersMock, 'House Stark');
    const percentage = dataHandler.calculateFamilyPercentage(charactersMock, filteredChars);
    expect(percentage).toBe('55.56');
  });
});

describe('searchName', () => {
  it('searchName is a function', () => {
    expect(typeof dataHandler.searchName === 'function').toEqual(true);
  });
  
  it('When no matching names are found it should return an empty array', () => {
    const result = dataHandler.searchName(charactersMock, 'Michael');
    expect(result).toEqual([]);
  });

  it('When matching names are found it should return an array with matching names (case-insensitive)', () => {
    const result1 = dataHandler.searchName(charactersMock, 'samwell');
    expect(result1).toEqual([
      { fullName: 'Samwell Tarly', lastName: 'Tarly', firstName: 'Samwell', id: 1, born: '283 DC', family: 'House Tarly', title: 'Maester', imageUrl: 'https://thronesapi.com/assets/images/sam.jpg' },
    ]);

    const result2 = dataHandler.searchName(charactersMock, 'JON');
    expect(result2).toEqual([
      { fullName: 'Jon Snow', lastName: 'Snow', firstName: 'Jon', id: 2, born: '283 DC', family: 'House Stark', title: 'King of the North', imageUrl: 'https://thronesapi.com/assets/images/jon-snow.jpg' },
    ]);

    const result3 = dataHandler.searchName(charactersMock, 'arya');
    expect(result3).toEqual([
      { fullName: 'Arya Stark', lastName: 'Stark', firstName: 'Arya', id: 3, born: '289 AL', family: 'House Stark', title: 'No One', imageUrl: 'https://thronesapi.com/assets/images/arya-stark.jpg' },
    ]);
  });

  describe('sortCharacters', () => {
    it('sortCharacters is a function', () => {
      expect(typeof dataHandler.sortCharacters === 'function').toEqual(true);
    });

    it('When sorting in ascending order, the characters should be sorted alphabetically by full name', () => {
      const sortedChars = dataHandler.sortCharacters(charactersMock, "ASC");
      expect(sortedChars[0].fullName).toEqual("Arya Stark")
      const lastCharacterIndex = sortedChars.length - 1;
      expect(sortedChars[lastCharacterIndex].fullName).toEqual("Ygritte");
    });

    it('When sorting in descending order, the characters should be sorted alphabetically by full name', () => {
      const sortedChars = dataHandler.sortCharacters(charactersMock, "DESC");
      expect(sortedChars[0].fullName).toEqual("Ygritte")
      const lastCharacterIndex = sortedChars.length - 1;
      expect(sortedChars[lastCharacterIndex].fullName).toEqual("Arya Stark");
    });

  });
});
