const requestURL = "https://dragonball-api.com/api/planets"; 
const planetsContainer = document.getElementById('planetsContainer'); 
const loadMoreButtonPlanets = document.getElementById('loadMoreButtonPlanets');
const itemsPerPage = 6;  
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
        let isDestroyedText = planet.isDestroyed ? 'Está Destruido' : 'No Destruido';
        let description = planet.description.split('.')[0];
        planetsContainer.innerHTML += `
        <div class= "planetInfo">
        <div class="planetImgContainer">
        <img src="${image}" class="planetInfoImg" alt="${name}"
         </div>
        <div class="planetInfoMain">
                <h5 class="planetInfoTitle">${name}</h5>
                <p class="planetInfoText">${isDestroyedText}</p>
                <div class= "lineBeforeText"></div>
                <p class="planetInfoDescription">${description}</p>
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
