import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface centro_trabajoAttributes {
  id_cct: number;
  Nombre: string;
  Clave: string;
  Domicilio: string;
}

export type centro_trabajoPk = "id_cct";
export type centro_trabajoId = centro_trabajo[centro_trabajoPk];
export type centro_trabajoOptionalAttributes = "id_cct";
export type centro_trabajoCreationAttributes = Optional<centro_trabajoAttributes, centro_trabajoOptionalAttributes>;

export class centro_trabajo extends Model<centro_trabajoAttributes, centro_trabajoCreationAttributes> implements centro_trabajoAttributes {
  id_cct!: number;
  Nombre!: string;
  Clave!: string;
  Domicilio!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof centro_trabajo {
    return centro_trabajo.init({
    id_cct: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Clave: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Domicilio: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'centro_trabajo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cct" },
        ]
      },
    ]
  });
  }
}
