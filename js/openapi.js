const dogImage = document.getElementById("dog-image");
const breedDetails = document.getElementById("breed-details");
const newDogButton = document.getElementById("new-dog-button");
const newBreedButton = document.getElementById("new-breed-button");

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

getRandomDog();
getRandomBreed();

newDogButton.addEventListener("click", () => {
    getRandomDog();
});

newBreedButton.addEventListener("click", () => {
    getRandomBreed();
});