const dogImage = document.getElementById("dog-image");
const breedDetails = document.getElementById("breed-details");
const newDogButton = document.getElementById("new-dog-button");
const newBreedButton = document.getElementById("new-breed-button");
const randomDogSection = document.getElementById("random-dog");
const breedInfoSection = document.getElementById("breed-info");

function getRandomDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            const imageUrl = data.message;

            dogImage.innerHTML = `
                <img src="${imageUrl}" alt="Random dog">
            `;
        })
        .catch((error) => {
            console.error("Error fetching dog image:", error);
        });
}

function getRandomBreed() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            const breeds = Object.keys(data.message);
            const randomIndex = Math.floor(Math.random() * breeds.length);
            const breed = breeds[randomIndex];

            breedDetails.innerHTML = `
                <h4>${breed}</h4>
            `;
        })
        .catch((error) => {
            console.error("Error fetching breed information:", error);
        });
}

breedInfoSection.style.display = "none";
getRandomDog();

newDogButton.addEventListener("click", () => {
    breedInfoSection.style.display = "none";
    randomDogSection.style.display = "block";
    getRandomDog();
});

newBreedButton.addEventListener("click", () => {
    randomDogSection.style.display = "none";
    breedInfoSection.style.display = "block";
    getRandomBreed();
});