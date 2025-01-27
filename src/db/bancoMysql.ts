import mysql, { Connection } from 'mysql2/promise';

class BancoMysql {
    private conexao: Promise<Connection>;

    constructor(){
        this.conexao = mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"catalogo_cosmeticos",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        });
    }

    async getConnection(){
        const conn = await this.conexao;
        return conn;
    }

    async end(){
        const conn = await this.conexao;
        await conn.end();
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
        const sqlQuery = "UPDATE produtos SET nome=?,descricao=?,valor=?,imagem=? WHERE id = ?"
        const parametro = [produto.nome,produto.descricao,produto.valor,produto.imagem,id]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
}

export default BancoMysql;