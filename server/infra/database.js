const pgp = require('pg-promise')()
const db = pgp({
  user: 'marcio',
  password: 'pass',
  host: 'localhost',
  port: 5432,
  database: 'blog'
})

module.exports = db
