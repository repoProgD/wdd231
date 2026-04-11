import { getDestinations } from "./fetch.js";


const header = document.querySelector("#compare-header");
const body = document.querySelector("#compare-body");
const selected = JSON.parse(localStorage.getItem("compare")) || [];
const properties = ["location", "type", "climate", "activities"];

const displayCompare = (destinations) => {
    

    let filtered = destinations.filter(dest =>
        selected.includes(dest.id)
    );

    filtered.forEach(dest => {
        let th = document.createElement("th");
        th.textContent = dest.name;
        header.appendChild(th);
    });

    properties.forEach(prop => {
        let row = document.createElement("tr");

        let label = document.createElement("td");
        label.textContent = prop;
        row.appendChild(label);

        filtered.forEach(dest => {
            let cell = document.createElement("td");
            let value = dest[prop];

            if (Array.isArray(value)) {
                value = value.join(", ");
            }

            cell.textContent = value;
            row.appendChild(cell);
        });

        body.appendChild(row);
    });
};

const init = async () => {
    let data = await getDestinations();
    displayCompare(data);
};

init();