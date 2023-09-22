const express = require("express");
const app = express();

app.use(express.json())
// todos as rotas que vierem abaixo desse comando vao usar o .json nas requisições



let obj = {
   
};



app.get("/", (request, response) => {
    // callback
    response.send(obj);
});



app.post("/", (request, response) => {

    obj = request.body
    response.send(obj);
     
})



app.patch("/", (request, response) => {

    const update = request.body //pegar os dados do path e salvar nessa var
    obj.altura = update.altura
    response.send(obj);

})



app.delete("/", (req, res) => {

    obj = {}
    res.send("deletou");
    

})



app.listen(8888, () => { 
    console.log("Servidor esta online na porta 8888");
}); 



// só vai entrar na rota se ela existir
// {
//     "nome": "maria",
//     "poder": "fada da tecnologia",
//     "altura": "tampinha"
// }