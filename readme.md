JavaScript

Iniciar o NODE (servidor) ->
npm init -y

Instalar o Express e EJS ->
npm install express
npm install ejs

criar pasta src
arquivo server.js

configuirar server.js ->
require = ("express")
server = express()
server.listen (3000, ()=> console.log)

criar arquivo route ->
require = ("express")
route = express.Router()
module.exports = route

route.get("/", (req, res) => res.render(index))

importar route no server ->
server.user(route)

criar scripts no package json que inicia o servidor

configura o view engine EJS no server.js ->
server.set("view engine", "ejs")

por a pasta views dentro de src -> com o módulo require = ("path")
server.set("views", path.join(\_\_dirname, "views") )

ORGANIZAR AS PASTAS
criar diretório public fora de src

configura no server.use(express.static("public"))

instalar o nodemon -> npm install nodemon -D
para reload do terminal do servidor toda vez que salvar.

crifugurar o script start nodemon . + o arquivo direcionado no main

configurar novas rotas para todos os aqruivos

configurar <script no html como defer type="module"></script>
imports e exports como module.

configurar modal no script

action do form

criar camada controllers dentro de src ->
que é a regra de negócio

importar o controllers na route

configurar antes da route no server.js o Middleware para poder receber dados do formulário

para incluir partes EJS
criar pastta em views parts

no aqruivo que recebe o <%- include("parts/enter-room") %>
colocar a part em variável res.render("index", {page: "enter-room"}))

configura na rota para renderizar o index e a route

mudar o include para template string e adcionar a variável <%- %>

reparo de código AULA 4 2h34min -> erro de leitura de aqruivos
solução: colocar "/" antes de todos os caminhos de arquivos

npm install sqlite
npm install sqlite 3

criar pasta no src db e configurar o arquivo config.js

no config.js
const sqlite3 require ("sqlite3")
const { open } require ("sqlite")

module.exports = () => { open({ filename: "./src/db/rocketq.sqlite", driver: sqlite3.Database});}

obs: passar os dados em linguagem SQL.

- iniciar o arquivo init.js para criar as tabelas

---

no arquivo init.js const Database = require("./config")

const initDb = {
async init() {
const db = await Database()

    await db.exec()

}
}

initDb.init

---

inserir no db.exec("código SQL para criar as tabelas")

configuras novo script "init-bd" pra rodas o arquivo init

rodar script com npm run init-db no terminal

cuidado ao criar coluna com nome reservado no sqlite

configurar room-controller create insert into.
db.run com a variável inportando o DB .run para inserir dados na tabela.

recape: tudo para EJS, criação de Server, route, db, controller, criarção de numero da sala e recebimento de senha.

---

AULA 5 Mission Discover

---

verificar se o numero da sala já existe no DB.
db.all (SELECT) recebendo em uma const array. antes do INSERT

veficar com o some o metodo de array roomExistIds.some. se a condição é verdadeira ou falsa.
o primeiro que for igual retorna TRUE

deixar o número da sal dinâmico no HTML.

configuração do room-controller.

---

iniciar configuração question-controller. AULA 5 aos 18m.

---

configurar a criação da pergunta.

verificar o que é enviado pelo form e recebido no controller e enviado para o DB.
tipagem de variáve de campo.

quando o room-controller open tem que renderizar as questoes salvas do DB ou verificar se as questoes estao vazias e renderizar uma sugestão.

room-controller.open para renderizar as questions read na estrutuora ejs foreach no plural depois no singular <%%> e <%=%>

configurar perguntas lidas.

configurar no foreach das perguntas o data-id com a notação ejs <%= question.id %>
