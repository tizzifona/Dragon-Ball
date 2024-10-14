import { fetchCharacters, displayCharacters } from './characters.js';

const loadMoreButton = document.getElementById('loadMoreButton');

let currentPage = 1; 
const itemsPerPage = 8;  

    export async function loadMoreCharacters() {
    const characters = await fetchCharacters(currentPage); 
    displayCharacters(characters); 
    currentPage++; 
}

loadMoreCharacters();

loadMoreButton.addEventListener('click', loadMoreCharacters);
