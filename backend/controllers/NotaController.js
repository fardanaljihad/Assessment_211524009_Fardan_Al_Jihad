import Nota from "../models/NotaModel.js";

export const createNota = async(req, res) => {
  try {
    await Nota.create(req.body);
    res.status(201).json({ message: "Nota berhasil dibuat" });
  } catch (error) {
    console.log(error.message)
  }
}