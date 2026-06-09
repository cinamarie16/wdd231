import { mobileNav } from "./navigation.mjs";
import { getYear } from "./date.mjs";
import { lastMod } from "./date.mjs";
import { saveTextarea } from "./local-store-mod.mjs";
import { authors, createFlipCard } from "./author-mod.mjs";

saveTextarea();
mobileNav();
getYear();
lastMod();

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("author-container");

    if (!container) return;

    authors.forEach(author => {
        const authorCard = createFlipCard(author);

        authorCard.addEventListener("click", function () {
            const inner = this.querySelector(".flip-card-inner");
            const back = this.querySelector(".flip-card-back");
            const front = this.querySelector(".flip-card-front");

            const isFlipped = this.classList.toggle("is-flipped");

            if (isFlipped) {
                inner.style.height = `${back.offsetHeight}px`;
            } else {
                inner.style.height = `${front.offsetHeight}px`;
            }
        });
        container.appendChild(authorCard);
    });
});

