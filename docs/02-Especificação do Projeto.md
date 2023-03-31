# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feito pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. 

Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários. 

## Personas
As personas levantadas durante o processo de entendimento do problema são apresentadas a seguir: 

Luciana Alencar 

Luciana é uma mulher de 50 anos que trabalha há 8 anos em uma franquia de escolas de idioma, onde exerce a função de secretária, mas também trabalhou no setor financeiro. Ela gosta da sua área e acredita estar no lugar certo. Porém, Luciana recentemente ingressou em um curso sobre terapia e descobriu um novo amor por outra profissão, onde se sente feliz e acredita ser uma opção que pode fazê-la sair do atual emprego para buscar novos ares.  

Ela passa seu tempo no Instagram, WhatsApp e no Facebook, e um de seus hobbies é assistir filmes e séries em plataformas de streaming. Porém ela tem algumas frustrações com os sites de streaming por muitas vezes não conter locais para comentários, acesso a quantidade de pessoas que indicam tal filme e ter pouco acervo de opções nas plataformas. 


Junior Lucarios 

Junior é um homem de 22 anos que há 2 anos trabalha como assessor de vendas em uma loja de colchões no shopping, para ganhar dinheiro para o seu intercâmbio de inglês no Reino Unido. Junior tem uma forte paixão pela área de engenharia de bioprocessos, curso que realiza em sua cidade. Porém, para se destacar, Junior precisa de um bom nível de inglês para conseguir um estágio, e enquanto não consegue o dinheiro para as viagens. Junior utiliza bastante o Instagram, Reddit e Youtube, e assiste filmes e séries para treinar seu inglês. Todavia, ele encontra-se frustrado por não encontrar comentários dizendo se o conteúdo que está assistindo é relevante para ajudá-lo em sua jornada de aprendizado. 


Fábio Cardoso 

Fábio é um adolescente de 17 anos que estuda em um colégio público no interior do estado e faz cursinho para prestar exames de admissão na faculdade. Com uma rotina intensa de estudos, ele se mantém informado das questões atuais utilizando redes sociais e aplicativos como o Discord, Instagram, OneFootball e TikTok enquanto está se deslocando no ônibus, e ainda pratica futebol à noite depois das aulas.  

Nos últimos tempos, ele vem se preocupando com sua indecisão para escolher sua carreira, então decidiu assistir alguns filmes e documentários relacionados a algumas profissões para descobrir do que realmente gosta. Desde então, ele vem fazendo buscas por obras cinematográficas que representam essas profissões da forma mais realista possível. 

 
Cristóvão Goulart 

Cristóvão é um homem de 32 anos e trabalha como gestor de tráfego há cerca de 10 anos. Ele ingressou na carreira do mercado digital aos 20 anos e logo 2 anos depois virou gestor de tráfego, conseguindo um bom destaque ao entrar em uma empresa na qual está junto dela até os dias de hoje.  

Seus hobbies incluem esportes ao ar livre, navegar no Facebook, LinkedIn, Instagram, e ficar tranquilo em casa assistindo filmes e séries. 

Cristóvão se baseia no número de avaliações sobre aquela produção cinematográfica para decidir se irá assistir. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Luciana Alencar     | Ter acesso a maiores quantidades de análises (Filmes e séries)         | Saber se o que vou assistir poderá me agradar                |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
