const url = 'data/members.json';


async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.businesses);
}

const cards = document.querySelector('#cards');
const mappedMembership = {
    1: "Gold",
    2: "Silver",
    3: "Member"
}


getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        

        let card = document.createElement("section");
        let name = document.createElement("h2");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let membership = document.createElement("p");
        


        // Build the h2 
        name.textContent = member.company_name; 
        // Build the image by setting all the relevant attributes
        image.setAttribute('src', `images/${member.image_file}`);
        image.setAttribute('alt', `Image of ${member.company_name}`); 
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        address.innerHTML = `${member.company_address}`;
        phone.innerHTML = `${member.company_phone}`;
        website.innerHTML = `<a href="${member.company_website}" target="_blank">Visit Website</a>`;
        membership.innerHTML = `Membership Level: ${mappedMembership[member.membership_level]}`;

        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}


// Grid and List Toggle

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');


gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});

