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


export const updateBarang = async (req, res) => {
  const { kodeBarang } = req.params;

  try {
    const [updatedRows] = await Barang.update(req.body, {
      where: { kodeBarang: kodeBarang },
    });

    if (updatedRows > 0) {
      res.status(200).json({ message: "Barang berhasil diupdate" });
    } else {
      res.status(404).json({ message: "Barang tidak ditemukan" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Gagal mengupdate barang" });
  }
};


export const deleteBarang = async (req, res) => {
  const { kodeBarang } = req.params;

  try {
    const deletedRowCount = await Barang.destroy({
      where: { kodeBarang: kodeBarang },
    });

    if (deletedRowCount > 0) {
      res.status(200).json({ message: "Barang berhasil dihapus" });
    } else {
      res.status(404).json({ message: "Barang tidak ditemukan" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Gagal menghapus barang" });
  }
};