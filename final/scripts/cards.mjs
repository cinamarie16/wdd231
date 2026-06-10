export function displayBookCards(books) {
    const container = document.getElementById('card-container');
    if (!container) return;
    container.innerHTML = '';

    books.forEach(book => {
        if (book.img && book.img !== 'none') {
            const bookCard = createBookCard(book);

            bookCard.addEventListener("click", function () {
                const inner = this.querySelector(".flip-card-inner");
                const back = this.querySelector(".flip-card-back");
                const front = this.querySelector(".flip-card-front");
                
                this.classList.toggle('is-flipped');
            });
            container.appendChild(bookCard);
        } else if (book.img && book.img === 'none') {
            const blankCard = createBlankCard(book);
            container.appendChild(blankCard);
        }
    });
}

function createBlankCard(book) {
    const card = document.createElement("div");
    card.className = "nonflip-card";

    const inner = document.createElement("div");
    inner.className = "nonflip-card-inner";
    inner.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.desc}</p>
        <p>Characters: ${book.chars}<br>Series: ${book.series}</p>
        <p>Status: ${book.status}<br>Progress: ${book.progress}</p>
        `
    
    card.appendChild(inner);
    return card;
}

function createBookCard(book) {
    const card = document.createElement("div");
    card.className = "flip-card";

    const inner = document.createElement("div");
    inner.className = "flip-card-inner";

    const front = document.createElement("div");
    front.className = "flip-card-front";
    const image = document.createElement("img");
    image.setAttribute('src', book.img);
    image.setAttribute('alt', book.title);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('class', 'card-img')
    image.setAttribute('width', '300');
    image.setAttribute('height', '450');
    front.appendChild(image);

    const back = document.createElement("div");
    back.className = "flip-card-back";
    if (book.url !== "none") {
        back.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.desc}</p>
        <p>Characters: ${book.chars}<br>Series: ${book.series}</p>
        <p>Status: ${book.status}<br>Progress: ${book.progress}</p>
        <button type="button" onclick="window.location.href='${book.url}'">Buy Now</button>
        `
    } else {
        back.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.desc}</p>
        <p>Characters: ${book.chars}<br>Series: ${book.series}</p>
        <p>Status: ${book.status}<br>Progress: ${book.progress}</p>
        `
    }

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    return card;
}
