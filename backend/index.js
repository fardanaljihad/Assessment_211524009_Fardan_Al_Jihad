import express from "express";
import cors from "cors";
import TenanRoute from "./routes/TenanRoute.js";
import KasirRoute from "./routes/KasirRoute.js";
import BarangRoute from "./routes/BarangRoute.js";
import NotaRoute from "./routes/NotaRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(KasirRoute);
app.use(TenanRoute);
app.use(BarangRoute);
app.use(NotaRoute);



app.listen(5000, () => console.log("Server up and running..."));