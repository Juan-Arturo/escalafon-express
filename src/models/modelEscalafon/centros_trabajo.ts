import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface centros_trabajoAttributes {
  id_cct: number;
  nombre: string;
  clave: string;
  domicilio: string;

  deletedAt?: Date;
}

export type centros_trabajoPk = "id_cct";
export type centros_trabajoId = centros_trabajo[centros_trabajoPk];
export type centros_trabajoOptionalAttributes = "id_cct"  | "deletedAt";
export type centros_trabajoCreationAttributes = Optional<centros_trabajoAttributes, centros_trabajoOptionalAttributes>;

export class centros_trabajo extends Model<centros_trabajoAttributes, centros_trabajoCreationAttributes> implements centros_trabajoAttributes {
  id_cct!: number;
  nombre!: string;
  clave!: string;
  domicilio!: string;
 
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof centros_trabajo {
    return centros_trabajo.init({
    id_cct: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ID único del centro de trabajo"
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Nombre del centro de trabajo"
    },
    clave: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "Clave del centro de trabajo",
      unique: "clave"
    },
    domicilio: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "Domicilio del centro de trabajo"
    }
  }, {
    sequelize,
    tableName: 'centros_trabajo',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cct" },
        ]
      },
      {
        name: "clave",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clave" },
        ]
      },
    ]
  });
  }
}
