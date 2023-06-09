var lista_de_id_filmes = []
var list_id_series = []
var list_id_generos = []
var lista_sugestoes = []


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


//Carrousel
function carrousel(home) {
    if (home == 1) {
        document.getElementById('testando').innerHTML = `
                    <div class="slideshow-container">
                        <div class="mySlides fade">
                            <img src="https://i.pinimg.com/originals/ed/95/68/ed9568bd70d70d69fabdd0f07c39e840.jpg" style="width: 100%">
                            <div class="caption text">The white shadow</div>
                        </div>
                        <div class="mySlides fade">
                            <img src="https://vignette.wikia.nocookie.net/x-men/images/f/f1/Wnxwall_1280.jpg/revision/latest?cb=20081227203256" style="width: 100%">
                            <div class="caption text">Wolverine and the X-men</div>
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
                `
    } else { document.getElementById('testando').innerHTML = '' }
}



// Coleta os dados de cada filme ou série com base na lista de ids list_id
async function print_midia(url_movies, home = '') {
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

        const id_e_tipo_filme = `${id}-${tipo}`

        var cla = classificacao / 2

        const responses = await fetch(img)

        if (responses.status != 404) {
            document.getElementById('estilo').innerHTML += `
            #conteudo #${id_e_tipo_filme} img:hover{
                border: 2px solid #232428;
                filter: opacity(80%);
              }        
            `

            document.getElementById('conteudo').innerHTML += `
            <ul id="${id_e_tipo_filme}" onclick="detalhes_filme(this.id)">
                <div class="classificacao">
                    <h1>${Math.ceil(cla)}</h1>
                </div>    
                <li><img src='${img}'><p>${titulo}</p></li>
            </ul>    
            `
        }
    } catch (error) {
        console.error(error);
    }
}


//Filtragem de filmes e series (TESTANDO)
const barraPesquisa = document.getElementById('pesquisa');

var listados = document.getElementById('listados')
barraPesquisa.addEventListener('input', () => {
    if (barraPesquisa.value != '') {
        listados.classList.add('tt')
        listados.innerHTML = ''
    } else {
        listados.classList.remove('tt')
        listados.innerHTML = ''
    }
})

function limpar_pesquisa() {
    listados.classList.remove('tt')
    barraPesquisa.value = ''
    listados.innerHTML = ''
}

const pesquisando_filmes = async (pesquisa) => {
    try {
        const response = await fetch(url_popularity_movie, options);
        const result = await response.json();

        const response2 = await fetch(url_popularity_serie, options);
        const result2 = await response2.json();

        let resultado = result.results.filter((results) => {
            const regex = new RegExp(`^${pesquisa}`, 'gi');
            return results.title.match(regex);
        });

        let resultado2 = result2.results.filter((results) => {
            const regex = new RegExp(`^${pesquisa}`, 'gi');
            return results.title.match(regex);
        });

        if (pesquisa == 0) {
            resultado = [];
            resultado2 = [];
        }

        saida(resultado, resultado2);
    } catch (error) {
        console.error(error);
    }
};

const saida = async (response, response2) => {

    document.addEventListener('click', () => { limpar_pesquisa() })

    if (response.length > 0 || response2.length > 0) {
        const valor = response.map((result) => {
            document.getElementById('listados').innerHTML += `
            <li id="${result.imdb_id}" onclick="detalhes_filme(this.id), limpar_pesquisa()" ><a>${result.title}</a></li>
            `
        });

        const valor2 = response2.map((result) => {
            document.getElementById('listados').innerHTML += `
            <li id="${result.imdb_id}" onclick="detalhes_filme(this.id), limpar_pesquisa()" ><a>${result.title}</a></li>
            `
        });
    }
};

barraPesquisa.addEventListener('input', () => {
    console.clear();
    pesquisando_filmes(barraPesquisa.value);
});

function star(classificacao){
    cl_coreta = classificacao / 2
    //Impressão das estrelas na classificação
    for (c = 1; c <= Math.ceil(cl_coreta); c++) {
        document.getElementById(`classificacaoid`).innerHTML += `
        <img src="./docs/img/star.png" id="star">
    `}

    for (fc = 1; fc <= 5 - Math.ceil(cl_coreta); fc++) {
        document.getElementById(`classificacaoid`).innerHTML += `
        <img src="./docs/img/star.png" id="star1">
    `}
}


// Página específica de cada filme
var starValue = 0
var n_comentario = []
async function pagina_filmes(url) {
    
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

        if (ano == undefined) {
            ano = result.results.start_year
        }

        const id_e_tipo_filme = `${id}-${tipo}`

        const responses = await fetch(img)

        if (responses.status != 404) {


            document.getElementById('conteudo').innerHTML += `
            <div id='teste'></div>
            `

            function genero_f() {
                for (i = 1; i <= genero.length; i++) {
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

                <div id="classificacaoid">

                </div>
                    
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

                <div class='trailer'>
                    <iframe width="340" height="200" src="${trailer}" frameborder="0">
                    </<iframe> 
                </div>
            `
            star(classificacao)

            //comentário
            document.getElementById('cmt').innerHTML = `
            <div class="comentario">
                <div id="corpo">
                    <section id="geral" class="usuario-avaliacao">
        
                        <div class="imagem-usuario">
                            <img src="docs/img/man.png">
                        </div>
            
                        <div class="rating">
                            <input type="radio" id="star5" name="rating" value="5">
                            <label for="star5"></label>
                            <input type="radio" id="star4" name="rating" value="4">
                            <label for="star4"></label>
                            <input type="radio" id="star3" name="rating" value="3">
                            <label for="star3"></label>
                            <input type="radio" id="star2" name="rating" value="2">
                            <label for="star2"></label>
                            <input type="radio" id="star1" name="rating" value="1">
                            <label for="star1"></label>
                        </div>
                    </section>
                </div>
        
                <section class="conteudo-com">

                    <div class="input-com">
                        <textarea id="novoComentario" maxlength="300" placeholder="Novo Comentário..."></textarea>
                        
                        <div class="btn-com">
                            <button id='${id}' onclick="nComentario(this.id)">Comentar</button>
                        </div>
                    </div>
                </section>
            </div>
            `
            //Estrelas-JS
            const ratingInputs = document.querySelectorAll('input[name="rating"]');
            ratingInputs.forEach(input => {
                input.addEventListener('change', () => {
                    const selectedRating = document.querySelector('input[name="rating"]:checked');
                    starValue = selectedRating.value
                });
            });


            let key = []
            let comentarios = []
            for (var i = 0; i < localStorage.length; i++) {
                let chave = localStorage.key(i)
                let chave_sp = chave.split('-')
                if (chave_sp[1] == id) {
                    key.push(id)
                    comentarios.push([chave_sp])
                    n_comentario.push(id)
                }
            }

            var cont = 0


            if (id == key[0]) {
                comentarios.forEach((comentarios_p) => {
                    cont++
                    document.getElementById('comentado').innerHTML += `
                        <div class="comentario">
                            <div id="corpo">
                                <section id="section_dos_comentarios${cont}" class="usuario-avaliacao">
                    
                                    <div class="imagem-usuario">
                                        <img src="docs/img/man.png">
                                    </div>
                                    
                                    <p>${localStorage.getItem('nome')}</p>

                                </section>
                            </div>
                    
                            <section class="conteudo-com">
                                <textarea maxlength="300" placeholder="0" disabled>${localStorage.getItem(comentarios_p[0].join('-'))}</textarea>
                            </section>
                        </div>
                        `

                    //Impressão das estrelas no comentado
                    for (i = 1; i <= comentarios_p[0][2]; i++) {
                        document.getElementById(`section_dos_comentarios${cont}`).innerHTML += `
                            <div class="rating">
                                <input type="radio" id="star${i}" name="rating" value="${i}">
                                <label for="star${i}"></label>
                            </div>
                    `}

                    for (i = 1; i <= 5 - parseInt(comentarios_p[0][2]); i++) {
                        document.getElementById(`section_dos_comentarios${cont}`).innerHTML += `
                            <div class="rating1">
                                <input type="radio" id="star${i}" name="rating" value="${i}">
                                <label for="star${i}"></label>
                            </div>
                    `}
                    
                })             

            }
            genero_f()
        }

    } catch (error) {
        console.error(error);
    }
}


// Filtra os ids para realizar coleta dos dados de cada filme
async function id_movies(url, list_id, home = '') {
    try {
        const response = await fetch(url, options)
        const result = await response.json()

        result.results.map((results) => {

            const id = results.imdb_id
            const titulo = results.title
            lista_sugestoes.push(titulo)
            list_id.push(id)
        })

        // Varre a lista de ids e busca o filme
        lista_de_id_filmes = []
        for (var i = 1; i <= list_id.length; i++) {
            print_midia(`https://moviesminidatabase.p.rapidapi.com/movie/id/${list_id[i - 1]}/`, home)
        }

    } catch (error) {
        console.error(error);
    }
}


// Filtra os ids para realizar coleta dos dados de cada série
async function id_series(url, list_id, home = '') {
    try {
        const response = await fetch(url, options)
        const result = await response.json()

        result.results.map((results) => {

            const id = results.imdb_id
            const titulo = results.title
            lista_sugestoes.push(titulo)
            list_id.push(id)
        })

        // Varre a lista de ids e busca a série
        list_id_series = []
        for (var i = 1; i <= list_id.length; i++) {

            print_midia(`https://moviesminidatabase.p.rapidapi.com/series/id/${list_id[i - 1]}/`, home)
        }

    } catch (error) {
        console.error(error);
    }
}


// Função de limpar o conteúdo
function limpar(response) {
    conteudo.innerHTML = ''
    cmt.innerHTML = ''
    comentado.innerHTML = ''

}


// Validando Filme ou série do elemento clicado
async function detalhes_filme(id) {
    limpar()
    id_e_tipo_filme = id.split('-')

    carrousel(0)
    pagina_filmes(`https://moviesminidatabase.p.rapidapi.com/movie/id/${id_e_tipo_filme[0]}/`) && pagina_filmes(`https://moviesminidatabase.p.rapidapi.com/series/id/${id_e_tipo_filme[0]}/`)

}

const conteudo = document.getElementById('conteudo')


// Função para requisitar os filmes
function printar_conteudos(funcao, url, lista, home = '') {

    if (conteudo.childNodes.length === 0) {
        funcao(url, lista, home)
    }
}

id_series(url_popularity_serie, list_id_series)
id_movies(url_popularity_movie, lista_de_id_filmes)
carrousel(1)


//Validação para os Gêneros

function validacao_generos(id) {
    localStorage.setItem('tipo', id)
    filmes = document.getElementById('filmesA')
    series = document.getElementById('seriesA')
    home = document.getElementById('homeA')

    if (id == 'filmes') {

        home.classList.remove('click')
        series.classList.remove('click')
        filmes.classList.add('click')

    } else if (id == 'series') {

        home.classList.remove('click')
        filmes.classList.remove('click')
        series.classList.add('click')

    } else if (id == 'home') {

        filmes.classList.remove('click')
        series.classList.remove('click')
        home.classList.add('click')
    }
}


// Função para requisitar os filmes e séries de acordo com o gênero
function printar_generos(genero) {
    tipo = localStorage.getItem('tipo')
    if (tipo == 'filmes') {

        list_id_generos = []
        id_movies(`https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genero}/`, list_id_generos)

    } else if (tipo == 'series') {

        list_id_generos = []
        id_series(`https://moviesminidatabase.p.rapidapi.com/series/byGen/${genero}/`, list_id_generos)

    } else if (tipo == 'home') {

        list_id_generos = []
        id_movies(`https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genero}/`, list_id_generos)
        id_series(`https://moviesminidatabase.p.rapidapi.com/series/byGen/${genero}/`, list_id_generos)
    }
}


//Carrousel-JS
var slideIndex = 0;
showSlides()

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}


//Comentado-JS
var cont = 1

function nComentario(id_filme) {

    cont++
    let comentario = document.getElementById('novoComentario')
    let usuario = document.getElementById('nome')
    let login = document.getElementById('email_login')

    if (comentario.value == '') {
        alert('Digite um comentario')

    } else if (login.value == '') {
        alert('Realize o Log-in!')

    } else {

        localStorage.setItem(`comentario${n_comentario.length + cont}-${id_filme}-${starValue}`, comentario.value, usuario.value)

        novoComentario.value = ''

        document.getElementById('comentado').innerHTML += `
            <div class="comentario">
                <div id="corpo">
                    <section id="section_dos_comentarios${n_comentario.length + cont}" class="usuario-avaliacao">
        
                        <div class="imagem-usuario">
                            <img src="docs/img/man.png">
                        </div>
                        
                        <p>${localStorage.getItem('nome')}</p>

                    </section>
                </div>
        
                <section class="conteudo-com">
                    <textarea maxlength="300" placeholder="0" disabled>${localStorage.getItem(`comentario${n_comentario.length + cont}-${id_filme}-${starValue}`)}</textarea>
                </section>
            </div>
    `

        // Impressão das estrelas no comentado
        for (var i = 1; i <= starValue; i++) {
            document.getElementById(`section_dos_comentarios${n_comentario.length + cont}`).innerHTML += `
        <div class="rating">
            <input type="radio" id="star${i}" name="rating" value="${i}">
            <label for="star${i}"></label>
        </div>
        `}

        for (var i = 1; i <= 5 - starValue; i++) {
            document.getElementById(`section_dos_comentarios${n_comentario.length + cont}`).innerHTML += `
        <div class="rating1">
            <input type="radio" id="star${i}" name="rating" value="${i}">
            <label for="star${i}"></label>
        </div>
        `}

    }
}