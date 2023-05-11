var list_id_movies = []
var list_id_series = []

// Links para a solicitação de filmes
const url_popularity_movie = 'https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/'
const url_a = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/Adventure/';

// Links para a solicitação de series
const url_popularity_serie = 'https://moviesminidatabase.p.rapidapi.com/series/order/byPopularity/';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0fd5447a28msh42203914a5903d6p1fea35jsn3f7192f33dff',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
};


// Coleta os dados de cada filme ou série com base na lista de ids list_id
async function print_movies(url_movies) {
    try {
        const response = await fetch(url_movies, options);
        const result = await response.json();

        const id = result.results.imdb_id
        const titulo = result.results.title
        const img = result.results.image_url
        const trailer = result.results.trailer
        const classificacao = result.results.rating
        const duracao = result.results.movie_length
        const sinopse = result.results.description
        const ano = result.results.year
        const tipo = result.results.type

        document.getElementById('conteudo').innerHTML += `<ul id="${id}"><li><img src='${img}'><p>${titulo}</p></li></ul>`

    } catch (error) {
        console.error(error);
    }
}



// Filtra os ids para realizar coleta dos dados de cada filme ou série
async function id_movies(url, list_id) {
    try {
        const response = await fetch(url, options)
        const result = await response.json()

        result.results.map((results) => {

            const id = results.imdb_id
            list_id.push(id)

        })


        // Varre a lista a lista de ids e busca o filme ou série
        for (var i = 1; i <= list_id.length; i++) {
            try{
                print_movies(`https://moviesminidatabase.p.rapidapi.com/movie/id/${list_id[i - 1]}/`)
            }catch(err){
                
            }

        }


    } catch (error) {
        console.error(error);
    }
}


// Filtra os ids para realizar coleta dos dados de cada filme ou série
async function id_series(url, list_id) {
    try {
        const response = await fetch(url, options)
        const result = await response.json()

        result.results.map((results) => {

            const id = results.imdb_id
            list_id.push(id)

        })

        // Varre a lista a lista de ids e busca o filme ou série
        for (var i = 1; i <= list_id.length; i++) {
            try{
                print_movies(`https://moviesminidatabase.p.rapidapi.com/series/id/${list_id[i - 1]}/`)
            }catch(err){

            }

        }

    } catch (error) {
        console.error(error);
    }
}


id_movies(url_popularity_movie, list_id_movies)

id_series(url_popularity_serie, list_id_series)