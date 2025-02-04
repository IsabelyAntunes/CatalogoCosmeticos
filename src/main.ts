import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express()

app.use(express.json())

app.use(cors())


import BancoMysql from './db/bancoMysql'
import BancoMongo from './db/bancoMongo'

app.get("/produtos",async(req,res)=>{
    try{
        const banco = new BancoMongo();
        const result = await banco.listar()
        console.log(result)
        await banco.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

app.get("/produtos/:id",async(req,res)=>{
    try{
        const banco = new BancoMongo();
        const result = await banco.listarPorId(req.params.id)
        console.log(result)
        await banco.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

app.post("/produtos",async(req,res)=>{
    try{
        const {id,nome,descricao,valor,imagem} = req.body
        console.log(id,nome,descricao,valor,imagem)
        const banco = new BancoMongo();

        const produto = {id:parseInt(id),nome,descricao,valor,imagem}

        const result = await banco.inserir(produto)
        console.log(result)
        
        await banco.end()
        
        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

app.delete("/produtos/:id",async (req,res)=>{
    console.log("Tentando excluir o produto de id:",req.params.id)
    try{
        const sqlQuery = "DELETE FROM produtos WHERE id = ?"
        const parametro = [req.params.id]

        const banco = new BancoMongo();

        const result = await banco.excluir(req.params.id)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
})
app.put("/produtos/:id",async (req,res)=>{
    console.log("Tentando alterar o produto de id:",req.params.id)
    try{
        const {nome,descricao,valor,imagem} = req.body
        //const sqlQuery = "UPDATE produtos SET nome=?,descricao=?,valor=?,imagem=? WHERE id = ?"
        const produto = {nome,descricao,valor,imagem}

        const banco = new BancoMongo();

        const result = await banco.alterar(req.params.id,produto)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
})


app.get("/lojas", async (req, res) => {
    try {
        const banco = new BancoMongo();
        const result = await banco.listarLojas();
        console.log(result);
        await banco.end();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("Erro do servidor");
    }
});

// Listar loja por ID
app.get("/lojas/:id", async (req, res) => {
    try {
        const banco = new BancoMongo();
        const result = await banco.listarLojaPorId(req.params.id);
        console.log(result);
        await banco.end();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("Erro do servidor");
    }
});

// Cadastrar nova loja
app.post("/lojas", async (req, res) => {
    try {
        const { id, nome, endereco, telefone, email } = req.body;
        console.log(id, nome, endereco, telefone, email);
        const banco = new BancoMongo();
        const loja = { id: parseInt(id), nome, endereco, telefone, email };
        const result = await banco.inserirLoja(loja);
        console.log(result);
        await banco.end();
        res.status(200).send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("Erro do servidor");
    }
});

// Excluir loja por ID
app.delete("/lojas/:id", async (req, res) => {
    console.log("Tentando excluir a loja de id:", req.params.id);
    try {
        const banco = new BancoMongo();
        const result = await banco.excluirLoja(req.params.id);
        res.status(200).send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("Erro do servidor");
    }
});

// Atualizar loja por ID
app.put("/lojas/:id", async (req, res) => {
    console.log("Tentando alterar a loja de id:", req.params.id);
    try {
        const { nome, endereco, telefone } = req.body;
        const loja = { nome, endereco, telefone };
        const banco = new BancoMongo();
        const result = await banco.alterarLoja(req.params.id, loja);
        res.status(200).send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("Erro do servidor");
    }
});



//INICIAR O SERVIDOR
app.listen(8000,()=>{
    console.log("SERVIDOR INICIADO NA PORTA 8000")
})