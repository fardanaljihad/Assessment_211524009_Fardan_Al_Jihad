import Barang from "../models/BarangModel.js";

export const createBarang = async(req, res) => {
  try {
    req.body.tenanKodeTenan = req.params.id;
    await Barang.create(req.body);
    res.status(201).json({ message: "Barang berhasil dibuat" });
  } catch (error) {
    console.log(error.message)
  }
}


export const getBarang = async(req, res) => {
  try {
    const response = await Barang.findAll({
      attributes: [
        'kodeBarang',
        'namaBarang', 
        'satuan', 
        'hargaSatuan',
        'stok'
      ]
    });
    res.status(200).json(response);
  } catch(error) {
    console.log(error.message);
  }
}