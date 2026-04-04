const messageContainer = document.querySelector('#visit-message');

const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();
const msToDays = 1000 * 60 * 60 * 24;  /*ms '*' s '*' m '*' h '*' d */

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions."
}

else {
    const difference = now - Number(lastVisit);
    const days = Math.floor(difference / msToDays);

    if (days < 1) {
        message = "Back so soon! Awesome!";
    }

    else if (days === 1) {
        message = "Back so soon! Awesome!";
    }
        
    else {
        message = `You last visited ${days} days ago.`;
    }

}

messageContainer.textContent = message;

localStorage.setItem('lastVisit', now);