import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Tenan from "../models/TenanModel.js";

const {DataTypes} = Sequelize;

const Barang = db.define('barang', {
  kodeBarang: {
    type: DataTypes.STRING(15),
    unique: true,
    primaryKey: true
  },
  namaBarang: DataTypes.STRING(32),
  satuan: DataTypes.STRING(32),
  hargaSatuan: DataTypes.INTEGER,
  stok: DataTypes.INTEGER
}, {
  freezeTableName: true
});

Tenan.hasMany(Barang);
Barang.belongsTo(Tenan);

export default Barang;

(async() => {
  await db.sync();
})();
