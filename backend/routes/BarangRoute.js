import express from "express";
import { createBarang, getBarang } from "../controllers/BarangController.js";

const router = express.Router();

router.post('/tenan/:id/barang', createBarang);
router.get('/barang', getBarang);

export default router;