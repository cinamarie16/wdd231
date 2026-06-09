export function saveTextarea() {
    const form = document.getElementById('form');
    const textarea = document.getElementById('comments');
    const storageKey = 'textarea_draft';

    textarea.addEventListener('input', () => {
        localStorage.setItem(storageKey, textarea.value);
    });

    window.addEventListener('DOMContentLoaded', () => {
        const savedText = localStorage.getItem(storageKey);
        if (savedText) {
            textarea.value = savedText;
        }
    });

    form.addEventListener('submit', () => {
        localStorage.removeItem(storageKey);
    });
}

