import { Sequelize } from "sequelize";

const db = new Sequelize('pujasera', 'postgres', '1', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
})

export default db;
