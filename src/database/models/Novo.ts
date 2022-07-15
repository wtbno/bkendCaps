import { DataTypes, Model } from "sequelize";
import db from "../db";

import {INovo} from "src/interfaces/models/INovo"


class Novo extends Model<INovo> {
  //table models
  declare id: number;

  declare name: string;

  declare email: string;

  declare password: string;
}

Novo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    
  },
  { tableName: "Novo", sequelize: db }
);

export default Novo;
