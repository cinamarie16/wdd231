const members = 'data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(members);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement('section');
        const name = document.createElement('h3');
        const image = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const url = document.createElement('p');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address.street} ${member.address.city}`;
        phone.textContent = `${member.phone}`;
        url.textContent = `${member.url}`;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '300');
        url.setAttribute('class', 'url')

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        cards.appendChild(card);
    });
}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#grid-view");

gridButton.addEventListener("click", () => {
    display.classList.add("grid-view");
    display.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
    display.classList.add("list-view");
    display.classList.remove("grid-view");
});

