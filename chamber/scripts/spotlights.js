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
        card.classList.add("business-spotlight");
        
        let name = document.createElement("h2");
        name.textContent = member.company_name;

        let imageContainer = document.createElement("div");
        imageContainer.classList.add("spotlight-image");

        let image = document.createElement("img");
        image.setAttribute('src', `images/${member.image_file}`);
        image.setAttribute('alt', `Image of ${member.company_name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '67');

        imageContainer.appendChild(image);

        let info = document.createElement("div");
        info.classList.add("spotlight-info");

        let email = document.createElement("p");
        email.innerHTML = `${member.email}`

        let phone = document.createElement("p");
        phone.innerHTML = `${member.company_phone}`;

        let website = document.createElement("a");
        website.href = member.company_website;
        website.target = "_blank";
        website.textContent = "Visit Website"
    
        
        info.append(email, phone, website);
        
        card.append(name, imageContainer, info);

        container.appendChild(card);
        
    });
}


