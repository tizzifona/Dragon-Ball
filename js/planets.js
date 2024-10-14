const requestURL = "https://dragonball-api.com/api/planets"; 
const planetsContainer = document.getElementById('planetsContainer'); 
const loadMoreButtonPlanets = document.getElementById('loadMoreButtonPlanets');
const itemsPerPage = 8;  
let currentPage = 1;

export async function fetchPlanets(page) {
    const response = await fetch(`${requestURL}?page=${page}&limit=${itemsPerPage}`);
    const data = await response.json(); 
    return data.items; 
}

export function displayPlanets(planets) {
    planets.forEach(planet => {
        let image = planet.image;
        let name = planet.name;
        let description = planet.description;
        let isDestroyedText = planet.isDestroyed ? 'Está Destruido' : 'No Destruido';
        planetsContainer.innerHTML += `
        <div class= "planetInfo">
        <img src="${image}" class="planetInfoImg" alt="${name}"
        <div class="planetInfoMain">
                <h5 class="planetInfoTitle">${name}</h5>
                <p class="planetInfoDescription">${description}</p>
                 <p class="planetInfoText">${isDestroyedText}</p>
        </div>
        </div>`;
    });
}

fetchPlanets(currentPage).then(displayPlanets);

loadMoreButtonPlanets.addEventListener('click', async () => {
    currentPage++; 
    const newPlanets = await fetchPlanets(currentPage); 
    displayPlanets(newPlanets); 
});
