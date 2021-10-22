# ProjetoMarvel

### Estrutura do APP:
### FrontEnd - Angular CLI | BackEnd - NodeJS | Banco De dados - MongoDB | Docker
##### APP é feito com FrontEnd e BackEnd separados.



## Vamos Iniciar o Projeto

#### Criei o projeto com node na versão v12.22.5

#### Primeiro vamos instalar o Angular CLi na maquina
##### => npm install -g @angular/cli

Apôs a instalação do Angular proximo passo é gerar a pasta node_modules 
#### FrontEnd => npm install express -save

Apôs gerar a pasta node_modules, vamos gerar ela tambem para o backEnd
#### BackEnd => npm i

## Vamos colocar para rodar o nosso projeto

Primeiro vamos rodar o BackEnd. O BackEnd tem duas opções para poder executar, a primeira para rodar nativo na maquina e a segunda opção e no modo de container no docker.

Primeiro rodar o backend no modo nativo só bastar rodar:

#### => yarn start ou npm start

A Segunda opção é rodar o docker-Composer, e para rodar ele é bem simples
na pasta inicial do projeto atraves do terminal vamos rodar o seguinte comando:

#### => make up

Este comando vai criar as imagens do MongoDB e NodeJS.

Depois do backEnd rodando tudo certinho, vamos rodar o frontEnd, vai para dentro da pasta frontEnd/ vamos rodar o seguinte comando.

#### => ng server

#### Apôs a inicialização do projeto, se tudo rodou sem nenhum erro, é só digitar o link para ter acesso ao projeto.
## Link para entrar no FrontEnd => http://localhost:4200/
<img src="https://github.com/mikaelangelo12/meuPet/blob/master/projetoMavelCAPA.png?raw=true">

### é um projeto criado com SPA, onde neste projeto consegue, acessa todas as paginas sem precisar fazer recargar de nenhuma pagina ou post.
### Este projeto tem um sistema de rotas onde cada post é acessado pela sua ID, EX: http://localhost:4200/comics/222

### A rota dos posts é criada no arquivo routing.module.ts, onde cada pagina tem sua propria routing, desta forma consegue te acesso a cada post de forma dinamica
### É bem simples a forma que funciona as rotas de posts:

#### const comicsRoutes: Routes = [
####   { path: 'Comics', redirectTo: '/comics' },
####   { path: 'Comic/:id', redirectTo: '/comic/:id' },
####   { path: 'comics',  component: ComicsComponent},
####   { path: 'comic/:id', component: ComicsDetalhesComponent }
#### ];

### Quando é clicado em um post é rotacionado para a pagina de posts, confira.
<img src="https://github.com/mikaelangelo12/meuPet/blob/master/projetoMavelpost.png?raw=true">

#### A pagina de cadastro de Quadrinhos onde é preenchida os dados, depois enviados como post para o BackEnd, onde ele irá salvar os dados no banco de dados.
<img src="https://github.com/mikaelangelo12/meuPet/blob/master/projetoMavelcadastro.png?raw=true">

#### Apôs o cadastro é feito, os dados ira para pagina Meus Quadrinhos.
<img src="https://github.com/mikaelangelo12/meuPet/blob/master/projetoMavelmeusQUadrinhos.png?raw=true">
#### O FrontEnd está consulmindo ApiRest que foi criada com NodeJS cada pagina tem uma API Propria, puxando dados atraves do arquivo service.ts, onde cada pagina tem sua propria service para poder consulmir os dados do BackEnd de forma independente o link para acessa api, basta dar um get no link http://localhost:3030/api/events,
#### Confira o que será retornado quando dar um get atraves do link
<img src="https://github.com/mikaelangelo12/meuPet/blob/master/apiMarvel.png?raw=true">





