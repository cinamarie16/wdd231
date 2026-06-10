export function createMainCard(main) {
    return `
    <div class="main-char-card">
        <div class="main-info">
            <img src="${main.img}" alt="${main.name}" loading="lazy" class="card-img" width=300 height=300  >
            <h3>${main.name}</h3>
            <p>Book Title: ${main.book}</p>
            <p>Race: ${main.race}</p>
            <p>Character role: ${main.role}</p>
            <p>Full Name: ${main.fullName}</p>
            <p>Description: ${main.desc}</p>
        </div>
    </div>
    `;
}

export function createSideCard(side) {
    return `
    <div class="side-char-card">
        <div class="main-info">
            <img src="${side.img}" alt="${side.name}" loading="lazy" class="card-img" width=300 height=300>
            <h3>${side.name}</h3>
            <p>Book Title: ${side.book}</p>
            <p>Race: ${side.race}</p>
            <p>Character role: ${side.role}</p>
            <p>Full Name: ${side.fullName}</p>
            <p>Description: ${side.desc}</p>
        </div>
    </div>
    `;
}