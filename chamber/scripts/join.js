import { memberships } from "../data/membership.mjs";

const timestamp = document.querySelector('#timestamp');
timestamp.value = new Date().toLocaleString();


const levelBox = document.querySelector('#membership');

const levelModal = document.querySelector('#membership-levels');
const modalTitle = document.querySelector('#membership-levels h3');
const levelInfo = document.querySelector('#membership-levels p');
const closeButton = document.querySelector('#membership-levels button');

closeButton.addEventListener('click', () => {
    levelModal.close();
});

function displayItems(data) {
    data.forEach(x => {
        // console.log(x)
        const levelCard = document.createElement('div');
        levelCard.id = 'level-card';

        const levelTitle = document.createElement('h2');
        levelTitle.innerHTML = `${x.level} Membership Level`;
        
        const openButton = document.createElement('button');
        openButton.textContent = 'Learn More';

        openButton.addEventListener('click', () => showStuff(x));

        levelCard.appendChild(levelTitle);
        levelCard.appendChild(openButton);
        levelBox.appendChild(levelCard);
    });
}

displayItems(memberships)

function showStuff(x) {
    modalTitle.innerHTML = `${x.level} Membership Level`;
    levelInfo.innerHTML = `Cost: ${x.cost} <br> Benefits: ${x.benefits}`;
    levelModal.showModal();
}
