# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>


## CT-01 - Visualizar o Catálogo de Filmes e Séries

### Roteiro:

- Executar o arquivo “Index.html”
- Visualizar a página principal

### Critérios de Êxito:

- Cada item do catálogo deve exibir sua respectiva capa, título e nota de avaliação - *Critério Atendido*
- O catálogo deve está ordenado de maneira correta - *Critério Atendido*
- Exibir animação de destaque ao passar o mouse - *Critério Atendido*
<br>

## CT-02 - Funcionamento do Carrossel

### Roteiro:

- Executar o arquivo “Index.html”
- Visualizar o carrossel na página principal

### Critérios de Êxito:

- O carrossel deve ser exibido no topo do conteúdo - *Critério Atendido*
- Mostrar os filmes mais populares automaticamente - *Critério Atendido*
 <br>
 
## CT-03 - Funcionamento da barra de pesquisa

### Roteiro:

- Executar o arquivo “Index.html”
- Clicar na barra de pesquisa
- Digitar o nome do filme ou série desejada
- Clicar no filme ou série apresentado na pesquisa

### Critérios de Êxito:

- Apresentar o filme ou série pesquisado - *Critério Atendido*
- Acessar a página do filme ao clicar na opção desejada - *Critério Atendido*
<br>

## CT-04 - Funcionamento da tela de cadastro

### Roteiro:

- Executar o arquivo “Index.html”
- Clicar em ‘cadastrar’ ou em ‘primeiro acesso’ na tela de login
- Preencher os campos com as informações solicitadas
- Clicar no botão ‘Criar’, para criar um novo usuário

### Critérios de Êxito:

- O botão ‘Cadastrar’ deverá exibir a página de cadastro de usuário - *Critério Atendido*
- Os campos de entrada do formulário deverá ser preenchido e apresentar um alerta caso esteja faltando algum campo vazio - *Critério Atendido*
- Deverá exibir um alerta caso a senha digitada não tenha no mínimo 4 caracteres - *Critério Atendido*
- O usuário não poderá cadastrar caso os campos 'senha' e 'confirmar senha' não estejam coerentes - *Critério Atendido*
- Exibir alerta ao efetuar o cadastro com êxito - *Critério Atendido*
<br>

## CT-05 - Funcionamento da tela de login

### Roteiro:

- Executar o arquivo “Index.html”
- Clicar em ‘Entrar’ na barra superior
- Preencher os campos de e-mail e senha necessários
- Clicar no botão ‘Entrar’ dentro da tela de login, para acessar o usuário registrado

### Critérios de Êxito:

- Botão ‘Entrar’ deverá exibir a página de login de usuário - *Critério Atendido*
- Os campos de formulário deverão apresentar um alerta caso estejam vazios, contendo divergência nos dados ou com informações não cadastradas no sistema - *Critério Atendido*
- Exibir alerta ao efetuar o login com êxito - *Critério Atendido*
<br>

## CT-06 - Exibição de informações específicas de cada obra

### Roteiro:

- Executar o arquivo “Index.html”
- Clicar no filme desejado

### Critérios de Êxito:

- Deverá exibir as informações de duração, ano de estreia, tipo, sinopse, gênero e trailer do filme escolhido - *Critério Atendido*
- Informações deverão estar bem apresentadas - *Critério Atendido*
<br>

## CT-07 - Avaliar os filmes dando a nota por estrelas

### Roteiro:

- Executar o arquivo “Index.html”
- Efetuar login na plataforma
- Clicar no filme desejado
- Escolher a nota que será avaliado o filme

### Critérios de Êxito:

- O usuário deverá conseguir escolher a quantidade de estrelas desejada - *Critério Atendido*
- As estrelas deverão ser exibidas no comentário feito - *Critério Atendido*
<br>

## CT-08 - Funcionamento do comentário ao digitar e enviar

### Roteiro:

- Executar o arquivo “Index.html”
- Efetuar login na plataforma
- Clicar no filme desejado
- Preencher o campo 'Novo comentário'
- Clicar no botão 'comentar'

### Critérios de Êxito:

- O campo deverá permitir a entrada de texto do usuário - *Critério Atendido*
- O campo deverá permitir no máximo 300 caracteres - *Critério Atendido*
- O site deve exibir um alerta caso o campo de comentário esteja vazio na hora de comentar - *Critério Atendido*
- O campo deverá limpar ao enviar o comentário - *Critério Atendido*
- Exibir o comentário publicado abaixo - *Critério Atendido*
<br>

## CT-09 - Funcionamento da filtragem por tipo

### Roteiro:

- Executar o arquivo “Index.html”
- Clicar no botão 'Filmes' ou 'Séries'

### Critérios de Êxito:

- Deverá ficar destacado quando selecionado a opção desejada - *Critério Atendido*
- Não poderá selecionar as duas opções ao mesmo tempo, tirando o destaque de uma ao selecionar a outra - *Critério Atendido*
- Deverá exibir somente o conteúdo da opção desejada - *Critério Atendido*
<br>

## CT-10 - Funcionamento da filtragem por gênero

### Roteiro:

- Executar o arquivo “Index.html”
- Clicar na opção de gênero ‘Ação’ na barra lateral

### Critérios de Êxito:

- Deverá ficar destacado quando selecionado a opção desejada - *Critério Atendido*
- Não poderá selecionar mais de uma opção ao mesmo tempo, tirando o destaque de uma ao selecionar a outra - *Critério Atendido*
- Deverá exibir somente o conteúdo da opção desejada - *Critério Atendido*
<br>

## CT-11 - Responsividade

### Roteiro:

- Executar o arquivo “Index.html” em diferentes dispositivos
- Variar o tamanho da janela do navegador

### Critérios de Êxito:

- O site deve apresentar a distribuição de seus elementos de forma correta independente da forma como o navegador é exibido - *Critério Não Atendido*

**Observações (CT-11):** 
- Os elementos do site ainda não correspondem corretamente de acordo com a variação da proporção da aba do site.
