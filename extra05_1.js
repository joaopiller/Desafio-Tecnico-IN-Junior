//Contar o número de categorias e o número de livros em cada categoria

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

numeroDeCategorias = booksByCategory.length
console.log('Número de categorias: ' + numeroDeCategorias + '.')

var categoria
var numeroDeLivros
for (i = 0; i < booksByCategory.length; i++) {
    categoria = booksByCategory[i].category
    numeroDeLivros = booksByCategory[i].books.length
    console.log(categoria + ': ' + numeroDeLivros + ' livros.')
}