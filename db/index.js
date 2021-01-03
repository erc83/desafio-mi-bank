const { Pool } = require('pg')
const Cursor = require('pg-cursor')

const config = {
    user: 'erc83', 
    password: '2210',
    host: 'localhost',
    database:'mibanco',
    port:5432
}

const pool = new Pool(config);
 
module.exports = {
    getClient: ()=> pool.connect(), //entrega un cliente pool.conect no se puede modificar  
    end: ()=> pool.end(),
    Cursor
}