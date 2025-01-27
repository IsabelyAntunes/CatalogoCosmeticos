import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express()

app.use(express.json())

app.use(cors())

import BancoMysql from './db/bancoMysql'

app.delete("/produtos/:id",async (req,res)=>{
    console.log("Tentando excluir o produto de id:",req.params.id)
    try{
        const sqlQuery = "DELETE FROM produtos WHERE id = ?"
        const parametro = [req.params.id]

        const banco = new BancoMysql();

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
        //const sqlQuery = "UPDATE produtos SET nome=?,descricao=?,preco=?,imagem=? WHERE id = ?"
        const produto = {nome,descricao,valor,imagem}

        const banco = new BancoMysql();

        const result = await banco.alterar(req.params.id,produto)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
})



//INICIAR O SERVIDOR
app.listen(8000,()=>{
    console.log("SERVIDOR INICIADO NA PORTA 8000")
})