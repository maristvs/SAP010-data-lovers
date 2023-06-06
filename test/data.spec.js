
import dataHandler from '../src/data.js';
import characters from "../src/data/got/got.js";

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
  expect(typeof dataHandler.filterCharactersByFamily === 'function').toEqual(true);

  it('When I filter by the Bronn family, I expect to get 1 result from the Bronn family', () => {
    //chamar a funcao filterByFamily passando family = 'Bronn'
    const filteredChars = dataHandler.filterCharactersByFamily(characters.got, 'Bronn');
    //Tamanho da array deve ser 1
    expect(filteredChars.length).toBe(1);
    //Elemento do array deve ser da familia Bronn
    expect(filteredChars[0].family).toBe('Bronn');
  });

  it('When I filter by the Stark family, I expect to get 10 results from the Start family', () => {
    //chamar a funcao filterByFamily passando family = 'House Stark'
    const filteredChars = dataHandler.filterCharactersByFamily(characters.got, 'House Stark');
    //Tamanho da array deve ser 1
    expect(filteredChars.length).toBe(10);
    for (let i = 0; i < filteredChars.length; i++) {
      const element = filteredChars[i];
      //Elemento do array deve ser da familia Bronn
      expect(element.family).toBe('House Stark');
    }
  });

  it('When I filter by an invalid family, I expect to get no results', () => {
    const filteredChars = dataHandler.filterCharactersByFamily(characters.got, 'QWERTY');
    //Tamanho da array deve ser 0
    expect(filteredChars.length).toBe(0);
  });

});


describe('calculateFamilyPercentage', () => {
  it('calculateFamilyPercentage is a function', () => {
    expect(typeof dataHandler.calculateFamilyPercentage === 'function').toEqual(true);
  });

  it('When I filter by the Bronn family, I expect to get 1.89%', () => {
    const filteredChars = dataHandler.filterCharactersByFamily(characters.got, 'Bronn');
    const percentage = dataHandler.calculateFamilyPercentage(characters.got, filteredChars);
    expect(percentage).toBe('1.89');
  });

  it('When I filter by the Stark family, I expect to get %', () => {
    const filteredChars = dataHandler.filterCharactersByFamily(characters.got, 'House Stark');
    const percentage = dataHandler.calculateFamilyPercentage(characters.got, filteredChars);
    expect(percentage).toBe('18.87');
  });

});

describe('searchName', () => {
  it('searchName is a function', () => {
    expect(typeof dataHandler.searchName === 'function').toEqual(true);
  });
  const charactersArray = [
    { fullName: 'Samwell Tarly', lastName: 'Tarly', firstName: 'Samwell' },
    { fullName: 'Jon Snow', lastName: 'Snow', firstName: 'Jon' },
    { fullName: 'Arya Stark', lastName: 'Stark', firstName: 'Arya' },
  ];

  it('When no matching names are found it should return an empty array', () => {
    const result = dataHandler.searchName(charactersArray, 'Michael');
    expect(result).toEqual([]);
  });

  it('When matching names are found it should return an array with matching names (case-insensitive)', () => {
    const result1 = dataHandler.searchName(charactersArray, 'samwell');
    expect(result1).toEqual([
      { fullName: 'Samwell Tarly', lastName: 'Tarly', firstName: 'Samwell' },
    ]);

    const result2 = dataHandler.searchName(charactersArray, 'JON');
    expect(result2).toEqual([
      { fullName: 'Jon Snow', lastName: 'Snow', firstName: 'Jon' },
    ]);

    const result3 = dataHandler.searchName(charactersArray, 'arya');
    expect(result3).toEqual([
      { fullName: 'Arya Stark', lastName: 'Stark', firstName: 'Arya' },
    ]);
  }); 

  describe('sortCharacters', () => {
    it('sortCharacters is a function', () => {
      expect(typeof dataHandler.sortCharacters === 'function').toEqual(true);
    });
  
    it('When sorting in ascending order, the characters should be sorted alphabetically by full name', () => {
      const sortedChars = dataHandler.sortCharacters(characters.got, 'ASC');
      for (let i = 0; i < sortedChars.length - 1; i++) {
        const currentChar = sortedChars[i];
        const nextChar = sortedChars[i + 1];
        const comparisonResult = currentChar.fullName.localeCompare(nextChar.fullName);
        expect(comparisonResult).toBeLessThanOrEqual(0);
      }
    });
  
    it('When sorting in descending order, the characters should be sorted reverse alphabetically by full name', () => {
      const sortedChars = dataHandler.sortCharacters(characters.got, 'DESC');
      for (let i = 0; i < sortedChars.length - 1; i++) {
        const currentChar = sortedChars[i];
        const nextChar = sortedChars[i + 1];
        const comparisonResult = currentChar.fullName.localeCompare(nextChar.fullName);
        expect(comparisonResult).toBeGreaterThanOrEqual(0);
      }
    });
  });
}); 
