import { getDestinations } from "./fetch.js";
import { createCard } from "./card.js";


const container = document.querySelector('#featured-container');

const displayDestinations = (featuredDestinations) => {
    featuredDestinations.forEach((destination) => {
        const card = createCard(destination);
        container.appendChild(card);
    });
};


const init = async () => {
    let data = await getDestinations();

    let featured = data.filter(dest => dest.recommended);

    displayDestinations(featured);
};

init();