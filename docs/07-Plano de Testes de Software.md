# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
* Site publicado na Internet
* Navegador da Internet - Chrome, Firefox ou Edge
* Conectividade de Internet para acesso às plataformas (APISs) 

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

| Caso de Teste | CT-01 - Visualizar o Catálogo de Filmes e Séries |
|---------------|--------------------------------------------------|
| Requisitos Associados | RF-06 - O site deve exibir um catálogo geral de filmes e séries, apresentando o título, nota e a imagem da capa de cada filme |
| Objetivo do Teste | Verificar se o catálogo está sendo carregado e exibido corretamente | 
| Passos | 1 - Executar o arquivo “Index.html” <br> 2 - Visualizar a página principal |
| Critérios de Êxito | * Cada item do catálogo deve exibir sua respectiva capa, título e nota de avaliação <br> * O catálogo deve está ordenado de maneira correta <br> * Exibir animação de destaque ao passar o mouse |

<br>

| Caso de Teste | CT-02 - Funcionamento do Carrossel |
|---------------|--------------------------------------------------|
| Requisitos Associados | RF-07 - O site deve apresentar um carrossel com filmes mais relevantes do momento |
| Objetivo do Teste | Verificar a presença e o funcionamento do carrossel | 
| Passos | 1 - Executar o arquivo “Index.html” <br> 2 - Visualizar o carrossel na página principal |
| Critérios de Êxito | * O carrossel deve ser exibido no topo do conteúdo <br> * Mostrar os filmes mais populares automaticamente |

<br>

| Caso de Teste | CT-03 - Funcionamento da barra de pesquisa |
|---------------|--------------------------------------------------|
| Requisitos Associados | RF-10 - O site de conter uma barra de pesquisa |
| Objetivo do Teste | Pesquisar os filmes ou séries por nome |
| Passos | 1 - Executar o arquivo “Index.html” <br> 2 - Clicar na barra de pesquisa <br> 3 - Digitar o nome do filme ou série desejada <br> 4 - Clicar no filme ou série apresentado na pesquisa |
| Critérios de Êxito | * Apresentar o filme ou série pesquisado <br> * Acessar a página do filme ao clicar na opção desejada |

<br>

| Caso de Teste | CT-04 - Funcionamento da tela de cadastro |
|---------------|--------------------------------------------------|
| Requisitos Associados | RF-04 - O site deve conter um sistema de cadastro e login |
| Objetivo do Teste | Criar o cadastro do novo usuário da plataforma |
| Passos | 1 - Executar o arquivo “Index.html” <br> 2 - Clicar em ‘cadastrar’ ou em ‘primeiro acesso’ na tela de login <br> 3 - Preencher os campos com as informações solicitadas <br> 4 - Clicar no botão ‘Criar’, para criar um novo usuário |
| Critérios de Êxito | * O botão ‘Cadastrar’ deverá exibir a página de cadastro de usuário <br> * Os campos de entrada do formulário deverá ser preenchido e apresentar um alerta caso esteja faltando algum campo vazio <br> * Deverá exibir um alerta caso a senha digitada não tenha no mínimo 4 caracteres <br> * O usuário não poderá cadastrar caso os campos 'senha' e 'confirmar senha' não estejam coerentes <br> * Exibir alerta ao efetuar o cadastro com êxito |

<br>

| Caso de Teste | CT-05 - Funcionamento da tela de login |
|---------------|--------------------------------------------------|
| Requisitos Associados | RF-04 - O site deve conter um sistema de cadastro e login |
| Objetivo do Teste | Acessar a plataforma com as informações do usuário cadastrado |
| Passos | 1- Executar o arquivo “Index.html” <br> 2 - Clicar em ‘Entrar’ na barra superior <br> 3 - Preencher os campos de e-mail e senha necessários <br> 4 - Clicar no botão ‘Entrar’ dentro da tela de login, para acessar o usuário registrado |
| Critérios de Êxito | * Botão ‘Entrar’ deverá exibir a página de login de usuário <br> * Os campos de formulário deverão apresentar um alerta caso estejam vazios, contendo divergência nos dados ou com informações não cadastradas no sistema <br> * Exibir alerta ao efetuar o login com êxito |

<br>

| Caso de Teste | CT-06 - Exibição de informações específicas de cada obra |
|---------------|--------------------------------------------------|
| Requisitos Associados | RF-05 - O site deve exibir informações sobre o filme ou série, como duração, ano de estreia, tipo, sinopse, gênero e trailer |
| Objetivo do Teste | Exibir as informações da obra em suas páginas específicas |
| Passos | 1 - Executar o arquivo “Index.html” <br> 2 - Clicar no filme desejado |
| Critérios de Êxito | * Deverá exibir as informações de duração, ano de estreia, tipo, sinopse, gênero e trailer do filme escolhido <br> * Informações deverão estar bem apresentadas |

<br>

| Caso de Teste | CT-07 - Avaliar os filmes dando a nota por estrelas |
|---------------|--------------------------------------------------|
| Requisitos Associados | RF-01 - O site deve conter um sistema de avaliação por estrelas |
| Objetivo do Teste | Avaliar os filmes com sistema de nota por estrelas |
| Passos | 1 - Executar o arquivo “Index.html” <br> 2 - Efetuar login na plataforma <br> 3 - Clicar no filme desejado <br> 4 - Escolher a nota que será avaliado o filme |
| Critérios de Êxito | * O usuário deverá conseguir escolher a quantidade de estrelas desejada <br> * As estrelas deverão ser exibidas no comentário feito |

<br>

| Caso de Teste | CT-08 - Funcionamento do comentário ao digitar e enviar |
|---------------|--------------------------------------------------|
| Requisitos Associados | RF-02 - O site deve conter um campo para comentário dos usuários |
| Objetivo do Teste | Comentar avaliação e críticas sobre o filme ou série |
| Passos | 1 - Executar o arquivo “Index.html” <br> 2 - Efetuar login na plataforma <br> 3 - Clicar no filme desejado <br> 4 - Preencher o campo 'Novo comentário' <br> 5 - Clicar no botão 'comentar'|
| Critérios de Êxito | * O campo deverá permitir a entrada de texto do usuário <br> * O campo deverá permitir no máximo 300 caracteres <br> * O site deve exibir um alerta caso o campo de comentário esteja vazio na hora de comentar <br> * O campo deverá limpar ao enviar o comentário <br> * Exibir o comentário publicado abaixo |

<br>

| Caso de Teste | CT-09 - Funcionamento da filtragem por tipo |
|---------------|--------------------------------------------------|
| Requisitos Associados | RF-03 - O site deve conter um mecanismo de filtragem por filmes, séries e gêneros |
| Objetivo do Teste | Filtrar o conteúdo por filmes ou séries |
| Passos | 1 - Executar o arquivo “Index.html” <br> 2 - Clicar no botão 'Filmes' ou 'Séries' |
| Critérios de Êxito | * Deverá ficar destacado quando selecionado a opção desejada <br> * Não poderá selecionar as duas opções ao mesmo tempo, tirando o destaque de uma ao selecionar a outra <br> * Deverá exibir somente o conteúdo da opção desejada |

<br>

| Caso de Teste | CT-10 - Funcionamento da filtragem por gênero |
|---------------|--------------------------------------------------|
| Requisitos Associados | RF-03 - O site deve conter um mecanismo de filtragem por filmes, séries e gêneros |
| Objetivo do Teste | Filtrar o conteúdo pelos gêneros apresentados na página |
| Passos | 1 - Executar o arquivo “Index.html” <br> 2 - Clicar em uma das opções de gênero na barra lateral |
| Critérios de Êxito | * Deverá ficar destacado quando selecionado a opção desejada <br> * Não poderá selecionar mais de uma opção ao mesmo tempo, tirando o destaque de uma ao selecionar a outra <br> * Deverá exibir somente o conteúdo da opção desejada |

<br>

| Caso de Teste | CT-11 - Responsividade |
|---------------|--------------------------------------------------|
| Requisitos Associados | RNF-01 - O site deverá ser responsivo permitindo a visualização em diferentes dispositivos de forma adequada |
| Objetivo do Teste | Verificar se o site se encontra responsivo |
| Passos | 1 - Executar o arquivo “Index.html” em diferentes dispositivos <br> 2 - Variar o tamanho da janela do navegador |
| Critérios de Êxito | * O site deve apresentar a distribuição de seus elementos de forma correta independente da forma como o navegador é exibido |
