import { displayBookCards } from "./cards.mjs";

const subSelectMap = {
    all: [{ value: 'all', text: 'All Books' }],
    series: [
        { value: 'all', text: 'All Series'},
        { value: 'Recollection Cycle', text: 'Recollection Cycle' },
        { value: 'ReTold Minis', text: 'ReTold Minis' },
        { value: 'Blood and Belonging', text: 'Blood and Belonging' },
        { value: 'Standalone', text: 'Standalone' }
    ],
    status: [
        { value: 'all', text: 'All Statuses'},
        { value: 'Published', text: 'Published' },
        { value: 'In Progress', text: 'In Progress' },
        { value: 'Brainstorming', text: 'Brainstorming' }
    ]
};

function updateBookDisplay(bookList) {
    // console.log("sending to displayBookCards:", bookList);
    
    displayBookCards(bookList);
}

export async function selectApp() {
    try {
        const response = await fetch('data/books.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        const books = Array.isArray(data) ? data : data.books;
        if (!books) {
            throw new Error("Could not find an array of books in your JSON file. Check its structure.");
        }

        const bookSelect = document.querySelector('#book-select');
        const subSelect = document.querySelector('#sub-select');

        const filterModal = document.querySelector('#filter-modal');
        const openModalBtn = document.querySelector('#book-filter-button');
        const closeModalBtn = document.querySelector('#close-button');

        openModalBtn.addEventListener('click', () => {
            filterModal.showModal();
        });

        closeModalBtn.addEventListener('click', () => {
            filterModal.close();
        });

        function filterAndDisplay() {
            const selectType = bookSelect.value;
            const subValue = subSelect.value;
        
            let filtered = books;

            if (selectType !== 'all') {
                filtered = filtered.filter(b => b[selectType] !== undefined);

                if (subValue !== 'all') {
                    filtered = filtered.filter(b => b[selectType] === subValue);
                }
            }
            // console.log(`Filtering by [${selectType}]: looking for value "${subValue}". Matches found:`, filtered.length);
            updateBookDisplay(filtered);
        }

        bookSelect.addEventListener('change', (e) => {
            const selectedType = e.target.value;
            const options = subSelectMap[selectedType];

            subSelect.innerHTML = options.map(opt => `<option value="${opt.value}">${opt.text}</option>`).join('');

            subSelect.disabled = (selectedType === 'all');

            filterAndDisplay();
        });

        subSelect.addEventListener('change', filterAndDisplay);

        updateBookDisplay(books);

    } catch (error) {
        console.error('Failed to load books data:', error);
    }
}
