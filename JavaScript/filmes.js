var lista_de_id_filmes = []
var list_id_series = []

// Links para a solicitação de filmes
const url_popularity_movie = 'https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/'

// Links para a solicitação de series
const url_popularity_serie = 'https://moviesminidatabase.p.rapidapi.com/series/order/byPopularity/';


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0fd5447a28msh42203914a5903d6p1fea35jsn3f7192f33dff',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
};


function carrousel(home){
    if(home == 1){
    document.getElementById('testando').innerHTML = `
                <div class="slideshow-container">
                    <div class="mySlides fade">
                        <img src="https://i.pinimg.com/originals/ed/95/68/ed9568bd70d70d69fabdd0f07c39e840.jpg" style="width: 100%">
                        <div class="text">The white shadow</div>
                    </div>
                    <div class="mySlides fade">
                        <img src="https://vignette.wikia.nocookie.net/x-men/images/f/f1/Wnxwall_1280.jpg/revision/latest?cb=20081227203256" style="width: 100%">
                        <div class="caption text">Wolverine and the x-men</div>
                    </div>
                    <div class="mySlides fade">
                        <img src="https://image.chilimovie.com/public/1280px/20200507/Abxd55CoyX4yKat0nekwmIpQOso.jpg" style="width: 100%">
                        <div class="caption text">Tron uprising</div>
                    </div>
                </div>
                <br>
                <div style="text-align: center">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
            </div>
            `}else{document.getElementById('testando').innerHTML = ''}
}



// Coleta os dados de cada filme ou série com base na lista de ids list_id
async function print_midia(url_movies, home='') {

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
        const genero = result.results.gen

        const id_e_tipo_filme = `${id} ${tipo}`

       
        const responses = await fetch(img)
        if (responses.status != 404) {


            console.log('testando')
            

            document.getElementById('conteudo').innerHTML += `
            
            <ul id="${id_e_tipo_filme}" onclick="detalhes_filme(this.id)">
                <div class="classificacao">
                    <h1>${classificacao}</h1>
                </div>
                <li><img src='${img}'><p>${titulo}</p></li>
            </ul>
            `
        }

    } catch (error) {
        console.error(error);
    }
}


async function pagina_filmes(url){
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const id = result.results.imdb_id
        const titulo = result.results.title
        const img = result.results.image_url
        const trailer = result.results.trailer
        const classificacao = result.results.rating
        const duracao = result.results.movie_length
        const sinopse = result.results.description
        var ano = result.results.year
        const tipo = result.results.type
        const genero = result.results.gen

        if(ano == undefined){
            ano = result.results.start_year
        }
        
        const id_e_tipo_filme = `${id} ${tipo}`

        const responses = await fetch(img)
        if (responses.status != 404) {

            
            document.getElementById('conteudo').innerHTML += `
            <div id='teste'></div>
            `
            function genero_f(){
                for(i = 1; i<= genero.length; i++){ 
                    document.getElementById('genero').innerHTML += `
                        <li><p>${genero[i - 1].genre}</p></li>
                        `
                }
            }


            document.getElementById('teste').innerHTML += `

            <ul id="${id_e_tipo_filme}" onclick="detalhes_filme(this.id)" class="filme">
                <li><img src='${img}'><p id="titulo">${titulo}</p></li>
            </ul>
            `


            document.getElementById('teste').innerHTML += `
                <h2>Sinopse:</h2>

                <div class="classificacao">
                    <h1>${classificacao}</h1>
                </div>

                <div class="sinopse">
                    <p>${sinopse}</p>
                </div>

                <ul id="genero">
                </ul>

                <div class='informacoes'>
                    <ul>
                        <li><p><strong>Duração:</strong> ${duracao}mn<p></li>
                        <li><p><strong>Ano:</strong> ${ano}<p></li>
                        <li><p><strong>Tipo:</strong> ${tipo}<p></li>
                        <li><p><p><strong>Generos:</strong><p></li>
                    </ul>
                </div>

                <iframe width="340" height="200" src="${trailer}" frameborder="0">
                </<iframe>
                
            `
            genero_f()

        }

    } catch (error) {
        console.error(error);
    }
}



// Filtra os ids para realizar coleta dos dados de cada filme ou série
async function id_movies(url, list_id, home='') {
    try {
        const response = await fetch(url, options)
        const result = await response.json()

        result.results.map((results) => {

            const id = results.imdb_id
            list_id.push(id)
        })

        // Varre a lista a lista de ids e busca o filme ou série
        lista_de_id_filmes = []
        for (var i = 1; i <= list_id.length; i++) {
            print_midia(`https://moviesminidatabase.p.rapidapi.com/movie/id/${list_id[i - 1]}/`, home)
        }

    } catch (error) {
        console.error(error);
    }
}


// Filtra os ids para realizar coleta dos dados de cada filme ou série
async function id_series(url, list_id, home='') {
    try {
        const response = await fetch(url, options)
        const result = await response.json()

        result.results.map((results) => {

            const id = results.imdb_id
            list_id.push(id)

        })

        // Varre a lista a lista de ids e busca o filme ou série
        list_id_series = []
        for (var i = 1; i <= list_id.length; i++) {

            print_midia(`https://moviesminidatabase.p.rapidapi.com/series/id/${list_id[i - 1]}/`, home)

        }

    } catch (error) {
        console.error(error);
    }
}


function limpar() {
    conteudo.innerHTML = ''
}

// Printando filme clicado para informações
function detalhes_filme(id){
    limpar()
    id_e_tipo_filme = id.split(' ')
    tipo_filme = id_e_tipo_filme[1]

    if(tipo_filme === 'series'){
        carrousel(0)
        pagina_filmes(`https://moviesminidatabase.p.rapidapi.com/series/id/${id_e_tipo_filme[0]}/`)
    
    }else{
        carrousel(0)
        pagina_filmes(`https://moviesminidatabase.p.rapidapi.com/movie/id/${id_e_tipo_filme[0]}/`)
    }
    
}



const conteudo = document.getElementById('conteudo')

// Função para requisitar os filmes
function printar_conteudos(funcao, url, lista, home='') {

    if (conteudo.childNodes.length === 0) {
        funcao(url, lista, home)
    }
}


id_series(url_popularity_serie, list_id_series)
id_movies(url_popularity_movie, lista_de_id_filmes)
carrousel(1)


//Carrousel

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); 
}
