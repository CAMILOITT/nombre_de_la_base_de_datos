import * as dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();

export const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    port: process.env.DB_PORT,
    define: {
      timestamps: false,
    },
  }
);
