const pubbedBooks = [
    {
        title: "Peas for Princes",
        image: "images/peas-for-princes.webp",
        blurb: 
            "With hopes of claiming her happily-ever-after fading after years of disappointment, Myra fears the perfect prince for her doesn’t exist. What other reason could there be for her lack of suitors?<br><br>Her royal parents, on the other hand, refuse to give up on helping their beloved daughter find happiness. Invitations to a tournament of sorts have gone out to kingdoms far and wide, inviting a bevy of eligible young men to participate in a series of tests to win the princess’s heart.<br><br>Suddenly, Myra has a surplus of men to choose from. The mischievous Fawx. Cool and charming Soren. Swoon-worthy Owain. Quiet and considerate Ronan. Can she find love among them? Or will they fail her ancestors’ traditional test and cast her back to her isolated existence?<br><br>PEAS FOR PRINCES is a short retelling of Hans Christian Andersen’s The Princess and the Pea influenced by shojo anime.<br><br>ReTold Minis is a collection of standalone novellas with the common theme of gender-swapped main characters.",
        buyLink: "https://books2read.com/peasforprinces",
    },
    {
        title: "Ethereal Slumber",
        image: "images/ethereal-slumber.webp",
        blurb: "17-year-old Pippa Hubbard dreams of being in a bustling big city, pursuing a glamorous career in fashion design. Instead, her mother drags her to Eidolon, a minuscule town in the middle-of-nowhere. Sure, a surprise inheritance from a family friend is nice. However, it does nothing to lessen her fears of being bored to tears in the tiny town.<br>But bored is the last thing she’ll be in Eidolon. Secrets buried beneath the sleepy little burg are eager to claw their way to the surface in ways impossible to ignore.<br><br>A gust of wind where the air is still.<br><br>The whinny of a horse when she's all alone.<br><br>Instead of running from these oddities, Pippa makes the bold decision to investigate only to find herself face-to-face with a disembodied spirit.<br><br>He claims his name is Titus Zorana and pleads with Pippa to help him break free from a curse binding him to a local house. As unease prickles down her spine, Pippa asks herself the two questions that could alter the course of her life forever. Should she believe him and try to help? Or trust her instincts and run?<br><br>ETHEREAL SLUMBER is a short novella, inspired by The Grimms’ Briar Rose.<br><br>ReTold Minis is a collection of standalone novellas with the common theme of gender-swapped main characters.",
        buyLink: "https://books2read.com/etherealslumber",
    },
    {
        title: "Little Sea Rose",
        image: "images/little-sea-rose.webp",
        blurb: "For the first time in fifteen generations, the underwater kingdom has a sea prince.<br><br>Adored and exalted, Kale has spent his life surrounded by guards and shadowed everywhere he swims. The youngest of six, and the only boy, he’s felt distanced from his sisters and plagued by loneliness his entire young life.<br><br>Until on his sixteenth birthday, he fulfills the law by venturing to the surface. There, he witnesses a land girl fighting for her life. While law forbids him from allowing himself to be seen, he wastes no time rescuing the beautiful Rosheen.<br><br>Yet trouble finds him when he returns to the sea. Finally free from his guards, Kale explores the forbidden ruins. To his surprise, he discovers a clue to his father’s disappearance along with signs pointing to the co-existence between sea and land people. Before he can tell a soul, a curse is activated, turning the sea prince human.<br><br>Unable to speak, he ventures top-side where he must rely on Rosheen to help unravel the mystery. Something sinister lurks in the depths, spreading its inky hate through the kingdom. Can Kale and Rosheen uncover the clues that explain his father’s disappearance? Or will they be the next victims of the sea witch’s cruel curse?<br><br>LITTLE SEA ROSE is a short retelling of Hans Christian Anderson’s The Little Mermaid.<br><br>ReTold Minis is a collection of standalone novellas with the common theme of gender-swapped main characters.",
        buyLink: "https://books2read.com/littlesearose",
    },
    {
        title: "The Book of Memories",
        image: "images/book-of-memories.webp",
        blurb: "Fifteen-year-old Abigail Fallon leads a charmed life in her upscale neighborhood, where her biggest challenge is starting high school as the new girl. Suddenly, her straightforward world changes when she is assailed by strange visions of a long-forgotten past. Her life is further complicated by the unwelcome revelation of her true relationship to her parents. Her visions leave her feeling lost and her best friend is no help at all. Throw in a few handsome boys vying for her attention, and it's enough for her to start questioning her sanity. Should she allow herself to fall in love? Will these visions be her undoing? Or will she soar to unprecedented triumphs? Join Abigail as she navigates her ordinary -and extraordinary- teen life.",
        buyLink: "https://books2read.com/bookofmemories",
    },
];


function createBookCard(book) {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${book.image}" alt="${book.title}" loading="lazy" class="card-img" width="400" height="auto">
            </div>
            <div class="flip-card-back">
                <h2>${book.title}</h2>
                <p>${book.blurb}</p>
                <button type="button" onclick="window.location.href='${book.buyLink}'">Buy Now</button>
            </div>
        </div>
    `;
    return card;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("card-container");
    pubbedBooks.forEach(book => {
        const bookCard = createBookCard(book);
        bookCard.addEventListener("click", function () {
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
        container.appendChild(bookCard);
    });
});

