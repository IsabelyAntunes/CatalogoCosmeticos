import { MongoClient } from 'mongodb';

//const url = 'mongodb://localhost:27017';
//const client = new MongoClient(url);
//const dbName = 'banco1022b';
//await client.connect();
//const db = client.db(dbName);
class BancoMongo{
    private client:MongoClient
    constructor(){
        const url = 'mongodb://localhost:27017'
        const client = new MongoClient(url);
        this.client = client
    }

    async getConnection(){
        const conn = await this.client.connect();
        const db = this.client.db("catalogo_cosmeticos");
        return db
    }

    async end() {
        const conn = await this.client.connect(); 
        await conn.close();
    }
    async listar(){
        const conn = await this.getConnection()
        const result = await conn.collection("produtos").find().toArray()
        return result
    }
    async inserir(produto:{id:number,nome:string,descricao:string,valor:string,imagem:string}){
        const conn = await this.getConnection()
        const result = await conn.collection("produtos").insertOne(produto)
        return result
    }
    async excluir(id:string){
        const conn = await this.getConnection()
        const result = await conn.collection("produtos").deleteOne({id:parseInt(id)})
        return result
    }
    async alterar(id:string,produto:{id?:string,nome:string,descricao:string,valor:string,imagem:string}){
        const conn = await this.getConnection()
        const result = await conn.collection("produtos").updateOne({id:parseInt(id)},{$set:produto})
        return result
    }
    async listarPorId(id: string){
        const conn = await this.getConnection()
        const result = await conn.collection("produtos").findOne({id:parseInt(id)})
        return result
    }

    async listarLojas() {
        const conn = await this.getConnection();
        const result = await conn.collection("lojas").find().toArray();
        return result;
    }

    async inserirLoja(loja: { id: number, nome: string, endereco: string, telefone: string, email: string }) {
        const conn = await this.getConnection();
        const result = await conn.collection("lojas").insertOne(loja);
        return result;
    }

    async excluirLoja(id: string) {
        const conn = await this.getConnection();
        const result = await conn.collection("lojas").deleteOne({ id: parseInt(id) });
        return result;
    }

    async alterarLoja(id: string, loja: { nome?: string, endereco?: string, telefone?: string, email?: string }) {
        const conn = await this.getConnection();
        const result = await conn.collection("lojas").updateOne({ id: parseInt(id) }, { $set: loja });
        return result;
    }

    async listarLojaPorId(id: string) {
        const conn = await this.getConnection();
        const result = await conn.collection("lojas").findOne({ id: parseInt(id) });
        return result;
    }

}

export default BancoMongo