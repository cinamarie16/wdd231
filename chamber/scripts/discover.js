import { interests } from "../data/interests.mjs";
const cards = document.querySelector('#interest-cards');

const displayInterests = (interests) => {
    interests.forEach(interest => {
        const card = document.createElement('div');
        const name = document.createElement('h2');
        const figure = document.createElement('figure');
        const address = document.createElement('address');
        const description = document.createElement('p');

        name.textContent = `${interest.name}`;
        
        const img = document.createElement('img');
        img.src = interest.img;
        img.alt = interest.name;
        img.loading = 'lazy';
        img.width = '300';
        img.height = '200';
        figure.appendChild(img);
        
        address.innerHTML = `${interest.address.street}<br>${interest.address.city}`;
        description.textContent = `${interest.description}`;

        const button = document.createElement('button');
        button.textContent = 'Learn More';

        
        card.appendChild(name);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);
        
        cards.appendChild(card);
    });
}

displayInterests(interests);



const storedDate = localStorage.getItem('savedDate');

function getDaysPast(date) {
    if (!date) return null;

    const currentDate = new Date().getTime();
    const timeDifference = currentDate - storedDate;
    
    const msPerDay = 86400000;
    const daysPast = timeDifference / msPerDay;
    
    return Math.floor(daysPast);
}

const pastVisit = getDaysPast(storedDate);
const visitDays = document.querySelector('#visit-days');

if (pastVisit === null) {
    visitDays.innerHTML = `Welcome! Let us know if you have any questions.`;
} else if (pastVisit < 1) {
    visitDays.innerHTML = `Back so soon! Awesome!`;
} else {
    if (pastVisit === 1) {
        visitDays.innerHTML = `You last visited ${pastVisit} day ago.`
    }
    else {
        visitDays.innerHTML = `You last visited ${pastVisit} days ago.`
    }
}

const currentDate = Date.now().toString();
localStorage.setItem('savedDate', currentDate);

