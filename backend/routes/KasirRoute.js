import express from "express";
import { createKasir } from "../controllers/KasirController.js";

const router = express.Router();

router.post('/kasir', createKasir);

export default router;