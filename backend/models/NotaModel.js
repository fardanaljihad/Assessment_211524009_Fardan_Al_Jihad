import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Tenan from "../models/TenanModel.js";
import Kasir from "../models/KasirModel.js";

const {DataTypes} = Sequelize;

const Nota = db.define('nota', {
  kodeNota: {
    type: DataTypes.STRING(15),
    unique: true,
    primaryKey: true
  },
  tglNota: DataTypes.DATEONLY,
  jamNota: DataTypes.TIME,
  jumlahBelanja: DataTypes.INTEGER,
  diskon: DataTypes.INTEGER,
  total: DataTypes.INTEGER
}, {
  freezeTableName: true
});

Tenan.hasMany(Nota);
Nota.belongsTo(Tenan);

Kasir.hasMany(Nota);
Nota.belongsTo(Kasir);

export default Nota;

(async() => {
  await db.sync();
})();
