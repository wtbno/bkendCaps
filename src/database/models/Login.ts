import { DataTypes, Model } from "sequelize";
import db from "../db";
import { ILogin } from "../../interfaces/models/ILogin";

class Login extends Model<ILogin> {
  //table models
  declare id: number;

  declare email: string;

  declare password: string;
}

Login.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  { tableName: "logins", sequelize: db }
);

export default Login;
