const Cursor = require('pg-cursor')
const yargs = require('yargs');
const db = require('./db/index');

const createAndEditArgs = {
    description: {
        describe: 'descripcion de la transaccion',
        demand: true,
        alias: 'd'
    },
    description: {
        describe: 'descripcion de la transaccion',
        demand: true,
        alias: 'd'
    },
    date: {
        describe: 'fecha de la transaccion',
        demand: true,
        alias: 'f'
    },
    amount: {
        describe: 'valor de la transaccion',
        demand: true,
        alias: 'a'
    },
    accountid: {
        describe: 'identificacion de los balances de la tabla account',
        demand: true,
        alias: 'i'
    }};

(async()=>{
    let client
    try {
        client = await db.getClient();
    } catch (error) {
        console.log('error en la conexion', error.stack);
    }

const argv = yargs.command('trxs', 'Comando para agregar una nueva transaccion',createAndEditArgs,
    async(args) =>{
        const queryObject = {
            text: 'INSERT INTO accounts (description, date, amount, accountid) VALUES ($2, $3, $4, $5) RETURNING *',
            values:[args.description, args.date, args.amount, args.accountid]
        }
        const results = await client.query(queryObject)
        client.release();
        db.end;
        console.log(results.rows[0])       

    }
).help().argv
})()