import { Router } from "express";
import {
  getAllCentrosTrabajo,
  createCentroTrabajo,
} from "../../../controllers/cctControllers/cct.controller";
import { validateJwt } from "../../../middlewares/validate.md";
import { validateRequest } from "../../../middlewares/validateRequest.md";

const router = Router();

// Ruta para verificar acceso a las rutas
router.get("/access", (req, res) => {
  res.status(200).json({ message: "¡Acceso exitoso a las rutas de CCT!" });
});

// Ruta para obtener todos los centros de trabajo
router.get("/getAllCTT", validateJwt, getAllCentrosTrabajo);

// Ruta para crear un nuevo centro de trabajo
router.post("/cctCreateUpdate", createCentroTrabajo);

export default router;
