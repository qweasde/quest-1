const audioBtn = document.querySelector('.audio-btn');
const audio = document.getElementById('voice-audio');

audioBtn.addEventListener('click', () => {
    audio.play();
});


// блоки
const helloBlock = document.querySelector('.quest-block-hello');
const quizBlock = document.querySelector('.quest-block-quiz');
const readyBtn = document.querySelector('.ready-btn button');

// кнопка "Я готова" показывает квиз
readyBtn.addEventListener('click', (e) => {
    e.preventDefault(); // запрещаем отправку формы
    helloBlock.style.display = 'none';
    quizBlock.style.display = 'block';
});

// отправка квиза
const quizSubmitBtn = document.getElementById('quiz-submit');
const quizOverlay = document.querySelector('.quiz-overlay');
const closePopupBtn = document.querySelector('.close-popup');

quizSubmitBtn.addEventListener('click', () => {
    quizOverlay.style.display = 'flex'; // показываем оверлей с попапом
});

closePopupBtn.addEventListener('click', () => {
    quizOverlay.style.display = 'none'; // скрываем оверлей и попап
});