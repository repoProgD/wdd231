export const createCard = (destination, showButton = false) => {
    let card = document.createElement("article");
    card.classList.add("destination-card");

    let name = document.createElement("h3");
    name.classList.add("destination-name");

    let image = document.createElement("img");
    image.classList.add("destination-image");

    let location = document.createElement("p");
    location.classList.add("destination-location");

    let activities = document.createElement("p");
    activities.classList.add("destination-activities");

    name.textContent = destination.name;

    image.src = destination.imageUrl;
    image.alt = `Image of ${destination.name}`;
    image.loading = 'lazy';

    location.textContent = destination.location;
    activities.textContent = destination.activities.join(", ");

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(location);
    card.appendChild(activities);
    

    if (showButton) {
        let button = document.createElement("button");
        button.classList.add("to-compare");
        button.textContent = "Compare";
        button.dataset.id = destination.id;

        card.appendChild(button);
    }

    return card;
};