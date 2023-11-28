import express from "express";
import { createBarang } from "../controllers/BarangController.js";

const router = express.Router();

router.post('/tenan/:id/barang', createBarang);

export default router;