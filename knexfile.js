// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: process.env.DATABASE_USER,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD
    }
  }

};
