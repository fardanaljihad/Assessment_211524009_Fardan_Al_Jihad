import express from "express";
import { createBarang, deleteBarang, getBarang, updateBarang } from "../controllers/BarangController.js";

const router = express.Router();

router.post('/tenan/:id/barang', createBarang);
router.get('/barang', getBarang);
router.put('/barang/:kodeBarang', updateBarang);
router.delete('/barang/:kodeBarang', deleteBarang);

export default router;