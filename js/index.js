import { fetchCharacters } from './characters.js';
import { loadMoreCharacters } from './loadMore.js';

fetchCharacters().then(() => {
    console.log('Characters have been fetched and displayed.');
});