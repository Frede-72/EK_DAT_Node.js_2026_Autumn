async function getPlants() {
    fetch("/api/plants")
    .then(response => response.json())
    .then(result => {
        const plantsListDataList = document.getElementById("plants-list");

        result.data.forEach((plant) => {
        const plantsListOption = document.createElement("option");
        plantsListOption.value = plant.slug;
        plantsListDataList.appendChild(plantsListOption);
        });

    });
}

getPlants();

async function addPlant(){
    const plantSlug = document.getElementById("plants-list-search-input").value
    const plantsSection = document.getElementById("plants")

    const response = await fetch(`/api/plants/${plantSlug}`);
    const result = await response.json();
    const plant = result.data;

    if(!plant) {
        console.log("No plant found. Please select a plant");
        return;
    }
    const imageURL = "https://www.plantsolve.com/" + sanitizeXSS(plant.featuredImage);
    console.log(plant);

    const plantsDiv = document.createElement("div");
    plantsDiv.innerHTML = `
        <h2>${sanitizeXSS(plantSlug)}</h2>
        <h4>${sanitizeXSS(plant.care?.watering)}<h4/>
        <img class="plant-image" src=${imageURL} alt="plant image ${sanitizeXSS(plantSlug)}">
        <p>${sanitizeXSS(plant.quickAnswer)}<p/>
    `;
    plantsSection.appendChild(plantsDiv);

    
}