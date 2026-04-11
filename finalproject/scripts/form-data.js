const params = new URLSearchParams(window.location.search);

const first = params.get("first");
const last = params.get("last");
const email = params.get("email");
const phone = params.get("phone");
const organizationName = params.get("organization-name");
const membershipLevel = params.get("membership-level");
const timestamp = params.get("timestamp")


const results = document.getElementById("results");

results.innerHTML = `
    <p><strong>First Name:</strong> ${first}</p>
    <p><strong>Last Name:</strong> ${last}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Membership Level:</strong> ${membershipLevel}</p>
    <p><strong>Submitted:</strong> ${timestamp}</p>
`;

