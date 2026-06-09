import { mobileNav } from "./navigation.mjs";
import { getYear } from "./date.mjs";
import { lastMod } from "./date.mjs";




mobileNav()
getYear()
lastMod()


const signupsDisplay = document.querySelector(".sign-ups");

let numSignups = Number(window.localStorage.getItem("numSignups-ls")) || 0;

signupsDisplay.textContent = numSignups;

numSignups++;

localStorage.setItem("numSignups-ls", numSignups);
