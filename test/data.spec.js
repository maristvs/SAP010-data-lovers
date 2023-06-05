
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