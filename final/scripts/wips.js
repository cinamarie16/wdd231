const mains = [
    {
        name: "Zain Carter",
        title: "Beauty Unseen",
        race: "human",
        role: "beauty",
        image: "images/zain1.webp"
    },
    {
        name: "Gemma Flynn",
        title: "Beauty Unseen",
        race: "human",
        role: "beast",
        image: "images/gemma1.webp"
    },
    {
        name: "Willa (Willa the Unwavering)",
        title: "Bound by Grace and Steel",
        race: "human",
        role: "female lead",
        image: "images/willa1.webp"
    },
    {
        name: "Fenryn (Mortimer Fenryn Roderick Erastus Rothilion III)",
        title: "Bound by Grace and Steel",
        race: "elf",
        role: "male lead",
        image: "images/fenryn1.webp"
    },
    {
        name: "Cypress Therkoma (aka Capri)",
        title: "Of Love and Loyalty",
        race: "vampire",
        role: "female lead",
        image: "images/cypress2.webp"
    },
    {
        name: "Aren Custavandi",
        title: "Of Love and Loyalty",
        race: "human",
        role: "male lead",
        image: "images/aren1.webp"
    },
    {
        name: "Rowan Moore",
        title: "Of Love and Loyalty",
        race: "vampire",
        role: "second male lead",
        image: "images/rowan1.webp"
    },
    {
        name: "Alekz (Alekzander Ian Katell)",
        title: "Reflections",
        race: "human",
        role: "male lead",
        image: "images/alekz1.webp"
    },
    {
        name: "Abby (Abigail Kerenza Tiernan)",
        title: "Reflections",
        race: "human",
        role: "female lead",
        image: "images/abby2.webp"
    },
    {
        name: "Leta (Aleta Isobel Katell)",
        title: "Reflections",
        race: "human",
        role: "male lead's sister",
        image: "images/leta2.webp"
    },
];

const projects = [
    {
        title: "Beauty Unseen",
        description: "Another short fairy tale retelling with gender swapped main characters. Beauty and the Beast, but contemporary.",
        progress: 5936,
        goal: 20000,
    },
    {
        title: "Bound by Grace and Steel",
        description: "A full-blown fantasy quest filled with secrets, revenge, and a search for the crown.",
        progress: 13774,
        goal: 100000,
    },
    {
        title: "Of Love and Loyalty",
        description: "A story of living vampires in the modern world. The original plan is that this will be a trilogy, with the series title 'Blood and Belonging'",
        progress: 21213,
        goal: 90000,
    },
    {
        title: "Reflections - Part 1",
        description: "The long awaited sequel...*cough, cough*. It's more like this is the main story and The Book of Memories has become a companion novel. The story of Prince Alekzander, told in three parts, not a trilogy. How he goes from being a spoiled, snotty, entitle Prince into the type of hero we all love. Part 1 focuses on the past.",
        progress: 61609,
        goal: 60000,
    },
    {
        title: "Reflections - Part 2",
        description: "Part 2 focuses on the Earth adventure.",
        progress: 57675,
        goal: 60000,
    },
    {
        title: "Reflections - Part 3",
        description: "Part 3 focuses on the present and what comes next.",
        progress: 15575,
        goal: 60000,
    },
];

function createProjectCard(project) {
    return `
    <div class="project-card">
        <div class="project-info">
            <h3>Working title: ${project.title}</h3>
            <p>${project.description}</p>
            <p>Current progress: ${project.progress}/${project.goal} words</p>
        </div>
    </div>
    `;
}


function createMainCard(main) {
    return `
    <div class="char-card">
        <img src="${main.image}" alt="${main.name}" loading="lazy" class="card-img" width=400 height=400>
        <div class="main-info">
            <h3>${main.name}</h3>
            <p>Book Title: ${main.title}</p>
            <p>Race: ${main.race}</p>
            <p>Character role: ${main.role}</p>
        </div>
    </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const projectCard = document.getElementById("proj-container");
    projectCard.innerHTML = projects.map(createProjectCard).join("");
})


document.addEventListener("DOMContentLoaded", () => {
    const mainCard = document.getElementById("char-container");
    mainCard.innerHTML = mains.map(createMainCard).join("");
})
