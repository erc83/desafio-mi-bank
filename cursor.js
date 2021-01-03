const { Pool } = require('pg')
const Cursor = require('pg-cursor')

const config = {
    user: 'erc83',
    password: '2210',
    host: 'localhost',
    database: 'mibanco'
}

const pool = new Pool(config)

pool.connect((err, client, release)=>{
    if(err) console.log(err);
    const cursor = new Cursor("SELECT * FROM accounts");
    client.query(cursor)
    cursor.read(10, (err, rows)=>{
        console.log(rows);
        cursor.close();
        release();
        pool.end();
    })
})
