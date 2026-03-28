const form = document.querySelector("form");
const timestampInput = document.getElementById("timestamp");


FormData.addEventListener("submit", () => {
    timestampInput.value = new Date().toISOString();
});