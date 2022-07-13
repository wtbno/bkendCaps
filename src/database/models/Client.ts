import { DataTypes, Model } from "sequelize";
import db from "../db";
import {IClient} from "../../interfaces/models/IClient";

class Client extends Model<IClient> {
  //table models
  declare id: number;

  declare corpname: string;

  declare cnpj: string;

  declare adress: string;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    corpname: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    cnpj: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    
  },
  { tableName: "Clients", sequelize: db }
);

export default Client;
