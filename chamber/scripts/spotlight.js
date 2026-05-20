const members = 'data/members.json';
const spotlight = document.querySelector('#spotlight');

async function getSpotlightData() {
    const response = await fetch(members);
    const data = await response.json();

    let randomMember;

    while (true) {
        const randomIndex = Math.floor(Math.random() * data.members.length);
        randomMember = data.members[randomIndex];
        if (randomMember.level !== 1) {
            break;
        }
    }

    displaySpotlight(randomMember);
}

getSpotlightData();
getSpotlightData();

const displaySpotlight = (member) => {
    const card = document.createElement('section');
    const name = document.createElement('h3');
    const image = document.createElement('img');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const url = document.createElement('p');
    const level = document.createElement('p');
    
    name.textContent = `${member.name}`;
    address.textContent = `${member.address.street} ${member.address.city}`;
    phone.textContent = `${member.phone}`;
    url.textContent = `${member.url}`;

    if (member.level === 2) {
        level.textContent = 'Membership Level: Silver';
    } else {
        level.textContent = 'Membership Level: Gold';
    }
    
    image.setAttribute('src', member.image);
    image.setAttribute('alt', `Logo of ${member.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '300');
    image.setAttribute('height', '300');
    level.setAttribute('class', 'level')
    
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    card.appendChild(level);
        
    spotlight.appendChild(card);
}
