/*Hamb button*/
const navButton = document.querySelector("#nav-button");  // #menu

/* Navigation bar */
const navigation = document.querySelector("#nav-bar"); // nav tag

navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navigation.classList.toggle("show");
});



