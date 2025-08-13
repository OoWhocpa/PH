
document.addEventListener('DOMContentLoaded', function () {
    const commentElements = document.querySelectorAll('.comment');

    // Створюємо об'єкт для зберігання стану кожного коментаря
    const likeState = {};
    const dislikeState = {};

    // Функція для оновлення лайків рандомно кожні 60 секунд
    const updateLikes = () => {
        commentElements.forEach(comment => {
            const likeSpan = comment.querySelector('.likes');
            const currentLikes = parseInt(likeSpan.textContent, 10);
            const randomIncrement = Math.floor(Math.random() * 4) + 3; // Випадкове число від 3 до 6
            likeSpan.textContent = currentLikes + randomIncrement;
        });
    };

    // Виконуємо оновлення кожні 60 секунд (60000 мс)
    setInterval(updateLikes, 60000);

    // Додаємо обробники кліків для лайків і дизлайків
    commentElements.forEach((comment, index) => {
        likeState[index] = false;   // Ініціалізуємо стан як невідмічений для лайків
        dislikeState[index] = false; // Ініціалізуємо стан як невідмічений для дизлайків

        const likeButton = comment.querySelector('.comments__like');
        const dislikeButton = comment.querySelector('.comments__dislike');
        const likeSpan = likeButton.querySelector('.likes');
        const dislikeSpan = dislikeButton.querySelector('.dislikes');

        // Обробник для кнопки "лайк"
        likeButton.addEventListener('click', () => {
            const currentLikes = parseInt(likeSpan.textContent, 10);
            const currentDislikes = parseInt(dislikeSpan.textContent, 10);

            // Якщо натиснуто лайк, але вже є дизлайк — спочатку забираємо дизлайк
            if (!likeState[index] && dislikeState[index]) {
                dislikeSpan.textContent = currentDislikes - 1;
                dislikeState[index] = false;
            }

            // Перевіряємо стан лайку: якщо ще не натиснуто — додаємо, якщо натиснуто — віднімаємо
            if (!likeState[index]) {
                likeSpan.textContent = currentLikes + 1;
                likeState[index] = true; // Позначаємо, що лайк додано
            } else {
                likeSpan.textContent = currentLikes - 1;
                likeState[index] = false; // Позначаємо, що лайк віднято
            }
        });

        // Обробник для кнопки "дизлайк"
        dislikeButton.addEventListener('click', () => {
            const currentLikes = parseInt(likeSpan.textContent, 10);
            const currentDislikes = parseInt(dislikeSpan.textContent, 10);

            // Якщо натиснуто дизлайк, але вже є лайк — спочатку забираємо лайк
            if (!dislikeState[index] && likeState[index]) {
                likeSpan.textContent = currentLikes - 1;
                likeState[index] = false;
            }

            // Перевіряємо стан дизлайку: якщо ще не натиснуто — додаємо, якщо натиснуто — віднімаємо
            if (!dislikeState[index]) {
                dislikeSpan.textContent = currentDislikes + 1;
                dislikeState[index] = true; // Позначаємо, що дизлайк додано
            } else {
                dislikeSpan.textContent = currentDislikes - 1;
                dislikeState[index] = false; // Позначаємо, що дизлайк віднято
            }
        });
    });
});

const { mainBtn, form } = {
    mainBtn: document.querySelector('.main-btn'),
    form: document.querySelector('.clearfix'),
}

mainBtn.addEventListener('click', () => {
    form.classList.toggle('hide')
})
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
    }
});


