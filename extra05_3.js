// Mostrar os livros do autor Augusto Cury

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

function livrosDeAugustoCury(booksByCategory) {
    console.log('Obras de Augusto Cury:');
    for (var i = 0; i < booksByCategory.length; i++) {
        for (var j = 0; j < booksByCategory[i].books.length; j++){
            if (booksByCategory[i].books[j].author == 'Augusto Cury') {
                console.log(booksByCategory[i].books[j].title);
            }
        }
    }
}

livrosDeAugustoCury(booksByCategory)
