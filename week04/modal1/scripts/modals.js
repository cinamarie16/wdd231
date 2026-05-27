const openButton1 = document.querySelector('#open-button1');
const openButton2 = document.querySelector('#open-button2');
const openButton3 = document.querySelector('#open-button3');

const dialogBox = document.querySelector('#dialog-box');
const dialogBoxText = document.querySelector('#dialog-box div');
const closeButton = document.querySelector('#close-button');

openButton1.addEventListener('click', () => {
    dialogBoxText.innerHTML = 'An apple has 95 calories.'
    dialogBox.showModal();
});

openButton2.addEventListener('click', () => {
    dialogBoxText.innerHTML = 'An orange has 45 calories.'
    dialogBox.showModal();
});

openButton3.addEventListener('click', () => {
    dialogBoxText.innerHTML = 'A banana has 105 calories.'
    dialogBox.showModal();
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
});