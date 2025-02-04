import mysql, { Connection } from 'mysql2/promise';

class BancoMysql {
    listarPorId(id: string) {
        throw new Error('Method not implemented.');
    }
    // Propriedade
    private conexao: Promise<Connection>;

    // Métodos
    constructor() {
        this.conexao = mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "localhost",
            user: process.env.dbuser ? process.env.dbuser : "root",
            password: process.env.dbpassword ? process.env.dbpassword : "",
            database: process.env.dbname ? process.env.dbname : "catalogo_cosmeticos",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });
    }

    async getConnection() {
        const conn = await this.conexao; 
        return conn;
    }

    async end() {
        const conn = await this.conexao; 
        await conn.end();
    }

    async listar(){
        const conn = await this.getConnection()
        const [result, fields] = await conn.query("SELECT * from produtos");
        return result
    }
    async inserir(produto:{id:string,nome:string,descricao:string,valor:string,imagem:string}){
        const conn = await this.getConnection()
        const sqlQuery = "INSERT INTO produtos (id,nome,descricao,preco,imagem) VALUES (?,?,?,?,?)"
        const parametro = [produto.id,produto.nome,produto.descricao,produto.valor,produto.imagem]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async excluir(id:string){
        const conn = await this.getConnection()
        const sqlQuery = "DELETE FROM produtos WHERE id = ?"
        const parametro = [id]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async alterar(id:string,produto:{id?:string,nome:string,descricao:string,valor:string,imagem:string}){
        const conn = await this.getConnection()
        const sqlQuery = "UPDATE produtos SET nome=?,descricao=?,preco=?,imagem=? WHERE id = ?"
        const parametro = [produto.nome,produto.descricao,produto.valor,produto.imagem,id]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }

    async listarLojas() {
        const conn = await this.getConnection();
        const [result] = await conn.query("SELECT * FROM lojas");
        return result;
    }

    async inserirLoja(loja: { id: string, nome: string, endereco: string, telefone: string, email: string }) {
        const conn = await this.getConnection();
        const sqlQuery = "INSERT INTO lojas (id, nome, endereco, telefone, email) VALUES (?, ?, ?, ?, ?)";
        const parametros = [loja.id, loja.nome, loja.endereco, loja.telefone, loja.email];
        const [result] = await conn.query(sqlQuery, parametros);
        return result;
    }

    async excluirLoja(id: string) {
        const conn = await this.getConnection();
        const sqlQuery = "DELETE FROM lojas WHERE id = ?";
        const [result] = await conn.query(sqlQuery, [id]);
        return result;
    }

    async alterarLoja(id: string, loja: { nome?: string, endereco?: string, telefone?: string, email?: string }) {
        const conn = await this.getConnection();
        const sqlQuery = "UPDATE lojas SET nome=?, endereco=?, telefone=?, email=? WHERE id=?";
        const parametros = [loja.nome, loja.endereco, loja.telefone, loja.email, id];
        const [result] = await conn.query(sqlQuery, parametros);
        return result;
    }

    async listarLojaPorId(id: string) {
        const conn = await this.getConnection();
        const [result] = await conn.query("SELECT * FROM lojas WHERE id = ?", [id]);
        return result;
    }
}

export default BancoMysql;