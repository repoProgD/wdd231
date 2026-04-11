export const createCard = (destination, showButton = false) => {
    let card = document.createElement("article");
    card.classList.add("destination-card");

    let name = document.createElement("h3");
    name.classList.add("destination-name");

    let image = document.createElement("img");
    image.classList.add("destination-image");

    let location = document.createElement("p");
    location.classList.add("destination-location");

    let climate = document.createElement("p");
    climate.classList.add("destination-climate");

    let type = document.createElement("p");
    type.classList.add("destination-type");

    let rating = document.createElement("p");
    rating.classList.add("destination-rating");

    name.textContent = destination.name;

    image.src = destination.imageUrl;
    image.alt = `Image of ${destination.name}`;
    image.loading = 'lazy';

    location.textContent = `Location: ${destination.location}`;
    climate.textContent = `Climate: ${destination.climate}`;
    type.textContent = `Type: ${destination.type}`;
    rating.textContent = `Rating: ${destination.rating}`;


    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(location);
    card.appendChild(climate);
    card.appendChild(type);
    card.appendChild(rating);
    

    if (showButton) {
        let button = document.createElement("button");
        button.classList.add("to-compare");
        button.textContent = "Compare";
        button.dataset.id = destination.id;

        card.appendChild(button);
    }

    return card;
};