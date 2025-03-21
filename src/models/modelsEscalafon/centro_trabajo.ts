import { DataTypes, Model, Optional } from "sequelize";
import type { Sequelize } from "sequelize";

export interface CentroTrabajoAttributes {
  id_cct: number;
  Nombre: string;
  Clave: string;
  Domicilio: string;
}

export interface CentroTrabajoCreationAttributes extends Optional<CentroTrabajoAttributes, "id_cct"> {}

export class CentroTrabajo extends Model<CentroTrabajoAttributes, CentroTrabajoCreationAttributes> implements CentroTrabajoAttributes {
  public id_cct!: number;
  public Nombre!: string;
  public Clave!: string;
  public Domicilio!: string;
}

export function initCentroTrabajoModel(sequelize: Sequelize) {
  CentroTrabajo.init(
    {
      id_cct: {
        type: DataTypes.INTEGER({ length: 20 }),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "ID único del centro de trabajo",
      },
      Nombre: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "Nombre del centro de trabajo",
      },
      Clave: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "Clave del centro de trabajo",
      },
      Domicilio: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "Domicilio del centro de trabajo",
      },
    },
    {
      sequelize,
      modelName: "CentroTrabajo",
      tableName: "centros_trabajo",
      timestamps: false,
      comment: "Tabla de centros de trabajo",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );

  return CentroTrabajo;
}