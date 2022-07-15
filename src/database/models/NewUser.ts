import { DataTypes, Model } from "sequelize";
import db from "../db";
import {INewUser} from "src/interfaces/models/INewUser"


class NewUser extends Model<INewUser> {
  //table models
  declare id: number;

  declare name: string;

  declare email: string;

  declare password: string;
}

NewUser.init(
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
  { tableName: "NovoUsuário", sequelize: db }
);

export default NewUser;
