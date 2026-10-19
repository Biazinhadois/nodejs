import mysql from 'mysql2/promise';

export function criarPool() {
    return mysql.createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASS || '', //caso não seja informado pode ser vazio
        database: process.env.DB_NAME,
        waitForConnections: true, //Permite fila, se estiver false, apenas 11º conexão retorna erro
        connectionLimit: 10, //limite máximo de conexões simultaneas
        queueLimit: 0 //limite da fila waitForConnections, quando estiver 0 a fila é infinita
    })
}