const requestURL = "https://dragonball-api.com/api/characters"; 
const charactersContainer = document.getElementById('charactersContainer');


export async function fetchCharacters() {
    const response = await fetch(requestURL);
    const data = await response.json(); 
    return data.items; 
}


fetchCharacters().then(characters => {
    characters.forEach(character => {
        let image = character.image;
        let name = character.name;
        let gender = character.gender;
        let race = character.race;
        let affiliation = character.affiliation || "N/A"; 
        let ki = character.ki;
        let maxKi = character.maxKi;

        charactersContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="${name}">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${gender} - ${race}</p>
                <p class="card-text"> Base KI: ${ki}</p>
                <p class="card-text"> Total KI: ${maxKi}</p>
                <p class="card-text"> Affiliation: ${affiliation}</p>
            </div>
        </div>`;
    });
});
