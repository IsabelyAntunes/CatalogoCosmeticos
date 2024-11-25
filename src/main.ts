import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express()

app.use(express.json())

app.use(cors())

app.get("/cosmeticos",async(req,res)=>{
    try{
        const conexao = await mysql.createConnection({
            host:process.env.dbhost?process.env.dbhost:"localhost",
            user: process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.password:"",
            database:process.env.dbname?process.env.dbname:"catalogocomesticos",
            port: process.env.dbport?parseInt(process.env.dbport):3306
        })
        const [result,fields] = await conexao.query("SELECT * FROM comesticos")
        await conexao.end()
        res.send(result)
    }catch(e){
        res.status(500).send("Erro do servidor")
    }
})


app.post("/cosmeticos",async(req,res)=>{
    try{
        const conexao = await mysql.createConnection({
            host:process.env.dbhost?process.env.dbhost:"localhost",
            user: process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.password:"",
            database:process.env.dbname?process.env.dbname:"catalogocomesticos",
            port: process.env.dbport?parseInt(process.env.dbport):3306
        })
        const {id, nome, descricao, valor, imagem} = req.body
        const [result, fields] = 
          await conexao.query("INSERT INTO cosmeticos values (?,?,?,?,?)",
            [id,nome,descricao,valor,imagem])
            await conexao.end()
        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
})

app.listen(8000,()=>{
    console.log("Servidor Iniciado na Porta 8000")
})