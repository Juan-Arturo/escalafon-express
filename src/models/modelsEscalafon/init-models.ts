import type { Sequelize } from "sequelize";
import { initCentroTrabajoModel } from "./centro_trabajo";

export function initModels(sequelize: Sequelize) {
  const CentroTrabajo = initCentroTrabajoModel(sequelize);

  return {
    CentroTrabajo,
  };
}