import { fetchCharacters } from './characters.js';

fetchCharacters().then(() => {
    console.log('Characters have been fetched and displayed.');
});
