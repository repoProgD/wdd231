import { places } from "../data/places.mjs"
console.log(places)

const container = document.querySelector('#discover-cards');

const displayPlaces = (places) => {
    places.forEach((place) => {
        let card = document.createElement("section");
        card.classList.add("place-card");

        let name = document.createElement("h2");
        name.classList.add("place-name");

        let image = document.createElement("img");
        image.classList.add("place-image");

        let address = document.createElement("p");
        address.classList.add("place-address");

        let description = document.createElement("p");
        description.classList.add("place-description");

        name.textContent = place.name;

        image.setAttribute('src', place.photo_url);
        image.setAttribute('alt', `Image of ${place.name}`);
        image.setAttribute('loading', 'lazy');

        address.textContent = place.address;
        description.textContent = place.description;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(description);

        container.appendChild(card);
    });
        
};

displayPlaces(places);