import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Tenan = db.define('tenan', {
  kodeTenan: {
    type: DataTypes.STRING(15),
    unique:true,
    primaryKey: true
  },
  namaTenan: DataTypes.STRING(32),
  hp: DataTypes.STRING(32)
}, {
  freezeTableName: true
});

export default Tenan;

(async() => {
  await db.sync();
})();
