const requestURL = "https://dragonball-api.com/api/characters"; 
const charactersContainer = document.getElementById('charactersContainer');
const loadMoreButton = document.getElementById('loadMoreButton');
const itemsPerPage = 8;  
let currentPage = 1; 

export async function fetchCharacters(page) {
    const response = await fetch(`${requestURL}?page=${page}&limit=${itemsPerPage}`); 
    const data = await response.json(); 
    return data.items; 
}

export function displayCharacters(characters) {
    characters.forEach(character => {
        let image = character.image;
        let name = character.name;
        let gender = character.gender;
        let race = character.race;
        let affiliation = character.affiliation || "N/A"; 
        let ki = character.ki;
        let maxKi = character.maxKi;

        charactersContainer.innerHTML += `
        <div class="characterInfo">
        <div class="characterImgContainer">
            <img src="${image}" class="characterInfoImg" alt="${name}">
            </div>
            <div class="characterInfoMain">
            <div class="characterInfoHeader">
                <h5 class="characterInfoTitle">${name}</h5>
                <p class="characterInfoTitleText">${gender} - ${race}</p>
                </div>
                <p class="characterInfoText">Base KI: ${ki}</p>
                <p class="characterInfoText">Total KI: ${maxKi}</p>
                <p class="characterInfoText">Affiliation: ${affiliation}</p>
            </div>
        </div>`;
    });
}

fetchCharacters(currentPage).then(displayCharacters);

loadMoreButton.addEventListener('click', async () => {
    currentPage++;
    const newCharacters = await fetchCharacters(currentPage); 
    displayCharacters(newCharacters); 
});
