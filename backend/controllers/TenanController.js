import Tenan from "../models/TenanModel.js";

export const createTenan = async(req, res) => {
  try {
    await Tenan.create(req.body);
    res.status(201).json({ message: "Tenan berhasil dibuat" });
  } catch (error) {
    console.log(error.message)
  }
}