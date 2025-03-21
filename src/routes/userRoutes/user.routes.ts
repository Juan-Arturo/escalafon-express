import { Router } from "express";
import {
  getUserDetailsByCurp,
  updateRupeet,
  obtenerDatosCodigoPostal,
  obtenerCodigoPostal,
} from "../../controllers/usersController/users.controller";
import { validateJwt } from "../../middlewares/validate.md";

import { validateRequest } from "../../middlewares/validateRequest.md";
import { getCivilStatusByName } from "../../controllers/civilStatusController/civilStatus.controller";

const router = Router();

router.post("/details", validateJwt, validateRequest, getUserDetailsByCurp);
router.post("/updateRupeet", validateJwt, updateRupeet);
router.get("/civilStatus/:estado_civil", validateJwt, getCivilStatusByName);

// Ruta para obtener datos del código postal
router.get(
  "/infoCodigoPostal/:codigoPostal",
  validateJwt,
  obtenerDatosCodigoPostal
);
router.get("/codigoPostal/:codigoPostal", validateJwt, obtenerCodigoPostal);

// Remover las rutas de imágenes ya que ahora se manejan a través del controlador de documentos

export default router;
