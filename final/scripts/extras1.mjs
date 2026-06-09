const frequencies = [
    {
        value: "month",
        name: "Once a month",
    },
    {
        value: "quarter",
        name: "Once a quarter",
    },
    {
        value: "twice",
        name: "Twice a year",
    },
    {
        value: "year",
        name: "Once a year",
    },
    {
        value: "updates",
        name: "Only for updates",
    },
];

const selectElement = document.getElementById("frequency");

frequencies.forEach(frequency => {
    const option = document.createElement("option");
    option.value = frequency.value;
    option.textContent = frequency.name;
    selectElement.appendChild(option);
});

const authors = [
    {
        name: "Lucina M. Huff",
        img: "images/author-bio-pic.webp",
        about: "is a proud indie author that loves fantasy, romance, and fairy tales. She was born and raised in the stunning and diverse PNW city of Tacoma, WA. Since marrying her own handsome prince charming, she has lived in more places than she cares to count. She is a stay-at-home mom of two spunky girls and is currently a student at BYU-Pathway Worldwide, where she is studying Software Development. (Yes, she did design this website, and she's super excited about it!) Her hobbies include (but are not limited to): crocheting, playing the piano, chainmaille jewelry making, and bingeing all the stories. She also loves watching Chinese dramas and listening to K-Pop. Her ultimate favorite Chinese drama is The Untamed. Her top three K-Pop groups (in no particular order) are Stray Kids, Alpha Drive One, and Ateez.",
    },
];

function createFlipCard(author) {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${author.img}" alt="About ${author.name}" loading="lazy" class="card-img" width="300" height="461">
            </div>
            <div class="flip-card-back">
                <p>${author.name} ${author.about}</p>
            </div>
        </div>
    `;
    return card;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("author-container");
    authors.forEach(author => {
        const authorCard = createFlipCard(author);
        authorCard.addEventListener("click", function () {
            const inner = this.querySelector(".flip-card-inner");
            const back = this.querySelector(".flip-card-back");
            const front = this.querySelector(".flip-card-front");

            this.classList.toggle("is-flipped");

            if (isFlipped) {
                inner.style.height = back.offsetHeight + 'px';
            } else {
                inner.style.height = front.offsetHeight + 'px';
            }
        });
        container.appendChild(authorCard);
    });
});

