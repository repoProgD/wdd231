const membersUrl = 'data/members.json';

async function getMembersData() {
    let response = await fetch(membersUrl);
    let data = await response.json();
    /*displayMembers(data.businesses);*/

    let silverGoldMembers = data.businesses.filter(member =>
        member.membership_level === 1 || member.membership_level === 2
    );

    let randomized = silverGoldMembers.sort(() => 0.5 - Math.random());
    let selectedMember = randomized.slice(0, 3);

    displaySpotlights(selectedMember)
}

getMembersData();


function displaySpotlights(members) { 
    let container = document.querySelector('#spotlights-container');
    if (!container) return; 

    container.innerHTML = "";

    members.forEach(member => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let image = document.createElement("img");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

        card.classList.add("business-spotlight");

        name.textContent = member.company_name;
        name.classList.add("section-title");

        image.setAttribute('src', `images/${member.image_file}`);
        image.setAttribute('alt', `Image of ${member.company_name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '75');

        email.innerHTML = `${member.email}`
        phone.innerHTML = `${member.company_phone}`;
        website.innerHTML = `<a href="${member.company_website}" target="_blank">Visit Website</a>`;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(website);

        container.appendChild(card);
        
    });
}


