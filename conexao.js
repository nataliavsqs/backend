const {
    Pool
} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'appbraintutor',
    password: 'nata12nina',
    port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err);
    } else {
        console.log('Conexão bem-sucedida:', res.rows);
    }
});

const query = (text, params) => {
    return pool.query(text, params);
};

module.exports = {
    query,
};