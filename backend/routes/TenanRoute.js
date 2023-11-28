import express from "express";
import { createTenan } from "../controllers/TenanController.js";

const router = express.Router();

router.post('/tenan', createTenan);

export default router;