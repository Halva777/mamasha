const whalesContainer = document.getElementById('whales-container');

// Функція для створення китів
function createWhale() {
    const whale = document.createElement('img');
    whale.src = 'whale.png'; // Локальне зображення кита
    whale.classList.add('whale');
    
    // Випадкове розташування кита
    whale.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    whale.style.top = Math.random() * (window.innerHeight - 100) + 'px';

    // Додати кита на сторінку
    whalesContainer.appendChild(whale);

    // Додати обробник події для натискання на кита
    whale.onclick = function() {
        whale.classList.add('catch-animation'); // Додати анімацію при ловлі
        setTimeout(() => {
            whale.remove(); // Видалити кита з DOM
        }, 500); // Затримка на анімацію
    };

    // Видалити кита через 5 секунд, якщо його не впіймали
    setTimeout(() => {
        if (whale.parentElement) {
            whale.remove();
        }
    }, 5000);
}

// Створювати 7-8 китів
for (let i = 0; i < 8; i++) {
    createWhale();
}

// Додати нових китів кожні 3 секунди
setInterval(createWhale, 3000);
