document.addEventListener('DOMContentLoaded', function() {
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');

    // Функция для запроса случайной цитаты
    function fetchQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                quoteText.textContent = `"${data.content}"`;
                authorText.textContent = `— ${data.author}`;
            })
            .catch(error => {
                quoteText.textContent = 'Oops! Failed to fetch a new quote.';
                authorText.textContent = '';
                console.error('Error fetching the quote:', error);
            });
    }

    // Загрузка цитаты при загрузке страницы
    fetchQuote();

    // Обновление цитаты при нажатии на кнопку
    newQuoteButton.addEventListener('click', fetchQuote);
});
