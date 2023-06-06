import dataHandler from './data.js';
import { translateTitle, translateFamily } from './extra.js';
import characters from "./data/got/got.js";

function showCharacterCards(charactersArray) {
  const container = document.getElementById("characterContainer");

  // Limpa o conteúdo do container
  container.innerHTML = "";

  // Itera sobre os personagens e cria os cards dinamicamente
  charactersArray.forEach(character => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = character.imageUrl;

    const name = document.createElement("h2");
    name.textContent = character.fullName;

    const title = document.createElement("p");
    const translatedTitle = translateTitle(character.title); // Traduzir o título
    title.textContent = "Título: " + translatedTitle;

    const family = document.createElement("p");
    const translatedFamily = translateFamily(character.family); // Traduzir a família
    family.textContent = "Família: " + translatedFamily;

    const born = document.createElement("p");
    born.textContent = "Ano de nascimento: " + character.born;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(title);
    card.appendChild(family);
    card.appendChild(born);

    container.appendChild(card);
  });
}

// Chama a função para exibir os cards dos personagens
showCharacterCards(characters.got);

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", switchMenu);

  function switchMenu() {
    const menuDisplay = document.querySelector(".menu").style.display;
    if (menuDisplay === "none" || !menuDisplay) {
      document.querySelector(".menu").style.display = "flex";
      document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-times fa-lg'></i>";
    } else {
      document.querySelector(".menu").style.display = "none";
      document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-bars fa-lg'></i>";
    }
  }
});

// Selecionando elementos do DOM
const searchInput = document.querySelector("#search-input");
const filterByFamily = document.querySelector("#filter-by-family");
const orderByname = document.querySelector("#order-by-name");
const percentageElement = document.getElementById("familyPercentage");

// Manipulação de eventos

//Função de pesquisar por nome
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredCharacters = dataHandler.searchName(characters.got, searchTerm);
  showCharacterCards(filteredCharacters);
});

// Função para exibir a mensagem com a porcentagem da família selecionada
function showFamilyPercentage(filteredCharacters) {
  const percentage = dataHandler.calculateFamilyPercentage(characters.got, filteredCharacters);
  const message = `A família selecionada possui ${percentage}% dos personagens.`;
  percentageElement.textContent = message;
}

// Filtro por família
filterByFamily.addEventListener("change", () => {
  const selectedFamily = filterByFamily.value;
  if (selectedFamily === "All") {
    showCharacterCards(characters.got);
    percentageElement.textContent = ""; // Limpa a mensagem de porcentagem
  } else {
    const filteredCharacters = dataHandler.filterCharactersByFamily(characters.got, selectedFamily);
    showCharacterCards(filteredCharacters);
    showFamilyPercentage(filteredCharacters);
  }
});

// Ordenando de A-Z
orderByname.addEventListener("change", () => {
  const selectedOrder = orderByname.value;
  const sortType = selectedOrder === "a-z" ? 'ASC' : 'DESC';
  const orderedCharacters = dataHandler.sortCharacters(characters.got, sortType);
  showCharacterCards(orderedCharacters);
});
