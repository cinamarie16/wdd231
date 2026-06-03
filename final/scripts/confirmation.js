const signupsDisplay = document.querySelector(".sign-ups");

let numSignups = Number(window.localStorage.getItem("numSignups-ls")) || 0;

signupsDisplay.textContent = numSignups;

numSignups++;

localStorage.setItem("numSignups-ls", numSignups);
