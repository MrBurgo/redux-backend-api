module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/todos'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
