import express from "express";
import { createNota } from "../controllers/NotaController.js";

const router = express.Router();

router.post('/tenan/:id/nota', createNota);

export default router;