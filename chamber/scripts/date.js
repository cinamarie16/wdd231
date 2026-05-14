document.addEventListener('DOMContentLoaded', function() {
    const year = document.querySelector('#currentyear');
    function currentyear() {
        year.innerHTML = new Date().getFullYear();
    };
    currentyear();
});

document.getElementById('lastModified').innerHTML = `Last Modified: <span> ${document.lastModified}</span>`;