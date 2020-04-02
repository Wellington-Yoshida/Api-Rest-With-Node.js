const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'db-api-node-atividades',
    password: 'root',
    port: 5432
})