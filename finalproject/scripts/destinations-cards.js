import { getDestinations } from "./fetch.js";
import { createCard } from "./card.js";

const container = document.querySelector('#random-destinations');

const selected = JSON.parse(localStorage.getItem("compare")) || [];

const displayDestinations = (featuredDestinations) => {
    featuredDestinations.forEach((destination) => {
        
        const card = createCard(destination, true);
        const button = card.querySelector(".to-compare");

        if (selected.includes(destination.id)) {
            button.textContent = "Added";
        }

        if (selected.includes(destination.id)) { 
            button.textContent = "Added";
        }

        button.addEventListener("click", () => {
            
            if (selected.includes(destination.id)) { 
                let index = selected.indexOf(destination.id);
                selected.splice(index, 1);

                button.textContent = "Compare";
            }

            else { 
                if (selected.length >= 3) {
                    alert("You can only compare up to 3 destinations");
                    return;
                }
                selected.push(destination.id);
                button.textContent = "Added";
            }


            
            localStorage.setItem("compare", JSON.stringify(selected));
            
        });

        container.appendChild(card);
    });
};

const getRandomDestinations = (destinations, count = 15) => {
    let shuffled = [...destinations].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const init = async () => {
    let data = await getDestinations();

    let randomDestinations = getRandomDestinations(data, 15);
    displayDestinations(randomDestinations);
};

init();