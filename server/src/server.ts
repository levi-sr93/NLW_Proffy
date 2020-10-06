import express from 'express';

const app = express();

app.use(express.json()); //permitir que o Express utilize JSON

//ROUTES
//http://localhost:3333/users
//http://localhost:3333/contacts

//RESOURCES
// /users
// /contacts

//HTTP METHODS
//GET - BUSCAR OU LISTAR INFORMAÇÕES (PADRÃO DO NAVEGADOR)
//POST - CRIAR ALGUMA NOVA INFORMAÇÃO
//PUT  - ATUALIZAR UMA INFORMAÇÃO EXISTENTE
//DELETE - DELETAR UMA INFORMAÇÃO EXISTENTE

//Request Body - Dados para criação ou atualização de um registro; request.body  --- {"name": "fulano", ...}
//Route Params - Identificar um recurso na rota que se deseja alterar ou deleter; request.params /users/:id {localhost:3333/users/1} 
//Query Params - Paginação, filtros, ordenação //request.query {localhost:3333/users?page=2&sort=name}

app.get('/', (request, response) => {
    return response.json({message: 'Hello World'})
})

app.listen(3333);