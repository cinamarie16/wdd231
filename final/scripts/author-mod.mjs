export const authors = [
    {
        name: "Lucina M. Huff",
        img: "images/author-bio-pic.webp",
        about: "is a proud indie author that loves fantasy, romance, and fairy tales. She was born and raised in the stunning and diverse PNW city of Tacoma, WA. Since marrying her own handsome prince charming, she has lived in more places than she cares to count. She is a stay-at-home mom of two spunky girls and is currently studying Software Development.<br>Her hobbies include (but are not limited to): crocheting, playing the piano, chainmaille jewelry making, and bingeing all the stories. She also loves watching Chinese dramas and listening to K-Pop. Her ultimate favorite Chinese drama is The Untamed. Her top three K-Pop groups (in no particular order) are Stray Kids, Alpha Drive One, and Ateez.",
    },
];

export function createFlipCard(author) {
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
