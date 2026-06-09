// const booksUrl = 'data/books.json';


export async function getBookData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        const booksArray = Object.values(data.books || {});
        // console.log(booksArray);
        displayBookCards(booksArray);
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

function displayBookCards(books) {
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
                const isFlipped = this.classList.contains('is-flipped');
    
                if (isFlipped) {
                    inner.style.height = back.offsetHeight + 'px';
                } else {
                    inner.style.height = front.offsetHeight + 'px';
                }
            });
            container.appendChild(bookCard);
        }
    });
}

function createBookCard(book) {
    const card = document.createElement("div");
    card.className = "flip-card";

    const inner = document.createElement("div")
    inner.className = "flip-card-inner";

    const front = document.createElement("div");
    front.className = "flip-card-front";
    const image = document.createElement("img");
    image.setAttribute('src', book.img);
    image.setAttribute('alt', book.title);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '300');
    image.setAttribute('height', '450');
    front.appendChild(image);

    const back = document.createElement("div");
    back.className = "flip-card-back";
    if (book.url !== "none") {
        back.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.desc}</p>
        <p>Main Characters: ${book.chars} / Series: ${book.series}</p>
        <p>Status: ${book.status} / Progress: ${book.progress}</p>
        <button type="button" onclick="window.location.href='${book.url}'">Buy Now</button>
        `
    } else {
        back.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.desc}</p>
        <p>Main Characters: ${book.chars}<br>Series: ${book.series}</p>
        <p>Status: ${book.status}<br>Progress: ${book.progress}</p>
        `
    }

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    return card;
}
