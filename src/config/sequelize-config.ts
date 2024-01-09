import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  database: "e_commerce",
  host: "127.0.0.1",
  username: "root",
  password: "root",
  dialect: "mysql",
});

export default sequelize;
