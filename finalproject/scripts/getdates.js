// select the DOM element
const currentYear = document.querySelector('#currentyear');

// create a new date object
const today = new Date();

// insert current year
currentYear.innerHTML = `<span class="currentyear">${today.getFullYear()}</span>`

//document last modified
const lastModPTag = document.getElementById("lastModified");
lastModPTag.textContent = `Last Modification: ${document.lastModified}`;