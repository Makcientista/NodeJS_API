import express, { request, response } from 'express';

const app = express();

/** 
 * Get => Buscar
 * Post => Salvar
 * Put =>  Alterar 
 * Delete => Deletar
 * Patch => Alteração especifica 
 * 
*/

//http://localhost:3333/users
app.get("/", (request, response) => {
    return response.json({message: "Hello Mr.Makiesse"});
});


//1 parametro => Rota (Recurso API)
//2 para => request, response


app.post("/", (request, response) => {
    //Recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"});
})


app.listen(3333, () => console.log("Server is running!"));
