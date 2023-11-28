import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Kasir = db.define('kasir', {
  kodeKasir: {
    type: DataTypes.STRING(15),
    unique:true,
    primaryKey: true
  },
  namaKasir: DataTypes.STRING(32),
  hp: DataTypes.STRING(32)
}, {
  freezeTableName: true
});

export default Kasir;

(async() => {
  await db.sync();
})();
