import Kasir from "../models/KasirModel.js";

export const createKasir = async(req, res) => {
  try {
    await Kasir.create(req.body);
    res.status(201).json({ message: "Kasir berhasil dibuat" });
  } catch (error) {
    console.log(error.message)
  }
}