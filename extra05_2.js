// Contar o número de autores

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

function numeroDeAutores(booksByCategory) {
    var numeroDeAutores = 0;
    for (i = 0; i < booksByCategory.length; i++) {
        numeroDeAutores = numeroDeAutores + booksByCategory[i].books.length;
        for (j = 0; j < booksByCategory[i].books.length; j++){
            if (booksByCategory[i].books[j].author.includes(' e ')) {
                numeroDeAutores = numeroDeAutores + 1;
            }
        }
    }
    return numeroDeAutores;
}

var numeroDeAutores = numeroDeAutores(booksByCategory);
console.log('Numero de autores = ' + numeroDeAutores);