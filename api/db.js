const { Pool } = require('pg')

const pool = new Pool({
    user: 'garcia',
    password: 'silvia',
    database: 'bigmark',
    host: 'localhost',
    port: 5432
})

module.exports = pool