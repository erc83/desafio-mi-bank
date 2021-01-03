const { Pool } = require("pg");

const config = {
    user: 'erc83',
    password: '2210',
    host: 'localhost',
    database: 'mibanco'
};

const pool = new Pool(config)

pool.connect((err, client, release)=>{
    const qry = 
    "SELECT * FROM accounts WHERE balance = 20000";
    //"SELECT * FROM accounts WHERE id = 5";
    client.query(qry, (err, results)=>{
        if(err) console.log(err);
        console.log(results.rows);
        release()
        pool.end()
    })
})