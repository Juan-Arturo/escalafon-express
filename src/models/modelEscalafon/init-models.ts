import type { Sequelize } from "sequelize";
import { centro_trabajo as _centro_trabajo } from "./centro_trabajo";
import type { centro_trabajoAttributes, centro_trabajoCreationAttributes } from "./centro_trabajo";
import { centros_trabajo as _centros_trabajo } from "./centros_trabajo";
import type { centros_trabajoAttributes, centros_trabajoCreationAttributes } from "./centros_trabajo";

export {
  _centro_trabajo as centro_trabajo,
  _centros_trabajo as centros_trabajo,
};

export type {
  centro_trabajoAttributes,
  centro_trabajoCreationAttributes,
  centros_trabajoAttributes,
  centros_trabajoCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const centro_trabajo = _centro_trabajo.initModel(sequelize);
  const centros_trabajo = _centros_trabajo.initModel(sequelize);


  return {
    centro_trabajo: centro_trabajo,
    centros_trabajo: centros_trabajo,
  };
}
