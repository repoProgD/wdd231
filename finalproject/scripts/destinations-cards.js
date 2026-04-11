import { getDestinations } from "./fetch.js";
import { createCard } from "./card.js";

const selectedList = document.querySelector("#selected-summary");
const container = document.querySelector('#random-destinations');

const getSelected = () => JSON.parse(localStorage.getItem("compare")) || [];

const updateUI = () => {
    let selected = getSelected();

    let allButtons = document.querySelectorAll(".to-compare");
    allButtons.forEach(button => {
        let id = button.dataset.id;

        if (selected.includes(id)) {
            button.textContent = "Added";
            button.classList.add("selected-btn");
        }

        else {
            button.textContent = "Compare";
            button.classList.remove("selected-btn");
        }
    });

    renderSelectedSummary(selected);
};

const renderSelectedSummary = (selectedIds) => {
    if (selectedIds.length === 0) {
        selectedList.innerHTML = "";
        return;
    }

    selectedList.innerHTML = `
        <div class="additional-div">
            <p>Destinations selected: <strong>${selectedIds.length} / 3</strong></p>
        

            <div class="selected-actions">
                <a href="compare.html" class="compare-button blue-button">Compare Now</a>
                <button id="clear-all" class="clear-button blue-button">Clear All</button>
            </div>
        </div>
    `;

    document.querySelector("#clear-all").addEventListener("click", () => {
        localStorage.removeItem("compare");
        updateUI();
    });
};



const displayDestinations = (featuredDestinations) => {
    container.innerHTML = "";

    featuredDestinations.forEach(destination => {
        const card = createCard(destination, true);
        const button = card.querySelector(".to-compare");
        
        button.addEventListener("click", () => {
            let selected = getSelected();

            if (selected.includes(destination.id)) {
                selected = selected.filter(id => id !== destination.id);
            }

            else {
                if (selected.length >= 3) {
                    alert("You can only compare up to 3 destinations");
                    return;
                }
                selected.push(destination.id);
            }

            localStorage.setItem("compare", JSON.stringify(selected));
            updateUI();

        });

        container.appendChild(card);
    });

    updateUI();
};
        

const getRandomDestinations = (destinations, count = 15) => {
    let shuffled = [...destinations].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const init = async () => {
    try {
        let data = await getDestinations();
        let randomDestinations = getRandomDestinations(data, 15);
        displayDestinations(randomDestinations);

    }

    catch (error) { 
        console.error("Error fetching destinations:", error);
        container.innerHTML = "<p> Error loading destinations. Please try again.</p>";
    }
    
};

init();