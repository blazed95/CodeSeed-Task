// const config = require('./api/config/config');

const config = {
  db: {
    database: process.env.DEV_DATABASE_NAME,
    user: process.env.DEV_USERNAME,
    password: process.env.DEV_PASSWORD,
    define: {
      timestamps: true,
      underscored: true,
    },
    options: {
      host: process.env.DEV_DB_HOST,
      port: process.env.DEV_DB_PORT,
      dialect: 'postgres',
    },
  },
};
module.exports = config;
