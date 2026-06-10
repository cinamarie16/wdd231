import { mobileNav } from "./navigation.mjs";
import { getYear } from "./date.mjs";
import { lastMod } from "./date.mjs";

import { mainChars } from "../data/main-chars.mjs";
import { sideChars } from "../data/side-chars.mjs";

import { createMainCard, createSideCard } from "./char-cards.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const mainCard = document.getElementById("main-char-container");
    mainCard.innerHTML = mainChars.map(createMainCard).join("");
});

document.addEventListener("DOMContentLoaded", () => {
    const sideCard = document.getElementById("side-char-container");
    sideCard.innerHTML = sideChars.map(createSideCard).join("");
});

mobileNav()
getYear()
lastMod()