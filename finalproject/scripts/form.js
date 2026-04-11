const form = document.querySelector("form");
const timestampInput = document.getElementById("timestamp");


form.addEventListener("submit", () => {
    timestampInput.value = new Date().toISOString();
});